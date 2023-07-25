import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="inner">
                <h2>저작권</h2>
                <h2>Tel. 010-1234-5678</h2>
            </div>

        </footer>
    );
};

export default Footer;