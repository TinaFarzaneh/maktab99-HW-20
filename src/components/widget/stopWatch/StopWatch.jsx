// import { TableRow } from "../../base";

// export const StopWatch = ({ laps }) => {
//   const calculateTimeDifference = (timeString1, timeString2) => {
//     const time1 = new Date(`1970-01-01T${timeString1}Z`);
//     const time2 = new Date(`1970-01-01T${timeString2}Z`);
//     const timeDiff = Math.abs(time2 - time1);

//     // **********************
//     const formatTimeSegment = (value) => (value < 10 ? `0${value}` : value);
//     const hours = formatTimeSegment(Math.floor(timeDiff / 3600000));
//     const minutes = formatTimeSegment(Math.floor((timeDiff % 3600000) / 60000));
//     const seconds = formatTimeSegment(Math.floor((timeDiff % 60000) / 1000));
//     const milliseconds = formatTimeSegment(Math.floor((timeDiff % 1000) / 10));
//     // **********************
//     const resultString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
//     return resultString;
//   };
//   // console.log("state",state);

//   return (
//     <div>
//       <table className="w-[800px] mt-20 ">
//         <thead>
//           <tr>
//             <th className="text-start">Lap</th>
//             <th className="text-start">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {laps.map((lap, index) => (
//             <TableRow
//               key={index}
//               lap={index + 1}
//               lapTime={calculateTimeDifference(
//                 lap,
//                 index !== 0 ? laps[index - 1] : "00:00:00.00"
//               )}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// *************************
import React, { useReducer } from "react";
import { TableRow } from "../../base";

// const initialState = {};

// const reducer = (state, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export const StopWatch = ({ laps }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const calculateTimeDifference = (timeString1, timeString2) => {
    const time1 = new Date(`1970-01-01T${timeString1}Z`);
    const time2 = new Date(`1970-01-01T${timeString2}Z`);
    const timeDiff = Math.abs(time2 - time1);

    const formatTimeSegment = (value) => (value < 10 ? `0${value}` : value);
    const hours = formatTimeSegment(Math.floor(timeDiff / 3600000));
    const minutes = formatTimeSegment(Math.floor((timeDiff % 3600000) / 60000));
    const seconds = formatTimeSegment(Math.floor((timeDiff % 60000) / 1000));
    const milliseconds = formatTimeSegment(Math.floor((timeDiff % 1000) / 10));
    // **********************
    const resultString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    return resultString;
  };

  return (
    <div>
      <table className="w-[800px] mt-20 ">
        <thead>
          <tr>
            <th className="text-start">Lap</th>
            <th className="text-start">Time</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lap, index) => (
            <TableRow
              key={index}
              lap={index + 1}
              lapTime={calculateTimeDifference(
                lap,
                index !== 0 ? laps[index - 1] : "00:00:00.00"
              )}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
