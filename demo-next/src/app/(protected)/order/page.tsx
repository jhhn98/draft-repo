"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { redirectToLogin } from "@/lib/authRedirect"
{/*import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '주문',
  description: '주문 페이지'
}*/}

export default function Order() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const ran = useRef(false)
  
  useEffect(() => {
    if (ran.current) return
    ran.current = true

    if (!isLoggedIn) {
      alert("로그인 후 이용 가능합니다. 로그인페이지로 이동합니다.")
      //페이지 타이틀 별도 관리시 사용
      //router.replace(`/login?from=${encodeURIComponent("/order")}`)
      
      //page redirect 코드 중복제거
      redirectToLogin(router, "/order")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) return null

  return (
    <section>
      <h2>Order</h2>
      <p>Order page</p>
    </section>
  )
}