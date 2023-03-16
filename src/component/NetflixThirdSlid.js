import SlideText from "./NetflixSlideText"

export default function ThirdSlide() {
    return (
        <div>
            <hr size="13" className="bg-secondary" />
            <div className="d-flex justify-content-around">
                <div className="w-50 text-light mt-5">
                    <SlideText h1="Watch everywhere." h3='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
                </div>

                <div>
                    <img src="thirdSlide.jpg" height="400" alt="" />
                </div>


            </div>
        </div>
    )
}