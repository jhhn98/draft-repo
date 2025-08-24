import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/routes/AppRouter'

import { AuthProvider } from '@/context/AuthContext'

import '../../assets/styles/style-reset.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </StrictMode>
)
