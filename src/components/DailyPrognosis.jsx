export default function DailyPrognosis(props) {
    return (
        <section className="container04">
            <article className="wetter7t">
                <div class="einTag">
                    <div class="tagTag"></div>
                    <div class="tagLogo"></div>
                    <div class="tagTief"><span class="klein">Tief</span></div>
                    <div class="tagHoch"><span class="klein">Hoch</span></div>
                </div>

                {props.data.daily.map(dailyweather =>
                    <div className="einTag">
                        <div className="tagTag">

                        </div>
                        <div className="tagLogo">
                            <img src={"assets/img/icons/editedWeatherIcons/" + dailyweather.weather[0].icon + ".png"} alt={dailyweather.weather[0].description} />
                        </div>
                        <div className="tagTief tempGrad" id="tagTief0">{dailyweather.temp.min}°</div>
                        <div className="tagHoch tempGrad" id="tagHoch0">{dailyweather.temp.max}°</div>
                    </div>)}
            </article>
        </section>
    )
}