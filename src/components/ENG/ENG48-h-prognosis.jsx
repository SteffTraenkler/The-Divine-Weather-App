export default function EngHourPrognosis48(props) {

    return (
        <section className="container03">
            <div className="tagesPrognose">48 Hour Prognosis</div>
            <article className="wetter48h">
                {props.data.hourly.map((weatherhourly, key) =>
                    <div className="StundenWetter" key={key}>
                        <div className="Stunde0" id="StundenWetterStunde_0">{new Date(weatherhourly.dt * 1000).getHours()}</div>
                        <div className="StundenWetterImg" id="StundenWetterImg_0">
                            <img src={"assets/img/icons/editedWeatherIcons/" + weatherhourly.weather[0].icon + ".png"} alt={weatherhourly.weather[0].description} />
                        </div>
                        <div className="StundenWetterTemp tempGrad" id="StundenWetterTemp_0">{Math.round(weatherhourly.temp)} °{props.units === "metric" ? "C" : "F"}</div>
                    </div>
                )}

            </article>

        </section >
    )
}