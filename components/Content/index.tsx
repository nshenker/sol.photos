import styles from './Content.module.sass'
import cn from 'classnames'
import Icon from '../Icon'

type ContentProps = {
  className?: string
  children: any
  moreButton?: boolean
}

const Content = ({ className, children, moreButton }: ContentProps) => (
  <div className={cn(styles.content, className)}>{children}</div>
)

export default Content
