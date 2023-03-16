

export default function NetflixRegisterComponent() {
    return (
        <div>
            <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group ">
                <input type="email" className="form-control rounded-0" placeholder=" Email address" /><button className="btn  btn-danger rounded-0 p-3 w-25 " >Get Started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}