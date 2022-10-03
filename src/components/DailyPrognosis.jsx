export default function DailyPrognosis(props) {

    const weekDays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]

    return (
        <section className="container04">
            <article className="wetter7t">
                <div className="einTag">
                    <div className="tagTag"></div>
                    <div className="tagLogo"></div>
                    <div className="tagTief"><span className="klein">Tief</span></div>
                    <div className="tagHoch"><span className="klein">Hoch</span></div>
                </div>

                {props.data.daily.map((dailyweather, key) =>
                    <div className="einTag" key={key}>
                        <div className="tagTag">

                            {key === 0 ? "Heute" : weekDays[new Date(dailyweather.dt * 1000).getDay()]}
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