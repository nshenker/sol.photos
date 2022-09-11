import styles from './Parameters.module.sass'
import cn from 'classnames'

type ParametersType = {
  label: string
  content: string
}

type ParametersProps = {
  className?: string
  parameters: ParametersType[]
}

const Parameters = ({ parameters, className }: ParametersProps) => (
  <div className={cn(styles.parameters, className)}>
    {parameters.map((parameter, index) => (
      <div className={styles.parameter} key={index}>
        <div className={styles.label}>{parameter.label}</div>
        <div className={styles.line}>
          <div className={styles.details}>
            <div className={styles.content}>{parameter.content}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Parameters
