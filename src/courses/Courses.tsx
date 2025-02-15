import Navbar from "../Navbar.tsx";
import Footer from "../Footer.tsx";
import Container from "../Container.tsx";
import Algorithm from "./img/algorithm.png"
import CyberSecurity from "./img/cyber_security.png"
import Python from "./img/python.png"
import Unity from "./img/unity.png"
import Web from "./img/web.png"
import "./Courses.css"

class CourseSlide {
    name: string;
    link: string;
    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
}

function Courses() {
    document.title = "課程 | 建北電資 29th"

    const algorithm_slides: Array<CourseSlide> = [
        new CourseSlide("C++ 基礎語法", "https://slides.com/keaucucal/c"),
        new CourseSlide("C++ 基礎語法第二堂", "https://slides.com/wenian/cpp-1/"),
        new CourseSlide("C++ STL 之一", "https://slides.com/oct0920/template/"),
        new CourseSlide("C++ STL 之二", "https://slides.com/oct0920/copy-of-template-209f73"),
        new CourseSlide("基礎演算法之一 - 枚舉、剪枝、Greedy", "https://slides.com/keaucucal/algo-0"),
        new CourseSlide("基礎演算法之二 - 雙指針、二分搜、分治", "https://slides.com/keaucucal/algo-1"),
        new CourseSlide("基礎圖論之一", "https://slides.com/wenian/graph-theory0"),
        new CourseSlide("Dynamic Programming - 1", "https://slides.com/keaucucal/dp"),
        new CourseSlide("Dynamic Programming - 2", "https://slides.com/wenian/dynamic-programming-ii"),
        new CourseSlide("基礎圖論之二", "https://slides.com/keaucucal/graph-1"),
        new CourseSlide("數論之一", "https://slides.com/keaucucal/math"),
        new CourseSlide("數論之二", "https://slides.com/wenian/math-1"),
    ];

    const cyber_slides: Array<CourseSlide> = [
        new CourseSlide("Linux - 0 - 作業系統、Linux 介紹、常用指令", "https://slides.com/demonaarwu/linux-0"),
        new CourseSlide("Linux - 1 - VM、Python", "https://slides.com/demonaarwu/linux-1"),
        new CourseSlide("Git & GitHub 入門", "https://slides.com/demonaarwu/guide_to_git_and_github"),
        new CourseSlide("網路基礎概論", "https://slides.com/demonaarwu/networking-101"),
        new CourseSlide("CTF 介紹", "https://slides.com/ioker/capture_the_flag"),
        new CourseSlide("CTF - Crypto", "https://slides.com/ioker/ctf-cryto"),
        new CourseSlide("CTF - Forensic & Stego", "https://slides.com/ioker/ctf-forensic-n-stego"),
        new CourseSlide("CTF - Web", "https://slides.com/ioker/ctf-web"),
        new CourseSlide("CTF - Reverse", "https://slides.com/ioker/ctf-reverse"),
        new CourseSlide("CTF - End", "https://slides.com/ioker/ctf-end"),
    ];

    const game_design_slides: Array<CourseSlide> = [
        new CourseSlide("Unity 第一堂", "https://slides.com/d11230618/ckefgisc_unity_class1"),
        new CourseSlide("Unity 第二堂", "https://slides.com/aprilfirst/code"),
        new CourseSlide("Unity 第 3.5 堂", "https://slides.com/d11230618/ckefgisc_unity_class3"),
        new CourseSlide("Unity 第 N 堂 - Tilemap", "https://slides.com/jellyyfish/unity-tilemap"),
        new CourseSlide("Unity - Prefab", "https://slides.com/aprilfirst/code-ef6086"),
        new CourseSlide("Unity 第 N+1 堂 - UI", "https://slides.com/jellyyfish/unity-ui"),
        new CourseSlide("Unity 第四、五堂", "https://slides.com/d11230618/unity_class4"),
        new CourseSlide("Unity 第 N+2 堂", "https://slides.com/jellyyfish/unity-project"),
    ];

    const web_slides: Array<CourseSlide> = [
        new CourseSlide("網頁小社課 - 網頁基礎", "https://slides.com/laura07110717/copy-of"),
        new CourseSlide("網頁開發環境", "https://slides.com/laura07110717/minimal"),
        new CourseSlide("JavaScript", "https://slides.com/cloudream/javascript"),
    ]

    const python_slides: Array<CourseSlide> = [
        new CourseSlide("Python - 1 - 介紹 & 安裝、輸入 & 輸出、變數、List", "https://slides.com/d11231621/python-1"),
        new CourseSlide("Python - 2 - Tuple、Set、Queue & Stack、String、Dictionary", "https://slides.com/d11231621/python-2"),
        new CourseSlide("Python - 3 - if/else、for/while loop", "https://slides.com/d11231621/python-3"),
        new CourseSlide("Python - 4 - Function、Lambda、Class、Error Handling、Library", "https://slides.com/pomer0/python-4"),
        new CourseSlide("Discord Bot", "https://slides.com/lucasw/discord_bot"),
    ]
    return (
        <>
            <Navbar />
            <Container>
                <h1>課程</h1>
                <h2 className="semester">113 上學期</h2>
                <Course name={"演算法（C++）"} image={Algorithm} teachers={"章魚、kea、Ian"} slides={algorithm_slides}>
                    <p>
                        想考 APCS 嗎？想歐趴高中資訊課嗎？想鍛鍊解決程式問題的能力嗎？來演算法小社準沒錯！
                    </p>

                    <p>
                        這堂課從最基礎的 C++ 教起，接著帶到演算法競賽（競程）常用的資料結構和演算法，逐漸帶領學生學會解決競程難題。
                    </p>

                    <p>
                        上完這堂課後，高中資訊課、APCS、<s>TOI</s> 根本 piece of 小蛋糕！
                    </p>
                </Course>
                <Course name={"遊戲設計（Unity & C#）"} image={Unity} teachers={"貝絲、sleepyboy、水母"} slides={game_design_slides}>
                    <p>
                        喜歡遊戲嗎？想開發自己的遊戲？<s>你也玩原神嗎？ </s>來遊戲設計小社吧！
                    </p>
                    <p>
                        這堂課會從頭開始教 Unity，並使用 Unity 設計出屬於自己的遊戲！
                        Unity 是一個專門用來設計遊戲的<a href="https://zh.wikipedia.org/zh-tw/%E6%B8%B8%E6%88%8F%E5%BC%95%E6%93%8E" target="_blank">遊戲引擎</a>，
                        紀念碑谷、元氣騎士、Pokemon Go、<s>原神</s>這些知名遊戲都是利用 Unity 開發的。
                    </p>
                    <p>
                        如果你想設計夢想中的遊戲，那就來上課吧！
                    </p>
                </Course>
                <Course name={"網頁（HTML/CSS/JavaScript）"} image={Web} teachers={"點點、語雲"} slides={web_slides}>
                    <p>
                        網頁無所不在—你現在滑的社網、平常滑的脆、Instagram、YouTube 背後都是網頁。所以，你該來這堂課學寫網頁！
                    </p>
                    <p>
                        整堂課會從最基礎的網頁要素談起，結合每兩週的實作進行，一步步帶領學生做出完整、優美的網頁。
                    </p>
                    <p>
                        每個網頁一定會有三個要素：HTML、CSS 和 JavaScript。HTML 是網頁的骨架、CSS 讓網頁有了血肉、JavaScript 讓網頁有了生命。
                        這門課的目標就是學好這三個要素，利用他們設計好的網頁。
                    </p>
                    <p>
                        如果你想寫出像社網一樣棒的網站，或想寫個 Rickroll 網頁戳別人，網頁小社是你最好的選擇。
                    </p>
                </Course>
                <Course name={"Python"} image={Python} teachers={"Pomelo、Lucas"} slides={python_slides}>
                    <p>
                        完全沒接觸過程式？想實際設計出實用的程式？覺得程式很難？別錯過 Python 小社！
                    </p>
                    <p>
                        跟其他語言比起來，Python 簡單又強大。Python 的語法就跟英文沒兩樣（甚至更簡單！），
                        而 Python 又支援不少第三方工具，所以能很輕鬆寫出功能強！大！的程式。
                    </p>
                    <p>
                        沒寫過程式的話，來 Python 小社吧！
                    </p>
                </Course>
                <Course name={"資安"} image={CyberSecurity} teachers={"小黑、西瓜"} slides={cyber_slides}>
                    <p>
                        你對駭客的認知基本上都是錯的—駭客不會整天穿帽 T、輸入幾行 code 就能發射核彈、打字很快。
                    </p>
                    <p>
                        資安小社會讓你建立對駭客的專業領域—資訊安全的基本認識。講師從 Linux 講起，一路帶到網路、CTF 這些資安的基礎。
                    </p>
                    <p>
                        這堂課不會讓你變成駭客，但絕對能讓你充分認識資安這個領域。
                    </p>
                </Course>
            </Container>
            <Footer />
        </>
    )
}

function Course({ name, image, teachers, children, slides }: { name: string, image: string, teachers: string, children: any, slides: Array<CourseSlide> }) {
    return (
        <div className="course">
            <h3 className="name">{name}</h3>
            <div className="course-image">
                <img src={image} alt="" />
            </div>
            <h4 className="course-teachers">講師： {teachers}</h4>
            <h4>介紹</h4>
            <div className="course-intro">
                {children}
            </div>
            <h4>簡報</h4>
            <ul className="slides">
                {
                    slides.map(slide => (
                        <li className="slide">
                            <a href={slide.link} target="_blank">{slide.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Courses;