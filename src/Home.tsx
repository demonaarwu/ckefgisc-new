import "./Home.css"
import ckefgisc from "./img/ckefgisc.png"
import Navbar from "./Navbar.tsx"
import Footer from "./Footer.tsx"

function Home() {
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
				<div className="question">
					<h2>沒有程式基礎也可以嗎？</h2>
					<p><strong>可以！</strong>多數課程設計面向初學者，即使上高中前沒接觸程式也沒關係。</p>
					<p>
						有幹部加入建北電資前完全沒碰過程式，在學長姐的教學下程式能力突飛猛進，甚至能自行開發大型專案或教其他人。
					</p>
				</div>
				<div className="question">
					<h2>有學長學弟制/學姐學妹制嗎？</h2>
					<p>
						<strong>完全沒有！</strong>和某些特定社團比起來，建北電資可說是完全沒有長姐制。社團內的每個人都是平等相處的，沒有誰高誰低。
					</p>
					<p>
						學長跟學姐也都是很友善、很講理的人，遇到不會的問題或想知道的事都可以請教我們喔！
					</p>
				</div>
				<div className="question">
					<h2>沒有電腦也可以嗎？</h2>
					<p>
						<strong>可以！</strong>大社課跟放學小社課的上課地點都在電腦教室，可以使用建中或北一的電腦來上課。
						<p>
							不過，最好還是自己帶電腦來上課喔！有一些課程需要安裝軟體，而有些軟體無法在建中或北一的電腦上跑。
						</p>
					</p>
				</div>
				<div className="question">
					<h2>我想加入建電/北資，可是我正社沒上…</h2>
					<p>
						沒關係，你還可以<strong>地社</strong>喔！地社成員除了無法參與大社課之外，<strong>和正社成員沒有任何區別</strong>，一樣能<strong>來小社課跟參加活動</strong>。
					</p>
					<p>
						不少幹部最初也不是正社成員，而是在地社後慢慢喜歡上建北電資的。所以沒上正社不必難過，來地社吧！
					</p>
				</div>
				<div className="question">
					<h2>建電跟建資的差別在哪？</h2>
				</div>
				<div className="question">
					<h2></h2>
				</div>
			</div>
		</>
	)
}

function Intro() {
	return (
		<>
			<div className="intro">
				<div className="logo-box">
					<img className="logo" src={ckefgisc} alt="" />
				</div>
				<h1>關於建北電資</h1>
				<p>建北電資 = 建中電研 + 北一資研</p>
				<p>
					建北電資是一個由程式愛好者所組成的社團，由建中電研和北一資研兩社合併而來。
				</p>
				<p>
					我們會在平日放學開設聯課，由兩社學術教授各種課程。課程內容包含 C++、Python、網頁設計和遊戲設計等。
				</p>
				<Questions />
			</div>

		</>
	)
}

export default Home
