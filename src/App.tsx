import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./courses/Courses";
import Events from "./events/Events";
import Team from "./team/team";
import Museum from "./museum/Museum";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="courses" element={<Courses />} />
                <Route path="events" element={<Events />} />
                <Route path="team" element={<Team />} />
                <Route path="museum" element={<Museum />} />
            </Routes>
        </div>
    )
}

export default App;