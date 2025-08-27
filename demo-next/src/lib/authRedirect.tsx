export function redirectToLogin(router: { replace: (href: string) => void}, from: string) {
    router.replace(`/login?from=${encodeURIComponent(from)}`)
}