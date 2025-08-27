"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

import styles from "./Header.module.scss"

export default function Header() {
    const { isLoggedIn, login, logout } = useAuth()
    const router = useRouter()

    const handleClick = () => {
        if (isLoggedIn) {
            logout()
            alert("로그아웃 되었습니다. Home으로 이동합니다.")
            router.replace("/")
        } else {
            login()
            alert("로그인 되었습니다.")
        }
    }
    return (
        <header className={styles.headerFixed}>
            <h1>Next.js Demo</h1>
            <button className={styles.userLink} onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
        </header>
    )
}