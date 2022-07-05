export default function HourPrognosis48(props) {

    return (
        <section className="container03">
            <div className="tagesPrognose">48 Stunden Prognose</div>
            <article className="wetter48h">
                {props.data.hourly.map(weatherhourly =>
                    <div className="StundenWetter">
                        <div className="Stunde0" id="StundenWetterStunde_0">{new Date(weatherhourly.dt * 1000).getHours()}</div>
                        <div className="StundenWetterImg" id="StundenWetterImg_0">
                            <img src={"assets/img/icons/editedWeatherIcons/" + weatherhourly.weather[0].icon + ".png"} alt={weatherhourly.weather[0].description} />
                        </div>
                        <div className="StundenWetterTemp tempGrad" id="StundenWetterTemp_0">{weatherhourly.temp}°</div>
                    </div>
                )}

            </article>

        </section >
    )
}