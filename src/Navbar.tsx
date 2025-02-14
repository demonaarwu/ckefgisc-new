import "./Navbar.css"

function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <a href="/"><h2 className="club-name">CKEFGISC 29th</h2></a>
                    <div className="hamburger-toggle" onClick={() => {
                        document.querySelector(".navlinks")?.classList.toggle("active");
                    }
                    }>
                        <span className="bar-1"></span>
                        <span className="bar-2"></span>
                        <span className="bar-3"></span>
                    </div>
                    <ul className="navlinks">
                        <li className="navlink"><a href="">課程</a></li>
                        <li className="navlink"><a href="">活動</a></li>
                        <li className="navlink"><a href="">幹部</a></li>
                        <li className="navlink"><a href="">歷屆</a></li>
                        <li className="navlink"><a href="https://iscoj.fg.tp.edu.tw/" target="_blank">ISCOJ</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;