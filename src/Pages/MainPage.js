// import { useCurrentLocation } from "../api/apifetches/CurrentLocation"
import HourPrognosis48 from "../components/48-h-prognosis";
import CurrentTempContainer from "../components/CurrentTempContainer"
import DailyPrognosis from "../components/DailyPrognosis";

export default function MainPage(props) {
    console.log("mainpage", props.data);

    return (
        <>
            {props.data.length === 0 || props.data.cod === '400' ?
                <h1>Loading...</h1>
                :
                <>
                    <section className="container02">
                        <h1 id="aktuelleStadt">Deine Stadt</h1>
                        {/* <h2>{testLocation}</h2> */}
                    </section>

                    <CurrentTempContainer data={props.data} setData={props.setData} />

                    <section className="container01">
                        <article>
                            <img src="assets/img/zeus-logo.png" alt="ZEUS" />
                        </article>
                    </section>

                    <HourPrognosis48 data={props.data} setData={props.setData} />

                    <DailyPrognosis data={props.data} setData={props.setData} />
                </>
            }
        </>
    )
}