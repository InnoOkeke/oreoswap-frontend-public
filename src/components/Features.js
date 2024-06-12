import "../css/local/partials/components/_features.css";
const Features = ({ isClicked}) => {
    return (
        <section className={isClicked ? " features-darkmode " : "features-lightmode "}>
            <div className="features__wrapper  text-center">
                <h1 className={isClicked ? "features__header-darkmode" : "features__header-lightmode"}>Our Exciting Features</h1>
                    <p className={isClicked ? "features__header__text-darkmode" : "features__header__text-lightmode"}>
                        This Exchange is a food-themed decentralized platform. 
                        The food-based Oreo token runs on the Binance smart chain contract. 
                        OREO is the platform in-built  token with Pastrychef as the chief baker. 
                        It is specially designed and developed to improve user experience with exciting 
                        features for fast and inexpensive trades using BEP tokens. The cryptocurrency exchange platform offers significant functionalities like staking, farming, swapping and Liquidity pools. 
                        Other features like the Lottery system, NFT market place, P2P and GameFi will be added at a later date.
                    </p>
                <div className="features__display__container">
                    <div className="features__display">
                        <div className={isClicked ? "features__display--liquidity-darkmode" : "features__display--liquidity-lightmode"}>
                            <div className={isClicked ? "features__display--liquidity--wrapper-darkmode" : "features__display--liquidity--wrapper-lightmode"}>
                                <img src="img/features/Liquidity.png" alt="Liquidity" className="liquidity-img"/>
                            </div>
                            <div className="features__display--liquidity--text">Liquidity Portals</div>
                        </div>
                        <div className={isClicked ? "features__display--transaction-darkmode" : "features__display--transaction-lightmode"}>
                            <div className={isClicked ? "features__display--transaction--wrapper-darkmode" : "features__display--transaction--wrapper-lightmode"}>
                                <img src="img/features/transaction.png" alt="Low Transaction Fees" className="transaction-img"/>
                            </div>
                            <div className="features__display--transaction--text">Low Transaction Fees</div>
                        </div>
                        <div className={isClicked ? "features__display--payment-darkmode" : "features__display--payment-lightmode"}>
                            <div className={isClicked ? "features__display--payment--wrapper-darkmode" : "features__display--payment--wrapper-lightmode"}>
                                <img src="img/features/secure payment.png" alt="Payment Gateway" className="gateway-img"/>
                            </div>
                            <div className="features__display--payment--text">Safe Payment Gateway</div>
                        </div>
                        </div>
                        <div className="features__display">
                            <div className={isClicked ? "features__display--staking-darkmode" : "features__display--staking-lightmode"}>
                                <div className={isClicked ? "features__display--staking--wrapper-darkmode" : "features__display--staking--wrapper-lightmode"}>
                                    <img src="img/features/Stake.png" alt="Staking" className="Stake-img"/>
                                </div>
                                <div className="features__display--staking--text">Staking</div>
                            </div>
                            <div className={isClicked ? "features__display--portfolio-darkmode" : "features__display--portfolio-lightmode"}>
                                <div className={isClicked ? "features__display--portfolio--wrapper-darkmode" : "features__display--portfolio--wrapper-lightmode"}>
                                    <img src="img/features/portfolio.png" alt="Portfolio" className="portfolio-img"/>
                                </div>
                            <div className="features__display--portfolio--text">Improve Portfolio</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Features;