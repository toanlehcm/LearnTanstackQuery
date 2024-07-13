import React from 'react'
import styles from './HolyGrailLayout.module.scss'

export interface IHolyGrailLayoutProps {}

export default function HolyGrailLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <nav className={styles.nav}>Navigation</nav>
      <main className={styles.main}>Main</main>
      <aside className={styles.sidebar}>Sidebar</aside>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}
