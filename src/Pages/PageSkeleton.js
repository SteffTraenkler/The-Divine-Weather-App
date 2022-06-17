import { Outlet } from "react-router-dom"
import Doggo from "../assets/img/dog.png"

export default function PageSkeleton() {
    return (
        <>
            <header>
                <nav>
                    <form>
                        <select>
                            <option>DE</option>
                            <option>EN</option>
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
                        <img src={Doggo} /> &copy;2022 Created with Love
                    </p>
                </div>
            </footer>
        </>
    )
}