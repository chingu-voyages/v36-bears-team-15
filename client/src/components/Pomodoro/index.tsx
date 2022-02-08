import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CircularProgressBar from './CircularProgressBar';
import Modal from 'react-modal';
import Setting from './Setting';
import SettingsContext from 'pages/pomodoro/SettingsContext';

export default function Pomodoro() {
  const settingsInfo = useContext(SettingsContext);
  // Show remaining time in percentage
  const [percentage, setPercentage] = useState(14);

  const timerIdRef = useRef(null);

  // Count Time passed in seconds
  const [count, setCount] = useState(0);

  // Set Start Time
  const [toStartTime, setToStartTime] = useState(30);

  // Save start Time temporary
  const [startTime, setStartTime] = useState(30);

  // Pomodoro State
  const [timerState, setTimerState] = useState('Work');

  // Toggle Start / Stop Button

  const [isClicked, setIsClicked] = useState(false);

  const [longBreakIntervalCount, setLongBreakIntervalCount] = useState(
    settingsInfo.longBreakInterval,
  );

  //console.log(buttonState);
  console.log(settingsInfo.shortBreakDuration);

  // Start the timer
  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }

    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    setIsClicked(true);
  };

  // Stop timer when it reaches 0 and change timer state

  useEffect(() => {
    if (startTime - count < 0) {
      clearInterval(timerIdRef.current);
      setCount(0);
      setIsClicked(false);
      if (settingsInfo.isAlarmOn) {
        const audio = new Audio('./alarm.mp3');
        audio.play();
      }

      if (timerState === 'Work') {
        setTimerState('Short Break');
        setIsClicked(false);
      } else if (timerState === 'Short Break') {
        if (longBreakIntervalCount !== 0) {
          setTimerState('Work');
          setIsClicked(false);
          setLongBreakIntervalCount(longBreakIntervalCount - 1);
        } else if (longBreakIntervalCount === 0) {
          setTimerState('Long Break');
          setIsClicked(false);
        }
        // After long break, change to work state and reset long break interval count
      } else if (timerState === 'Long Break') {
        setLongBreakIntervalCount(settingsInfo.longBreakInterval);
        setTimerState('Work');
        setIsClicked(false);
      }
    }
  }, [count]);

  // Stop timer when the stop button is clicked
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setIsClicked(false);
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
    setIsClicked(false);
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

  // const handleChangeEvent = (e) => {
  //   setPercentage(e.target.value);
  // };

  // Show timer by percentage

  useEffect(() => {
    setPercentage(((startTime - count) * 100) / startTime);
  }, [count, startTime]);

  // Change Time of the timer when the state of timer is changed
  useEffect(() => {
    if (timerState === 'Work') {
      setStartTime(60 * settingsInfo.pomodoroDuration);
      setCount(0);
      setPercentage(100);
      stopHandler();
      if (settingsInfo.isPomodoroAutoStartOn) {
        startHandler();
      }
    } else if (timerState === 'Short Break') {
      setStartTime(60 * settingsInfo.shortBreakDuration);
      setCount(0);
      setPercentage(100);
      stopHandler();
      if (settingsInfo.isBreakAutoStartOn) {
        startHandler();
      }
    } else if (timerState === 'Long Break') {
      setStartTime(60 * settingsInfo.longBreakDuration);
      setCount(0);
      setPercentage(100);
      stopHandler();
      if (settingsInfo.isBreakAutoStartOn) {
        startHandler();
      }
    }
  }, [
    timerState,
    settingsInfo.pomodoroDuration,
    settingsInfo.shortBreakDuration,
    settingsInfo.longBreakDuration,
  ]);

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
            <Button onClick={() => settingsInfo.setShowModal(true)}>
              Setting
            </Button>
            <Modal
              isOpen={settingsInfo.showModal}
              onRequestClose={() => settingsInfo.setShowModal(false)}
              style={modalStyles}
              ariaHideApp={false}
            >
              <Setting />
            </Modal>
            <ButtonContainer>
              <Button
                onClick={() => setTimerState('Work')}
                timerState={timerState}
                title="Work"
              >
                Work
              </Button>
              <Button
                onClick={() => setTimerState('Short Break')}
                timerState={timerState}
                title="Short Break"
              >
                Short Break
              </Button>
              <Button
                onClick={() => setTimerState('Long Break')}
                timerState={timerState}
                title="Long Break"
              >
                Long Break
              </Button>
            </ButtonContainer>
            <CircularProgressBar
              strokeWidth={10}
              squareSize={300}
              percentage={100 - percentage}
              time={currentTime(startTime - count)}
            />
            Pomo Counter Until Long Break:{longBreakIntervalCount}
            <ButtonContainer>
              {!isClicked && <Button onClick={startHandler}>Start</Button>}
              {isClicked && <Button onClick={stopHandler}>Stop</Button>}
              <Button onClick={resetHandler}>Reset</Button>
              <Button
                onClick={() =>
                  setLongBreakIntervalCount(settingsInfo.longBreakInterval)
                }
              >
                Reset pomo counter
              </Button>
            </ButtonContainer>
          </Container>
        </div>
      </Background>
    </div>
  );
}

const modalStyles = {
  content: {
    width: '500px',
    height: '510px',
    margin: 'auto',
    padding: '0',
    borderRadius: '20px',
  },
};

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2c5c5;
  width: 700px;
  height: 900px;
  margin: auto;
  padding-top: 100px;
`;

const Background = styled.div`
  background-color: #ffffff;
  font-family: 'system-ui';
`;

const Button = styled.div<{ title: string; buttonState: string }>`
  width: 150px;
  height: 50px;

  color: #ffffff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;

  font-weight: 400;

  justify-content: center;

  background-color: ${(props) =>
    props.timerState === props.title ? `${'#8b3a3a'}` : `${'#b88d8d'}`};
`;

const ButtonContainer = styled.div`
  width: 600px;
  height: 70px;
  display: flex;
  padding: auto;

  flex-direction: row;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;

  margin-top: 50px;
`;
