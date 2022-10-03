// import { useCurrentLocation } from "../api/apifetches/CurrentLocation"
import HourPrognosis48 from "../components/48-h-prognosis";
import CurrentTempContainer from "../components/CurrentTempContainer"
import DailyDetails from "../components/DailyDetails";
import DailyPrognosis from "../components/DailyPrognosis";
import EngHourPrognosis48 from "../components/ENG/ENG48-h-prognosis";
import EngCurrentTempContainer from "../components/ENG/ENGCurrentTempContainer";
import EngDailyDetails from "../components/ENG/ENGDailyDetails";
import EngDailyPrognosis from "../components/ENG/ENGDailyPrognosis";

export default function MainPage(props) {
    console.log("mainpage", props.data);
    console.log("mainpage units", props.units);

    return (
        <>
            {props.data.length === 0 || props.data.cod === '400' ?
                <h1>Loading...</h1>
                :
                props.lang === "de" ?
                    <>

                        <CurrentTempContainer data={props.data} setData={props.setData} units={props.units} />

                        <section className="container01">
                            <article>
                                <img src="assets/img/zeus-logo.png" alt="ZEUS" />
                            </article>
                        </section>

                        <HourPrognosis48 data={props.data} setData={props.setData} units={props.units} />

                        <DailyPrognosis data={props.data} setData={props.setData} units={props.units} />

                        <DailyDetails data={props.data} setData={props.setData} units={props.units} />
                    </>
                    :
                    <>

                        <EngCurrentTempContainer data={props.data} setData={props.setData} units={props.units} />

                        <section className="container01">
                            <article>
                                <img src="assets/img/zeus-logo.png" alt="ZEUS" />
                            </article>
                        </section>

                        <EngHourPrognosis48 data={props.data} setData={props.setData} units={props.units} />

                        <EngDailyPrognosis data={props.data} setData={props.setData} units={props.units} />

                        <EngDailyDetails data={props.data} setData={props.setData} units={props.units} />
                    </>
            }
        </>
    )
}