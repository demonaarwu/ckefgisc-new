import "./Footer.css"

function Footer() {
	let currentYear = new Date().getFullYear()

	return (
		<>
			<footer>
				<p>
					Copyright © {currentYear} CKEFGISC 建北電資 29th
				</p>
			</footer>
		</>
	)
}

export default Footer;