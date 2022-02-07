import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import SettingsContext from 'pages/pomodoro/SettingsContext';

export default function Setting() {
  // const [pomodoroDuration, setPomodoroDuration] = useState(25);
  // const [shortBreakDuration, setShortBreakDuration] = useState(5);
  // const [longBreakDuration, setLongBreakDuration] = useState(15);
  // const [longBreakInterval, setLongBreakInterval] = useState(4);

  // console.log(pomodoroDuration);
  // console.log(shortBreakDuration);
  // console.log(longBreakDuration);
  // console.log(longBreakInterval);

  const settingsInfo = useContext(SettingsContext);

  return (
    <Container>
      <Title>Setting</Title>

      <ItemsContainer>
        <ItemContainer>
          Pomodoro Duration
          <NumberInputBox
            type="number"
            max="100"
            min="1"
            value={settingsInfo.pomodoroDuration}
            onChange={(e) => settingsInfo.setPomodoroDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Short Break Duration
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            value={settingsInfo.shortBreakDuration}
            onChange={(e) => settingsInfo.setShortBreakDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Long Break Duration
          <NumberInputBox
            type="number"
            max="100"
            min="0"
            value={settingsInfo.longBreakDuration}
            onChange={(e) => settingsInfo.setLongBreakDuration(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          Long Break Interval
          <NumberInputBox
            type="number"
            max="100"
            min="1"
            value={settingsInfo.longBreakInterval}
            onChange={(e) => settingsInfo.setLongBreakInterval(e.target.value)}
          />
        </ItemContainer>
        <ItemContainer>
          <SubmitButton
            type="submit"
            value="Submit"
            onClick={() => settingsInfo.setShowModal(false)}
          />
        </ItemContainer>
      </ItemsContainer>
    </Container>
  );
}

const SubmitButton = styled.input`
  width: 100px;
  height: 40px;
  font-weight: bold;
  color: #374151;
  font-size: 18px;
  border: 2px solid #1f187e;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
  :active {
    border: 3px solid #1f187e;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
  margin: auto;

  align-items: center;
  font-size: 20px;
  height: 40px;
  margin-bottom: 40px;
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

  border: 2px solid #1f187e;
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