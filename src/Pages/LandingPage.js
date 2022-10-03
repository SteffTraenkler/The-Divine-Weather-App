// import ZeusLogo from "../assets/img/zeus-logo.png"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <>
            <Link to="home">
                <section className="intro">
                    <article>
                        <img src="assets/img/zeus-logo.png" />
                        <h1>The Divine Weather App</h1>
                        <h2><span>by</span> the Fantastic Four</h2>
                    </article>
                    <article>
                        <ul>
                            <li>Detaillierte 48 Stunden Prognose</li>
                            <li>7-Tage-Wettertrend</li>
                            <li>über 500.000 Wetterstationen weltweit</li>
                        </ul>
                    </article>
                </section>
            </Link>
        </>
    )
}