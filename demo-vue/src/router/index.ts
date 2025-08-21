import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import IndexPage from "@/pages/IndexPage.vue"
import OrderPage from "@/pages/OrderPage.vue"

/*라우팅 정의할때 연관된 페이지인지 재사용하는 페이지인지 잘 구분해서 상위 라우팅의 자식요소로 라우팅을 구성할지 평면적인 라우팅으로 구성할지 고민해봐야겠다.*/
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: IndexPage
    },
    {
        path: "/order",
        name: "Order",
        component: OrderPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router