export const RightSide = ({ weatherData }) => {
  const precipitation = weatherData?.current?.precip_mm || 0; // in mm
  const humidity = weatherData?.current?.humidity || 0; // in percentage
  const wind = weatherData?.current?.wind_kph || 0; // in km/h

  return (
    <div className="w-[50%] absolute right-0">
      <div className="text-white text-2xl font-bold p-12 flex flex-col gap-5">
        <div className="flex gap-48">
          <span>PRECIPITATION</span>
          <span>{precipitation}%</span>
        </div>
        <div className="flex gap-60">
          <span>HUMIDITY</span>
          <span>{humidity}%</span>
        </div>
        <div className="flex gap-60">
          <span>WIND</span>
          <span className="place-self-end">{wind} km/h</span>
        </div>
      </div>
      {/* *****************/}
      <div className="flex justify-center  gap-2 mt-10 relative right-32">
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-6 bg-white">
          <img
            src={weatherData.current.condition.icon}
            alt="icon"
            style={{ width: "30px" }}
          />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">
            {" "}
            {weatherData.current.temp_c} °C
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-6 bg-[#272E37]">
          <img
            src="./image/cloud-rain.png"
            alt="icon"
            style={{ width: "30px" }}
          />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-6 bg-[#272E37]">
          <img
            src="./image/cloud-sun.png"
            alt="icon"
            style={{ width: "30px" }}
          />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>

        <div className="flex flex-col  items-center gap-4 rounded-lg p-6 bg-[#272E37]">
          <img src="./image/Sun.png" alt="icon" style={{ width: "30px" }} />
          <div className="text-xs">Tue</div>
          <div className="text-sm font-bold">30 °C</div>
        </div>
      </div>
    </div>
  );
};
