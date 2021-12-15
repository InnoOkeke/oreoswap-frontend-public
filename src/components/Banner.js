// import { useAlert } from 'react-alert';
import "../css/local/partials/components/_banner.css";
import { HashLink as Link } from 'react-router-hash-link';

const Banner = () => {
	return(
		<section className="banner" id="/">
			<div className="wrapper banner-container">
			
			<div className="hero">
				<h1 className="topHeading">Super-charged DeFi Exchange</h1>
				<div className="heroSubHeading">
					<p className="subHeading">
						An Automated Market Maker and DApps guaranteed for speed <br/>and low fees transactions.
					</p>
				</div>
				<div className="buttons">
					<button className="btn"><Link to="/development">Use Exchange</Link></button>
					<button className="btn"><a href="https://drive.google.com/file/d/19Y7UrLw36ykGPhn_cVQiWDiWHo8JRjs4/view" target="_newtab">OreoSwap Paper</a></button>
					{/* <a href="#" className="btn smallBtn" type="button" onClick={showAlert}>Use Exchange</a>
					<a href="https://drive.google.com/file/d/1kSNWMxyMMrQt8x8j9iMJyIwC0spDqq23/view?usp=sharing" target="_newtab" className="btn largeBtn btns" type="button">Documentation</a> */}
					{/* <a href="https://oreoswap.com/faqs" className="btn mediumBtn btns" type="button">FAQs</a> */}
				</div>


			</div>
			</div>
		</section>
	)
}

export default Banner