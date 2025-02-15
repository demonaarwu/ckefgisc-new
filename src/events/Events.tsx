import Navbar from "../Navbar.tsx";
import Container from "../Container.tsx";
import Footer from "../Footer.tsx";
import Spring from "./img/spring.png"
import Exhibition from "./img/exhibition.png"
import Summer from "./img/summer.png"
import Orientation from "./img/orientation.png"
import Fall from "./img/fall.png"
import Winter from "./img/winter.png"
import "./Events.css"

function Events() {
    document.title = "活動 | 建北電資 29th";
    return (
        <>
            <Navbar />
            <Container>
                <h1>活動</h1>
                <Event name="春遊" image={Spring} date="四～五月">
                    <p>
                        春遊為高一學弟妹的第一個任務，會在四、五月的某個星期天舉行。當日上午會舉辦 RPG 或大地遊戲等活動，下午則前去科技公司參訪。
                    </p>
                    <p>
                        春遊除了讓學弟妹體驗幹部生活外，也能增進同屆間的感情、累積團隊合作的經驗。
                    </p>
                    <p>
                        不論你想弄學習歷程，或想體驗辦活動、當幹部的感覺，春遊你都不能錯過！
                    </p>
                </Event>
                <Event name="社展" image={Exhibition} date="六月">
                    <p>
                        社展舉行於六月初的某個週末其中一天，會展示兩社成員下學期的開發成果。
                    </p>
                    <p>
                        組別包含網頁、遊戲、人工智慧、Discord Bot 等，想精進自身程式能力的學弟妹不要錯過！
                    </p>
                </Event>
                <Event name="暑訓" image={Summer} date="八月">
                    <p>
                        暑訓顧名思義在暑假舉辦，為期七天。每天會有基礎的程式課程，比如 Python、C++、網頁等。
                    </p>
                    <p>
                        除了課程之外，每天會有不一樣的團康活動，例如 RPG、假案、大地遊戲等，以增進彼此感情。
                    </p>
                    <p>
                        最後一天早上為成果發表，會讓參加的學弟妹展現過去六天的學習成果；下午則安排了酷酷的神秘活動，來過絕對不會後悔！
                    </p>
                </Event>
                <Event name="迎新" image={Orientation} date="十月">
                    <p>
                        剛加入建北電資，跟同屆不太熟嗎？想認識超級電神或學長姐們嗎？迎新就是為你們而舉辦的！
                    </p>
                    <p>
                        迎新為開學後第一個大活動，通常舉辦於十月中、第一次段考完後的第一個禮拜五晚上。
                        活動中會介紹建北電資的活動、幹部，並安排了團康來熟悉彼此。
                    </p>
                    <p>
                        想交新朋友嗎？來迎新吧！
                    </p>
                </Event>
                <Event name="秋遊" image={Fall} date="十一月">
                    <p>
                        迎新完的第二個大活動便是秋遊，舉辦於十一月初的某個星期六或日。早上會安排破冰、RPG 等活動，下午則會去烤肉店吃到飽，之後則會舉辦大地遊戲。
                    </p>
                    <p>
                        不說了，我要去吃烤肉了。
                    </p>
                </Event>
                <Event name="寒訓" image={Winter} date="二月">
                    <p>
                        寒訓和暑訓很像，不過舉辦於寒假，且有些地方也不太一樣。寒訓的課程會比暑訓更為進階（不過相信聰明的你們一定能學會的），活動則有些許變化（這是最高機密）。
                    </p>
                    <p>
                        不過有件事寒訓、暑訓都一樣：都很好玩！所以來報寒訓吧！
                    </p>
                </Event>
            </Container>
            <Footer />
        </>
    )
}

function Event({ name, image, date, children }: { name: string, image: string, date: string, children: any }) {
    return (
        <div className="event">
            <h2 className="name">{name}</h2>
            <div className="event-image">
                <img src={image} alt="" />
            </div>
            <h4 className="date">舉辦時間：{date}</h4>
            {children}
        </div>
    )
}

export default Events;