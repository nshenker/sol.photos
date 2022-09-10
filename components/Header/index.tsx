import React, { useEffect, useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import cn from 'classnames'
import styles from './Header.module.sass'
import Logo from '../Logo'
import Theme from '../Theme'

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useScrollPosition(({ currPos }) => {
    setHeaderStyle(currPos.y <= -2)
  })

  return (
    <>
      {mounted && (
        <header
          className={cn(styles.header, {
            [styles.visible]: headerStyle,
          })}
        >
          <div className={cn('container-xl', styles.container)}>
            <div className={styles.control}>
              <Theme className={styles.theme} />
            </div>
            <Logo className={styles.logo} />
          </div>
        </header>
      )}
    </>
  )
}

export default Header
