"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./FooterNavigation.module.scss"

export default function FooterNavigation() {
    const pathname = usePathname()
    const links = [
        { href: "/", label: "Home" },
        { href: "/order", label: "Order" },
        { href: "/pay", label: "Pay" },
        { href: "/more", label: "More" }
    ]
  return (
    <footer className={styles.footerFixed}>
        <nav className={styles.footerNavigation}>
            {links.map((link) => (
                <Link key={link.href} href={link.href} className={`${styles.navLink} ${pathname === link.href ? styles.current : ""}`}><span>{link.label}</span></Link>
            ))}
            {/*
            <Link href="/" className={styles.navLink}><span>Home</span></Link>
            <Link href="/order" className={styles.navLink}><span>Order</span></Link>
            <Link href="/pay" className={styles.navLink}><span>Pay</span></Link>
            <Link href="/more" className={styles.navLink}><span>More</span></Link>
            */}
        </nav>
    </footer>
  )
}