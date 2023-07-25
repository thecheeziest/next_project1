import React from 'react';
import NavBar from './NavBar';
import Link from 'next/link';
import styles from './header.module.css'

const Header = () => {
    return (
        <header id="header" className={styles.header}> 
            <div className="inner">
                <h1><Link href="/"><img src="/images/common/logo.svg" /></Link></h1>

                <NavBar />

                <ul className={styles.top_menu}>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/">이메일</Link></li>
                    <li><Link href="/login">로그인</Link></li>
                    <li><Link href="/sitemap">사이트 맵</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;