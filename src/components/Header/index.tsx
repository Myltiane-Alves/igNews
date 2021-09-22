import { SignInButton } from '../SignInButton'
import { ActiveLink }  from '../AtctiveLink';

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
          <a>Posts</a>
        </ActiveLink>
        <SignInButton />
      </div>
    </header>
  )
}
