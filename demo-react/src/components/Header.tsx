import { useAuth } from '@/context/AuthContext'

export default function Header() {
    const { isLoggedIn, login, logout } = useAuth();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isLoggedIn) {
            alert('로그아웃되었습니다.')
            logout()
        } else {
            alert('로그인되었습니다.')
            login()
        }
    }

    return (
        <header className="header-fixed">
            <h1>LOGO</h1>
            <button className="user-link" onClick={handleClick}>
                {isLoggedIn ? 'logout' : 'Login'}
            </button>
        </header>
    )
}