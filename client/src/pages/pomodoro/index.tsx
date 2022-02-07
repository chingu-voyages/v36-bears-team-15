import React, { useState } from 'react';
import Pomodoro from '../../components/Pomodoro';
import SettingsContext from './SettingsContext';
export default function Index() {
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [longBreakInterval, setLongBreakInterval] = useState(4);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          pomodoroDuration,
          shortBreakDuration,
          longBreakDuration,
          longBreakInterval,
          showModal,
          setPomodoroDuration,
          setShortBreakDuration,
          setLongBreakDuration,
          setLongBreakInterval,
          setShowModal,
        }}
      >
        <Pomodoro />
      </SettingsContext.Provider>
    </div>
  );
}
