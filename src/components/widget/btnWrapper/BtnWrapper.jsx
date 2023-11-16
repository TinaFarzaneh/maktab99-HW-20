// // StopWatch.js
// import React, { useState, useEffect } from "react";
// import { StopWatch } from "../stopWatch";
// import { Button } from "../../base/button/Button";

// export default function StopWatchShow() {
//   const [time, setTime] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [miliSeconds, setMiliSeconds] = useState(0);
//   const [laps, setLaps] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);

//   const formatWithLeadingZero = (number) => {
//     if (number < 10) return "0" + number;
//     else return number.toString();
//   };

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         const lapTime = new Date().getTime();
//         const getDiffrenceTime = lapTime - time;

//         const showDiffrenceMILISecond = Math.floor(
//           (getDiffrenceTime % 1000) / 10
//         );

//         setMiliSeconds(showDiffrenceMILISecond);
//         const showDiffrenceSecond = Math.floor(
//           (getDiffrenceTime % 60000) / 1000
//         );

//         setSeconds(showDiffrenceSecond);
//         const showDiffrenceMinute = Math.floor(
//           (getDiffrenceTime % 3600000) / 60000
//         );

//         setMinutes(showDiffrenceMinute);
//       }, 10);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, setMiliSeconds]);

//   const handleStart = () => {
//     const startStopWatch = new Date().getTime();
//     setTime(startStopWatch);
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   const handleLap = () => {
//     const currentTime =
//       formatWithLeadingZero(hours) +
//       ":" +
//       formatWithLeadingZero(minutes) +
//       ":" +
//       formatWithLeadingZero(seconds) +
//       "." +
//       formatWithLeadingZero(miliSeconds);
//     setLaps((prevLaps) => [...prevLaps, currentTime]);
//   };

//   // const handleReset = () => {
//   //   setIsRunning(false);
//   //   setMiliSeconds(0);
//   //   setSeconds(0);
//   //   setMinutes(0);
//   //   setHours(0);
//   //   setLaps([]);
//   // };

//   return (
//     <div>
//       <div className="mt-12 text-center font-bold text-3xl">
//         {formatWithLeadingZero(hours)} : {formatWithLeadingZero(minutes)} :{" "}
//         {formatWithLeadingZero(seconds)} : {formatWithLeadingZero(miliSeconds)}
//       </div>
//       <div>
//         <div className="w-full flex justify-evenly mt-24">
//           <Button
//             backGround={"bg-[#18a71e]"}
//             text={"START"}
//             onBtn={handleStart}
//           />
//           <Button backGround={"bg-[#187CA7]"} text={"LAP"} onBtn={handleLap} />
//           <Button
//             backGround={"bg-[#A71818]"}
//             text={"STOP"}
//             onBtn={handleStop}
//           />
//         </div>
//       </div>
//       <StopWatch laps={laps} />
//     </div>
//   );
// }
// ***************************************
import React, { useReducer, useEffect } from "react";
import { StopWatch } from "../stopWatch";
import { Button } from "../../base/button/Button";
import {
  initialState,
  stopwatchReducer,
} from "../../../utils/reducer/useReducer";
// const initialState = {
//   time: 0,
//   seconds: 0,
//   minutes: 0,
//   hours: 0,
//   miliSeconds: 0,
//   laps: [],
//   isRunning: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "START":
//       const startStopWatch = new Date().getTime();
//       return { ...state, time: startStopWatch, isRunning: true };

//     case "STOP":
//       return { ...state, isRunning: false };

//     case "LAP": //ثبت زمان فعلی
//       const currentTime =
//         state.hours.toString().padStart(2, "0") +
//         ":" +
//         state.minutes.toString().padStart(2, "0") +
//         ":" +
//         state.seconds.toString().padStart(2, "0") +
//         "." +
//         state.miliSeconds.toString().padStart(2, "0");
//       return { ...state, laps: [...state.laps, currentTime] };

//     case "UPDATE_TIME": //به روز رسانی زمان گذشته شده از زمان شروع تایمر
//       const lapTime = new Date().getTime();

//       const getDiffrenceTime = lapTime - state.time;

//       const showDiffrenceMILISecond = Math.floor(
//         (getDiffrenceTime % 1000) / 10
//       );
//       const showDiffrenceSecond = Math.floor((getDiffrenceTime % 60000) / 1000);
//       const showDiffrenceMinute = Math.floor(
//         (getDiffrenceTime % 3600000) / 60000
//       );

//       return {
//         ...state,
//         miliSeconds: showDiffrenceMILISecond,
//         seconds: showDiffrenceSecond,
//         minutes: showDiffrenceMinute,
//       };

//     default:
//       return state;
//   }
// };

export default function StopWatchShow() {
  // const [state, dispatch] = useReducer(reducer, initialState);
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
