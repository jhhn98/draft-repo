import { NavLink } from 'react-router-dom'

export default function FooterNavigation() {
    return (
        <footer className="footer-fixed">
            <nav className="footer-navigation">
                <NavLink to="/" end className="nav-link"><span>Home</span></NavLink>
                <NavLink to="/order" className="nav-link"><span>Order</span></NavLink>
                <NavLink to="/pay" className="nav-link"><span>Pay</span></NavLink>
                <NavLink to="/more" className="nav-link"><span>More</span></NavLink>
            </nav>
        </footer>
    )
}