import styles from "./index.module.scss"

type Props = {
    
}

const LogoText = ({}: Props) => {
    return <div className={styles['div']}>
         <h3 className={styles.top}>
            Glamour
         </h3>
         <h3 className={styles.bottom}>
            Grove
         </h3>
    </div>
}

export default LogoText