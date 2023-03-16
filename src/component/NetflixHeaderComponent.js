export default function NetflixHeaderComponent() {
    return (
        <>
            <div className="d-flex justify-content-between p-4">
                <div >
                    <h1 className="text-danger mt-2">NETFLIX</h1>
                </div>
                <div className="input-group w-25  mt-2 ">
                    <select className="form-select bg-dark text-light">
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>

                    </select>
                    <button className="btn btn-danger ms-2"> SignIn </button>

                </div>

            </div>
        </>
    )
}