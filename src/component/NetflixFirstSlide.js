import SlideText from "./NetflixSlideText"

export default function EnjoySlide() {
    return (
        <div className="d-flex justify-content-around">

            <div className="w-50 text-light mt-5">

                <SlideText h1="Enjoy on your TV." h3="Watch on smart TVs, PlayStation, Xbox, " H3="Chromecast, Apple TV, Blu-ray players and more." />

            </div>

            <div>
                <img src="firstSlide.jpg" height="400" alt="" />
            </div>

        </div>
    )
}