export default function CurrentTempContainer(props) {
    console.log("component1", props.data);

    return (
        <section className="container02">
            <h1 id="aktuelleStadt">Deine Stadt</h1>
            <div className="aktuellLogo">
                <img src={props.data.current.weather[0].icon} />
            </div>

            <h2 className="aktuelleTemp tempGrad" id="aktuelleTemp">{props.data.current.temp}</h2>

            <div className="aktuellHTT">
                <div className="aktuelleTT tempGrad" id="aktuelleTief">8</div>
                <div className="aktuelleHT tempGrad" id="aktuelleHoch">20</div>
            </div>
        </section>
    )
}