import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
export default function Setting() {
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
  const [pomodoroCount, setPomodoroCount] = useState(4);

  console.log(pomodoroDuration);
  console.log(shortBreakDuration);
  console.log(longBreakDuration);
  console.log(longBreakInterval);

  return (
    <Container>
      <Title>Setting</Title>

      <ItemsContainer>
        <ItemContainer>
          Pomodoro Duration
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            onChange={(e) => setPomodoroDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Short Break Duration
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            onChange={(e) => setShortBreakDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Long Break Duration
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            onChange={(e) => setLongBreakDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Long Break Interval
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            onClick={(e) => setLongBreakInterval(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <SubmitButton type="submit" value="Submit" />
        </ItemContainer>
      </ItemsContainer>
    </Container>
  );
}

const SubmitButton = styled.input`
  width: 100px;
  height: 30px;
  font-weight: bold;
  color: #374151;
  font-size: 18px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
  margin: auto;
  padding-top: 30px;
  font-size: 20px;
  height: 70px;
`;

const NumberInputBox = styled.input`
  width: 150px;
  height: 40px;

  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  outline: none;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin-left: 30px;

  border: 1px solid #ccc;
`;

const ItemsContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 1rem;
  padding-left: 50px;
  height: 60px;
  padding-top: 20px;

  border-bottom: 1px solid #c29e9e;
`;

const Container = styled.div`
  background-color: #e2c5c5;
  font-family: 'system-ui';
  height: 498px;
`;
