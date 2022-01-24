import Link from 'next/link';
import styles from './index.module.css'
const Index=()=>{
    return(
        <>
            <div className={`header_color ${styles.size}`}>Srikanth</div>
            <Link href='/about'>About</Link>
        </>
    )
}
export default Index;