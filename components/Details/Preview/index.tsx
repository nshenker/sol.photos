import styles from './Preview.module.sass'
import cn from 'classnames'
import Image from '../../Image'
import Back from '../../Back'
import Icon from '../../Icon'

type PreviewProps = {
  className?: string
  image: any
  onClose: () => void
}

type LoaderProps = {
  src: string
  width: number
  quality?: number
}
const nftImageLoader = ({ src, width, quality }: LoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Preview = ({ className, image, onClose }: PreviewProps) => {
  return (
    <div className={cn(styles.preview, className)}>
      <Image
        loader={nftImageLoader}
        src={image}
        layout="fill"
        objectFit="contain"
        alt=""
      />
      <Back className={styles.back} tooltip="Back" onAction={onClose} />
    </div>
  )
}

export default Preview
