
const DisplayWeather = ({error, weatherData}) => {
      return (
        <section>
          {error && (
            <p className="text-red-800 text-xl text-center text-wrap">{error}</p>
          )}
    
          {weatherData && (
            <div className=" flex flex-col text-center items-center space-y-5 weather-details-container">
              <div className="flex items-center">
                <img
                  src={`https:${weatherData.current.condition.icon}`}
                  width={70}
                  height={50}
                />
                <h1 className="text-3xl font-bold ">
                  {weatherData.current.condition.text}
                </h1>
              </div>
              <div>
                <p className="font-semibold text-4xl text-white">
                  {weatherData.current.temp_c}&deg;C
                </p>
              </div>
    
              {weatherData.location && (
                <p className="text-white">
                  {weatherData.location.name}, {weatherData.location.country}
                </p>
              )}
              <p>{weatherData.location.localtime}</p>
            </div>
          )}
        </section>
      );
    };
    
    export default DisplayWeather;
    