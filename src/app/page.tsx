import styles from './page.module.css';
import {AuthMenu, Logo} from '../components'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.center}>
        <Logo/>
        <AuthMenu></AuthMenu>
      </div>
    </div>
  )}