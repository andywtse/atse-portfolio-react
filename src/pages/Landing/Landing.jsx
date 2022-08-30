import styles from './Landing.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Landing = ({ user }) => {
  return (
    <>
      <NavBar/>
      <main className={styles.container}>
        <h1>hello, {user ? user.name : 'friend'}</h1>
      </main>
    </>
  )
}

export default Landing
