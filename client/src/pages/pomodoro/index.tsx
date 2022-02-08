import React, { useState } from 'react';
import Pomodoro from '../../components/Pomodoro';
import SettingsContext from './SettingsContext';
export default function Index() {
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [longBreakInterval, setLongBreakInterval] = useState(4);

  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [isPomodoroAutoStartOn, setIsPomodoroAutoStartOn] = useState(false);
  const [isBreakAutoStartOn, setIsBreakAutoStartOn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          pomodoroDuration,
          shortBreakDuration,
          longBreakDuration,
          longBreakInterval,
          isAlarmOn,
          isPomodoroAutoStartOn,
          isBreakAutoStartOn,
          showModal,
          setPomodoroDuration,
          setShortBreakDuration,
          setLongBreakDuration,
          setLongBreakInterval,
          setIsAlarmOn,
          setIsPomodoroAutoStartOn,
          setIsBreakAutoStartOn,
          setShowModal,
        }}
      >
        <Pomodoro />
      </SettingsContext.Provider>
    </div>
  );
}
