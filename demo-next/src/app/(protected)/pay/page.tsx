"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { redirectToLogin } from "@/lib/authRedirect"
{/*import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '결제',
  description: '결제 페이지'
}*/}

export default function Pay() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const ran = useRef(false)
  
  useEffect(() => {
    if (ran.current) return
    ran.current = true

    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다. 로그인페이지로 이동합니다.")
      //페이지 타이틀 별도 관리시 사용
      //router.replace(`/login?from=${encodeURIComponent("/pay")}`)

      //page redirect 코드 중복제거
      redirectToLogin(router, "/pay")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) return null
  
  return (
    <section>
      <h2>Pay</h2>
      <p>Pay page</p>
    </section>
  )
}