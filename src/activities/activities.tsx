import Navbar from "../Navbar.tsx";
import Container from "../Container.tsx";
import Footer from "../Footer.tsx";

function Activities() {
    document.title = "活動 | 建北電資 29th";
    return (
        <>
            <Navbar/>
            <Container>
                <h1>Activities</h1>
            </Container>
            <Footer/>
        </>
    )
}

export default Activities;