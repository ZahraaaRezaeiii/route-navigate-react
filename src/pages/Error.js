import { useNavigate } from "react-router-dom"

export const Error = () => {
    let navigate = useNavigate()
    return (
    <div className="d-flex align-items-center justify-content-center">
        <p className="mb-0 me-3">Not Found Page</p>
        <button onClick={() => {navigate("/");}} type="button" className="btn btn-secondary">Go to home</button>
    </div>  
    )
}