import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CircularProgressBar from './CircularProgressBar';

export default function Pomodoro() {
  const [percentage, setPercentage] = useState(14);
  const timerIdRef = useRef(null);
  const [count, setCount] = useState(0);
  const [toStartTime, setToStartTime] = useState(30);
  const [startTime, setStartTime] = useState(30);
  const [buttonState, setButtonState] = useState('Work');

  console.log(buttonState);

  // Start the timer
  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  // Stop timer when it reaches 0

  if (startTime - count <= 0) {
    clearInterval(timerIdRef.current);
  }

  // Stop timer when the stop button is clicked
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  // Reset the timer

  const handleChange = (e) => {
    setToStartTime(e.target.value);
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  // Function to reset the timer
  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  };

  // Function to attach 0 in front of numbers less than 10
  function padStartWith0(number, length) {
    return number.toString().padStart(length, '0');
  }

  // Function to convert seconds to minutes and seconds
  const currentTime = (timer) => {
    const min = Math.floor(timer / 60);
    const sec = Math.floor(timer % 60);

    return `${padStartWith0(min, 2)}:${padStartWith0(sec, 2)}`;
  };

  const handleChangeEvent = (e) => {
    setPercentage(e.target.value);
  };

  useEffect(() => {
    setPercentage(((startTime - count) * 100) / startTime);
  }, [count, startTime]);

  return (
    <div>
      <Background>
        <div>Timer: {startTime - count}s</div>
        <div>Current Time: {currentTime(startTime - count)}</div>
        <div>Start Time: {startTime}</div>
        <div>Percentage: {((startTime - count) * 100) / startTime}</div>
        <div>
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={resetHandler}>Reset</button>
          <input onChange={handleChange}></input>
          <button onClick={() => setStartTime(toStartTime)}>
            Set Start Time
          </button>
          <Container>
            <ButtonContainer>
              <Button
                onClick={() => setButtonState('Work')}
                buttonState={buttonState}
                title="Work"
              >
                Work
              </Button>
              <Button
                onClick={() => setButtonState('Short Break')}
                buttonState={buttonState}
                title="Short Break"
              >
                Short Break
              </Button>
              <Button
                onClick={() => setButtonState('Long Break')}
                buttonState={buttonState}
                title="Long Break"
              >
                Long Break
              </Button>
            </ButtonContainer>
            <CircularProgressBar
              strokeWidth={10}
              squareSize={200}
              percentage={100 - percentage}
              time={currentTime(startTime - count)}
            />
            <input
              id="progressInput"
              type="range"
              min="0"
              max="100"
              step="1"
              value={percentage}
              onChange={handleChangeEvent}
            />
          </Container>
        </div>
      </Background>
    </div>
  );
}

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2c5c5;
  width: 400px;
  height: 500px;
  margin: auto;
  padding-top: 100px;
`;

const Background = styled.div`
  background-color: #ffffff;
`;

const Button = styled.div<{ title: string; buttonState: string }>`
  width: 90px;
  height: 30px;

  color: #ffffff;
  padding: auto;
  font-size: 12px;
  padding-left: 20px;
  padding-top: 7px;
  cursor: pointer;

  background-color: ${(props) =>
    props.buttonState === props.title ? `${'#8b3a3a'}` : `${'#b88d8d'}`};
`;

const ButtonContainer = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  padding: auto;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;
