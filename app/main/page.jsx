import styles from './main.module.css'

const MainPage = () => {
    return (
        <section id='content' className={`con ${styles.main}`}>
            <div className='inner'>
                <h2>메인페이지</h2>
                <ul>
                    <li>
                        <h3>타이틀 1</h3>
                    </li>
                    <li>
                        <h3>타이틀 2</h3>
                    </li>
                    <li>
                        <h3>타이틀 3</h3>
                    </li>
                    <li>
                        <h3>타이틀 4</h3>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MainPage;