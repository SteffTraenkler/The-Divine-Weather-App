import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import useGeolocation from "../hooks/useGeolocation"
import { key } from "../api/key"

export default function PageSkeleton(props) {

    console.log("PageSkel", props.data);

    return (
        <>
            <header>
                <nav>
                    <form>
                        <select value={props.lang} onChange={e => props.setLang(e.target.value)}>
                            <option value={"de"}>DE</option>
                            <option value={"en"}>EN</option>
                        </select>

                        {/* INPUT  FELD noch mit Funktionen etc versehen -> Stadt auswählen */}
                        <input />

                        <select value={props.units} onChange={e => props.setUnits(e.target.value)}>
                            <option value={"metric"}>Celsius&meter/sec</option>
                            <option value={"imperial"}>Fahrenheit&miles/hour</option>
                        </select>
                    </form>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="intro">
                    <p>
                        <img src="assets/img/dog.png" /> &copy;2022 Created with Love
                    </p>
                </div>
            </footer>
        </>
    )
}