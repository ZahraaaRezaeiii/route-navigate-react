import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div class="footer mt-auto bg-light">
            <footer class="py-3">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
                    <li class="nav-item"><Link to="/profile" class="nav-link px-2 text-muted">Profile</Link></li>
                </ul>
                <p class="text-center text-muted">routing & navigating in react</p>
            </footer>
        </div>
    )
}