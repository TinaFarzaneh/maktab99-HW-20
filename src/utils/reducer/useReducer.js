// stopwatchReducer.js

const initialState = {
  time: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  miliSeconds: 0,
  laps: [],
  isRunning: false,
};

const stopwatchReducer = (state, action) => {
  switch (action.type) {
    case "START":
      const startStopWatch = new Date().getTime();
      return { ...state, time: startStopWatch, isRunning: true };

    case "STOP":
      return { ...state, isRunning: false };

    case "LAP":
      const currentTime =
        state.hours.toString().padStart(2, "0") +
        ":" +
        state.minutes.toString().padStart(2, "0") +
        ":" +
        state.seconds.toString().padStart(2, "0") +
        "." +
        state.miliSeconds.toString().padStart(2, "0");
      return { ...state, laps: [...state.laps, currentTime] };

    case "UPDATE_TIME":
      const lapTime = new Date().getTime();
      const getDiffrenceTime = lapTime - state.time;
      const showDiffrenceMILISecond = Math.floor(
        (getDiffrenceTime % 1000) / 10
      );
      const showDiffrenceSecond = Math.floor((getDiffrenceTime % 60000) / 1000);
      const showDiffrenceMinute = Math.floor(
        (getDiffrenceTime % 3600000) / 60000
      );

      return {
        ...state,
        miliSeconds: showDiffrenceMILISecond,
        seconds: showDiffrenceSecond,
        minutes: showDiffrenceMinute,
      };

    default:
      return state;
  }
};

export { initialState, stopwatchReducer };
