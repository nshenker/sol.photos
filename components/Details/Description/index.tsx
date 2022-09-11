import styles from './Description.module.sass'
import cn from 'classnames'

type DescriptionProps = {
  className?: string
  classNameDetails?: string
  title: string
  code: string
  small?: boolean
}

const Description = ({
  className,
  title,
  code,
  small,
  classNameDetails,
}: DescriptionProps) => (
  <div className={cn(styles.description, className)}>
    <div
      className={cn(
        styles.details,
        {
          [styles.small]: small,
        },
        classNameDetails
      )}
    >
      <div className={styles.line}>
        <div className={styles.code}>#{code}</div>
      </div>
      <h1 className={cn(!small ? 'h1' : 'h3', styles.title)}>{title}</h1>
    </div>
  </div>
)

export default Description
