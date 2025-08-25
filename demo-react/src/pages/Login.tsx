import { Fragment, useCallback, useMemo } from 'react'
import { useLocation, useNavigate, matchRoutes } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { routes } from '@/routes/config'

export default function Login() {
    const { login } = useAuth()
    const nav = useNavigate()
    const location = useLocation()

    const fromPath = (location.state as any)?.from?.pathname || '/'

    const targetTitle = useMemo(() => {
        const ms = matchRoutes(routes, fromPath);
        const last = ms?.[ms.length - 1]
        return (last?.route as any)?.handle?.meta?.title ?? 'Home'
    }, [fromPath])

    const handleLogin = useCallback(() => {
        alert(`로그인되었습니다. '${targetTitle}' 페이지로 이동합니다.`)
        login()
        nav(fromPath, { replace: true })
    }, [login, nav, fromPath, targetTitle])

    return (
        <Fragment>
            <h2>Login</h2>
            <section>
                <p>로그인 후 '{targetTitle}' 페이지로 이동이 가능합니다.</p>
                <button type="button" className="login-button" onClick={handleLogin}>LOGIN</button>
            </section>
        </Fragment>
    )
}