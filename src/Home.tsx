import "./Home.css"
import ckefgisc from "./img/ckefgisc.png"

function Navbar() {
	<>
		<header>

		</header>
	</>
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
					兩社會在平日放學開設聯課，課程內容包含 C++、Python、網頁設計和遊戲設計等。
				</p>
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
							學長跟學姐也都是很友善、很講理的人，遇到不會的問題或想知道的事都可以請教我們喔。
						</p>
					</div>
					<div className="question">
						<h2>沒有電腦也可以嗎？</h2>
						<p>
						</p>
					</div>
					<div className="question">
						<h2>我想加入建電/北資，可是我正社沒上…</h2>
					</div>
					<div className="question">
						<h2>建電跟建資的差別在哪？</h2>
					</div>
					<div className="question">
						<h2></h2>
					</div>
				</div>
			</div>

		</>
	)
}

function Home() {
	return (
		<>
			<div>
				<Intro />
			</div>
		</>
	)
}

export default Home
