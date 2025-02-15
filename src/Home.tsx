import "./Home.css"
import { Link } from "react-router-dom"
import ckefgisc from "./img/ckefgisc.png"
import Navbar from "./Navbar.tsx"
import Footer from "./Footer.tsx"
import Container from "./Container.tsx"

function Home() {
	document.title = "首頁 | 建北電資 29th";
	return (
		<>
			<div>
				<Navbar />
				<Intro />
				<Footer />
			</div>
		</>
	)
}

function Questions() {
	return (
		<>
			<div className="questions">
				<h1>常見問題</h1>
				<Question title={"沒有程式基礎也可以嗎？"}>
					<p><strong>可以！</strong>多數課程設計面向初學者，即使上高中前沒接觸程式也沒關係。</p>
					<p>
						有幹部加入建北電資前完全沒碰過程式，在學長姐的教學下程式能力突飛猛進，甚至能自行開發大型專案或教其他人。
					</p>
					<p>
						學長姐都很有耐心，願意聽你們提出的每個問題，所以不懂的地方都可以問學長姐喔！
					</p>
				</Question>
				<Question title={"有學長學弟制/學姐學妹制嗎？"}>
					<p>
						<strong>完全沒有！</strong>和某些特定社團比起來，建北電資可說是完全沒有長姐制。社團內的每個人都是平等相處的，沒有誰高誰低。
						也不會出現學長逼學弟留在學校補課、遇到學長姐一定要問好這些封建遺毒。
					</p>
					<p>
						學長跟學姐也都是很友善、講理的人，跟我們相處不用太拘束，就像一般朋友聊天就行！
					</p>
				</Question>
				<Question title={"沒有電腦也可以嗎？"}>
					<p>
						<strong>可以！</strong>大社課跟放學小社課的上課地點都在電腦教室，可以使用建中或北一的電腦來上課。
						<p>
							不過，最好還是自己帶電腦來上課喔！有一些課程需要安裝軟體，而這些軟體無法在建中或北一的電腦上跑。
							帶自己的電腦來也能省下每次安裝程式的時間。
						</p>
					</p>
				</Question>
				<Question title="我想加入建電/北資，可是我正社沒上…">
					<p>
						沒關係，你還可以<strong>地社</strong>喔！地社成員除了無法參與大社課之外，<strong>和正社成員沒有任何區別</strong>，一樣能<strong>來小社課跟參加活動</strong>。
					</p>
					<p>
						不少幹部最初也不是正社成員，而是在地社後慢慢喜歡上建北電資的。所以沒上正社不必難過，來地社吧！
					</p>
				</Question>
			</div>
		</>
	)
}

function Question({ children, title }: { children: any, title: string }) {
	return (
		<div className="question">
			<h2>{title}</h2>
			{children}
		</div>
	)
}

function Intro() {
	return (
		<>
			<Container>
				<div className="logo-box">
					<img className="logo" src={ckefgisc} alt="" />
				</div>
				<h1>關於建北電資</h1>
				<p>
					想<strong>提高程式能力</strong>、APCS 滿分嗎？想做出屬於自己的<strong>網站、遊戲</strong>嗎？
				</p>
				<p>
					想認識<strong>喜歡程式的朋友嗎</strong>？覺得男校/女校生活很無聊嗎？
				</p>
				<p>
					那你要來<strong>加入建北電資</strong>！
				</p>
				<p>
					<strong>建北電資</strong>是一個由程式愛好者所組成的社團，由建中電研和北一資研兩社合併而來，至今已是橫跨二十九年的大家庭。
				</p>
				<p>
					建北電資有兩個主軸：<Link to="/courses">課程</Link>和<Link to="/events">活動</Link>。
				</p>
				<p>
					我們會在平日放學開設聯課（<strong>小社課</strong>），由兩社學術教授各種課程，內容包含 C++、Python、網頁設計和遊戲設計等，橫跨網頁、遊戲、競程等主題。
					下學期會在六月舉辦社展，展現一年多來的學習成果。
				</p>
				<p>
					除了課程之外，我們還會在週末、寒暑假舉辦活動，以「<strong>四大獵祭</strong>」—春遊、暑訓、秋遊、寒訓為主，加上迎新、幹訓、遊等小型活動。
					你能在活動認識各路電神、社牛，所以絕對不要錯過！
				</p>
				<CKEISCIntro/>
				<Questions />
			</Container>
		</>
	)
}

function CKEISCIntro() {
	return (
		<div className="ckeisc-intro">
			<h2>關於建中電研</h2>
		</div>
	)
}

function 

export default Home
