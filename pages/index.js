import styles from './index.module.css'
import Card from './Card'


export default () => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img 
                src="/logo.png" 
                alt="logo"
                className={styles.log} />
            </header>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}