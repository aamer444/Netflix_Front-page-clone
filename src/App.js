// import NetflixHeaderComponent from "./NetflixHeaderComponent"

import LandingPage from "./pages/LandingPage";

export default function NetflixIndexComponent() {


    // this downside line for disabling right click 
 window.addEventListener("contextmenu", (e) => e.preventDefault());

 
    return (
        <div>
            <LandingPage />
        </div>
    )

}