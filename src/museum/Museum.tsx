import Navbar from "../Navbar.tsx";
import Container from "../Container.tsx";
import Footer from "../Footer.tsx";

function Museum() {
    document.title = "歷屆 | 建北電資 29th"
    return (
        <>
            <Navbar/>
            <Container>
                <h1>Museum</h1>
            </Container>
            <Footer/>
        </>
    )
}

export default Museum;