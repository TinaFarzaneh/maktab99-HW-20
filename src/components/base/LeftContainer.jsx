export const LeftContainer = ({ weatherData }) => {
  return (
    <div className="absolute -bottom-4">
      <img
        src="./image/bg-image.png"
        alt="weather"
        className="h-[570px] w-[493px]"
      />
      {/* ************************* */}
      {weatherData && (
        <div>
          <div className="text-white flex flex-col items-center justify-start absolute top-5 left-5 gap-5">
            <p className="text-[37px] font-bold">Tuesday</p>
            <p>20 Jun 2022</p>
            <div className="flex ">
              <img src="./image/Location.png" alt="locationIcon" />
              <span>
                {" "}
                {weatherData.location.name}, {weatherData.location.country}
              </span>
            </div>
          </div>
          <div className="text-white flex flex-col items-center justify-start absolute bottom-5 left-5 gap-5">
            <img src={weatherData.current.condition.icon} alt="SunImg" />
            <p className="text-5xl font-bold">
              {weatherData.current.temp_c} °C
            </p>
            <p className="text-2xl font-semibold">
              {weatherData.current.condition.text}
            </p>
          </div>
        </div>
      )}

      {/* *********************** */}
    </div>
  );
};
