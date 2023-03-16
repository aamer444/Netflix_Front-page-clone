import NetflixHeaderComponent from "../component/NetflixHeaderComponent.js"
import NetflixMainComponent from "../component/NetflixMainComponent.js"
import NetflixRegisterComponent from "../component/NetflixRegisterComponent.js"
import NetflixFooterComponent from "../component/NetflixFooterComponent.js"
import Accordion from '../component/NetflixAccordianComponent'
import EnjoySlide from "../component/NetflixFirstSlide"
import DownLoadSlide from "../component/NetflixSecondSlide"
import ThirdSlide from "../component/NetflixThirdSlid"
import FourthSlide from "../component/NetflixFourthSlide"
import style from "../app.module.css"
const LandingPage = () => {
    return (
        <div className={style.back}>
            <div className={style.main}>
                <div className={style.box}>
                    <header>
                        <NetflixHeaderComponent />
                    </header>
                    <section className="d-flex justify-content-center align-items-center ">
                        <div className={style.h}>
                            <NetflixMainComponent />
                            <NetflixRegisterComponent />
                        </div>
                    </section>

                </div>
            </div>
            <section>
                <EnjoySlide />
                <DownLoadSlide />
                <ThirdSlide />
                <FourthSlide />
            </section>

            <main>
                <Accordion />
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="w-50 text-light m-5  ">
                        <NetflixRegisterComponent />
                    </div>
                </div>
            </main>

            <footer>
                <NetflixFooterComponent />
            </footer>
        </div>
    )
}

export default LandingPage