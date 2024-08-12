import { Link } from 'react-router-dom'

export const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">React</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">About</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/profile">Profile</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}