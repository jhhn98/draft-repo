import App from '@/App'
import Home from '@/pages/Home'
import Order from '@/pages/Order'
import Pay from '@/pages/Pay'
import More from '@/pages/More'
import Login from '@/pages/Login'
import RequireAuth from './RequireAuth'

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>,
                handle: {
                    meta: {
                        title: 'Home'
                    }
                }
            },
            {
                path: 'order',
                element: (
                    <RequireAuth>
                        <Order/>
                    </RequireAuth>
                ),
                handle: {
                    meta: {
                        title: '주문'
                    }
                }
            },
            {
                path: 'pay',
                element: (
                    <RequireAuth>
                        <Pay/>
                    </RequireAuth>
                ),
                handle: {
                    meta: {
                        title: '결제'
                    }
                }
            },
            {
                path: 'more',
                element: (
                    <RequireAuth>
                        <More/>
                    </RequireAuth>
                ),
                handle: {
                    meta: {
                        title: '더보기'
                    }
                }
            },
            {
                path: 'login',
                element: <Login/>,
                handle: {
                    meta: {
                        title: '로그인'
                    }
                }
            }
        ]
    }
]