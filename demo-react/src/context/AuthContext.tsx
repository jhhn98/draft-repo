import { createContext, useContext, useState, ReactNode } from "react"

interface AuthContextType {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)

    if (!ctx) throw new Error('useAuth must be used within the AuthProvider')
    return ctx
}