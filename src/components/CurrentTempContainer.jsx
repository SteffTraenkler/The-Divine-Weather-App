export default function CurrentTempContainer(props) {
    console.log("component1", props.data);
    console.log("image", props.data.current.weather[0].icon);

    return (
        <section className="container02">
            <h1 id="aktuelleStadt">Deine Stadt</h1>
            <div className="aktuellLogo">
                {/* <img src={props.data.current.weather[0].icon} /> */}
                <img src={"assets/img/icons/editedWeatherIcons/" + props.data.current.weather[0].icon + ".png"} alt={props.data.current.weather[0].description} />
            </div>

            <h2 className="aktuelleTemp tempGrad" id="aktuelleTemp">{Math.round(props.data.current.temp)}°</h2>

            <div className="aktuellHTT">
                <div className="aktuelleTT tempGrad" id="aktuelleTief">{Math.round(props.data.daily[0].temp.min)}</div>
                <div className="aktuelleHT tempGrad" id="aktuelleHoch">{Math.round(props.data.daily[0].temp.max)}</div>
            </div>
        </section>
    )
}