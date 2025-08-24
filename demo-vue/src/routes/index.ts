import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { pinia } from '@/app/pinia'
import { useUserStore } from '@/store/user'

import IndexPage from "@/pages/IndexPage.vue"
import OrderPage from "@/pages/OrderPage.vue"
import PayPage from "@/pages/PayPage.vue"
import More from "@/pages/More.vue"
import GuestPage from "@/pages/GuestPage.vue"

/*라우팅 정의할때 연관된 페이지인지 재사용하는 페이지인지 잘 구분해서 상위 라우팅의 자식요소로 라우팅을 구성할지 평면적인 라우팅으로 구성할지 정해야함.*/
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: IndexPage,
        meta: {
            title: "App Index"
        }
    },
    {
        path: "/order",
        name: "Order",
        component: OrderPage,
        meta: {
            requiresAuth: true,
            title: "주문"
        }
    },
    {
        path: "/pay",
        name: "Pay",
        component: PayPage,
        meta: {
            requiresAuth: true,
            title: "결제"
        }
    },
    {
        path: "/more",
        name: "More",
        component: More,
        meta: {
            title: "더보기"
        }
    },
    {
        path: "/guest",
        name: "Guest",
        component: GuestPage,
        meta: {
            title: "방문자"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    const user = useUserStore(pinia)
    if (to.meta.requiresAuth && !user.isLoggedIn) {
        next({ path: '/guest', query: { redirect: to.fullPath } })
    } else {
        next()
    }
})

router.afterEach((to) => {
    const defaultTitle = "Demo"
    document.title = (to.meta.title as string) || defaultTitle
})

export default router