import SlideText from "./NetflixSlideText"

export default function FourthSlide() {
    return (
        <div>
            <hr size="13" className="bg-secondary" />
            <div className="d-flex justify-content-around">

                <div>
                    <img src="fourthSlide.jpg" height="400" alt="" />
                </div>

                <div className="w-50 text-light mt-5 me-5">


                    <SlideText h1="Download your shows to watch offline." h2="Save your favourites easily and always" H3='have something to watch.' />


                </div>


            </div>
        </div>
    )
}