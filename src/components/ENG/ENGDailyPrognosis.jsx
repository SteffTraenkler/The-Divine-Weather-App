export default function EngDailyPrognosis(props) {

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <section className="container04">
            <article className="wetter7t">
                <div className="einTag">
                    <div className="tagTag"></div>
                    <div className="tagLogo"></div>
                    <div className="tagTief"><span className="klein">Low</span></div>
                    <div className="tagHoch"><span className="klein">High</span></div>
                </div>

                {props.data.daily.map((dailyweather, key) =>
                    <div className="einTag" key={key}>
                        <div className="tagTag">

                            {key === 0 ? "Today" : weekDays[new Date(dailyweather.dt * 1000).getDay()]}
                        </div>
                        <div className="tagLogo">
                            <img src={"assets/img/icons/editedWeatherIcons/" + dailyweather.weather[0].icon + ".png"} alt={dailyweather.weather[0].description} />
                        </div>
                        <div className="tagTief tempGrad" id="tagTief0">{Math.round(dailyweather.temp.min)}°{props.units === "metric" ? "C" : "F"}</div>
                        <div className="tagHoch tempGrad" id="tagHoch0">{Math.round(dailyweather.temp.max)}°{props.units === "metric" ? "C" : "F"}</div>
                    </div>)}
            </article>
        </section>
    )
}