"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
//페이지 타이틀 별도 파일로 분리하여 사용.
import { getRouteLabel } from "@/lib/routeLabels"

export default function Login() {
    const { login } = useAuth()
    const searchParams = useSearchParams()
    const router = useRouter()

    const from = searchParams.get("from") || "/"
    //페이지 타이틀 별도로 관리시 사용
    const label = getRouteLabel(from)

    const handleLogin = () => {
        login()
        alert(`로그인 되었습니다. ${label}페이지로 이동합니다.`)
        router.replace(from)
    }
  return (
    <section>
      <h2>Login</h2>
      <p>로그인 후 {label}페이지로 이동이 가능합니다.</p>
      <button onClick={handleLogin} className="login-button">Login</button>
    </section>
  )
}