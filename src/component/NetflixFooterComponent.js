export default function NetflixFooterComponent() {
    return (<div className="text-secondary">
        <hr  size="13" className="bg-secondary" />
        <div className="d-flex justify-content-around  ps-5 mt-5 pe-5">
            <div>
                <p className="ms-4">Questions? Call 000-800-919-1694</p>
                <ul >
                    <li className="list-group mt-4">FAQ</li>
                    <li className="list-group mt-3">Investor Relation</li>
                    <li className="list-group mt-3">Privacy</li>
                    <li className="list-group mt-3" >Speed Test</li>
                    <li className="list-group mt-3">  <select className="form-select mt-3 mb-3 bg-dark text-light">
                        <option> <span className="bi bi-globe"></span> Language</option>
                        <option>English</option>
                        <option>Hindi</option>

                    </select></li>
                    <li className="list-group mt-3">Netflix India</li>
                </ul>
            </div>
            <ul>
                <li className="list-group mt-5">Help Centre</li>
                <li className="list-group mt-3"> Jobs</li>
                <li className="list-group mt-3">Cookie Preferences</li>
                <li className="list-group mt-3">Legal Notices</li>
            </ul>
            <ul>
                <li className="list-group mt-5">Account</li>
                <li className="list-group mt-3">Ways to Watch</li>
                <li className="list-group mt-3">Corporate Information</li>
                <li className="list-group mt-3">Only on Netflix</li>
            </ul>
            <ul>
                <li className="list-group mt-5">Media Centre</li>
                <li className="list-group mt-3 ">Terms of Use</li>
                <li className="list-group mt-3"  >Contact Us</li>

            </ul>



        </div>

    </div>
    )
}