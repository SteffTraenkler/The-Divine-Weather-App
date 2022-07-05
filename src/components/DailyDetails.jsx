export default function DailyDetails(props) {
    return (
        <section class="container05">
            <article class="details">
                <div class="dBox">UV-Index: {props.data.daily[0].uvi}</div>
                <div class="dBox">Sonnen unter aufgang</div>
                <div class="dBox">Wind</div>
                <div class="dBox">Regenmenge</div>
                <div class="dBox">gefühlte Temperatur</div>
                <div class="dBox">Feuchtigkeit</div>
                <div class="dBox">Sichtweite</div>
                <div class="dBox">Luftdruck</div>
            </article>
        </section>
    )
}