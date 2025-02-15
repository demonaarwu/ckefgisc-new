import "./Museum.css"
import Navbar from "../Navbar.tsx";
import Container from "../Container.tsx";
import Footer from "../Footer.tsx";
import twenty_eight from "./img/28th.png";
import twenty_seven from "./img/27th.png"
import iscoj from "./img/iscoj.png"
import ckeisc_history from "./img/ckeisc_history.png"

function Museum() {
    document.title = "歷屆 | 建北電資 29th"
    return (
        <>
            <Navbar />
            <Container>
                <h1>歷屆博物館</h1>
                <Website name="28th 社網" link="https://28th.ckefgisc.org" image={twenty_eight}>
                    <p>
                        鹽亞倫大電神架好了 27th 社網，好強。接著換 28th 上幹了，網管 晴 決定重頭寫自己的社網。
                    </p>
                    <p>
                        雖然有學長姊的範本可以借鑑，不過因為他是笨，花了大半個暑假也沒有什麼進度。
                        不過在某一天意外學會了 React 之後，事情變得不同了。
                        有了進階網頁框架的強大功能，晴只需要把六哥寫好的前端網頁做成模板整理，接上 Router！於是 28th 社網就這麼誕生了……
                    </p>
                </Website>
                <Website name="27th 社網" link="https://27th.ckefgisc.org" image={twenty_seven}>
                    <p>
                        建北電資以往皆有架設網站作為招生及宣傳用途。但是自從建電社辦的伺服器被學校沒收之後，一直以來都找不到一個良好的網站架設環境，也沒有一個地方讓學術們統一放置教材供學弟妹使用。
                    </p>
                    <p>
                        因此，在一三接幹了之後，一二學術長檸檬便一直希望繼任的鹽亞倫可以將他們沒有做出的社網完成。 於是鹽亞倫便找了溫室菜以及北資學術長嗯嗯，嘗試從頭寫出一個網站，並且透過 Github Pages 進行架設。
                    </p>
                </Website>
                <h1>其他網站</h1>
                <Website name="ISCOJ" link="https://iscoj.ckefgisc.org" image={iscoj}>
                    <p>
                        建北電資的社員非常喜歡寫演算法題目，理所當然地我們有自己的線上評測系統，稱作 ISCOJ。不過 舊的 OJ 實在太難用了，於是前年（2023） AaW 和世宗架好了新的 OJ。
                    </p>
                </Website>
                <Website name="建電社史追朔網" link="https://history.ckeisc.org" image={ckeisc_history}>
                    <p>
                        建國中學電子計算機研習社創社至今已過了四十餘年，今日的電研社在建中仍占有一席之地。然而，我們的社史已經在過去二十年間顛沛流離的社辦交換中遺失了，可憐的電研社至 2022 年前都沒有留下什麼整理過的社團歷史。
                    </p>
                    <p>
                        直到 2023 年，終於在建電中出現了願意整理這些資料的一群人，開始挖掘往年的資料。透過學長姐的幫助，終於在雜亂的資料中整理出頭緒，建電的歷史正重新被寫下。
                    </p>
                </Website>
            </Container>
            <Footer />
        </>
    )
}

function Website({ name, link, image, children }: { name: string, link: string, image: string, children: any }) {
    return (
        <div className="website">
            <a href={link} target="_blank"><h2>{name}</h2></a>
            <div className="website-image">
                <img src={image} alt="" />
            </div>
            {children}
        </div>
    )
}

export default Museum;