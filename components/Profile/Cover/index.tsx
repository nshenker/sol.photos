import cn from "classnames";
import styles from "./Cover.module.sass";
import Image from "../../Image";

type ProfileCoverProps = {
    className?: string;
    cover: string;
};

const ProfileCover = ({
    className,
    cover,
}: ProfileCoverProps) => {
    return (
        <div
            className={cn(
                styles.wrapper,
                className
            )}
        >
            {
                <div className={styles.container}>
                        <div
                            className={cn(styles.cover)}
                        >
                            <Image
                                src={cover}
                                layout="fill"
                                alt="Profile cover"
                            />
                        </div>
                </div>
            }
        </div>
    );
};

export default ProfileCover;
