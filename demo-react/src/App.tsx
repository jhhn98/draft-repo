import { Fragment, useEffect } from 'react'
import { Outlet, useMatches } from 'react-router-dom'

import '../../assets/styles/style-reset.scss'
import '../src/assets/styles/layout.scss'

import Header from './components/Header'
import FooterNavigation from './components/FooterNavigation'

function App() {
    const matches = useMatches()

    useEffect(() => {
        const last = matches[matches.length - 1]
        if (last?.handle?.title) {
            document.title = last.handle.title as string
        }
    }, [matches])
    return (
        <Fragment>
            <Header/>
            <main className="main-container">
                <Outlet />
            </main>
            <FooterNavigation/>
        </Fragment>
    )
}

export default App
