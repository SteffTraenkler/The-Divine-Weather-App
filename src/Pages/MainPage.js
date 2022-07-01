// import { useCurrentLocation } from "../api/apifetches/CurrentLocation"
import CurrentTempContainer from "../components/CurrentTempContainer"

export default function MainPage(props) {
    // const testLocation = useCurrentLocation()

    console.log("mainpage", props.data);


    return (
        <>
            <h1>Main Content</h1>
            <section className="container02">
                <h1 id="aktuelleStadt">Deine Stadt</h1>
                {/* <h2>{testLocation}</h2> */}
            </section>
            <CurrentTempContainer data={props.data} setData={props.setData} />
        </>
    )
}