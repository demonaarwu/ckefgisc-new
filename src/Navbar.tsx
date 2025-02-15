import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <Link to={'/'}><h2 className="club-name">CKEFGISC 29th</h2></Link>
                <div className="hamburger-toggle" onClick={() => {
                    document.querySelector(".navlinks")?.classList.toggle("active");
                }
                }>
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                </div>
                <ul className="navlinks">
                    <li className="navlink"><Link to={'/courses'}>課程</Link></li>
                    <li className="navlink"><Link to={'/events'}>活動</Link></li>
                    <li className="navlink"><Link to={'/museum'}>歷屆</Link></li>
                    <li className="navlink"><a href="https://iscoj.fg.tp.edu.tw/" target="_blank">ISCOJ</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
