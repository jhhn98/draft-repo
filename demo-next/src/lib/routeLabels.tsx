export const ROUTE_LABELS = {
    "/": "홈",
    "/order": "주문",
    "/pay": "결제",
    "/more": "더보기",
    "/login": "로그인"
} as const

export type KnownRoute = keyof typeof ROUTE_LABELS

export function getRouteLabel(path: string): string {
    return ROUTE_LABELS[path as KnownRoute] ?? "홈"
}