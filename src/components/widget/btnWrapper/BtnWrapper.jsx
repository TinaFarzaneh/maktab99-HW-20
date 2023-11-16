// ***************************************
import React, { useReducer, useEffect } from "react";
import { StopWatch } from "../stopWatch";
import { Button } from "../../base/button/Button";
import {
  initialState,
  stopwatchReducer,
} from "../../../utils/reducer/useReducer";
export default function StopWatchShow() {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);

  useEffect(() => {
    let interval;

    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "UPDATE_TIME" });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [state.isRunning]);

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const handleStop = () => {
    dispatch({ type: "STOP" });
  };

  const handleLap = () => {
    dispatch({ type: "LAP" });
  };
  const formatNumberWithZero = (number) => {
    if (number < 10) return "0" + number;
    else return number.toString();
  };
  return (
    <div>
      <div className="mt-12 text-center font-bold text-3xl">
        {formatNumberWithZero(state.hours)} :
        {formatNumberWithZero(state.minutes)} :
        {formatNumberWithZero(state.seconds)} :
        {formatNumberWithZero(state.miliSeconds)}
      </div>
      <div>
        <div className="w-full flex justify-evenly mt-24">
          <Button
            backGround={"bg-[#18a71e]"}
            text={"START"}
            onBtn={handleStart}
          />
          <Button backGround={"bg-[#187CA7]"} text={"LAP"} onBtn={handleLap} />
          <Button
            backGround={"bg-[#A71818]"}
            text={"STOP"}
            onBtn={handleStop}
          />
        </div>
      </div>
      <StopWatch laps={state.laps} />
    </div>
  );
}
