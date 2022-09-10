import cn from "classnames";
import styles from "./Cover.module.sass";
import Image from "../../Image";

type ProfileCoverProps = {
    className?: string;
    cover?: string;
    min?: boolean;
};

const ProfileCover = ({
    className,
    cover,
    min,
}: ProfileCoverProps) => {
    return (
        <div
            className={cn(
                styles.wrapper,
                {
                    [styles.min]: min,
                },
                className
            )}
        >
                <div className={styles.container}>
                    {cover && (
                        <div
                            className={cn(styles.cover, {
                                [styles.min]: min,
                            })}
                        >
                            <Image
                                src={cover}
                                layout="fill"
                                alt="Profile cover"
                            />
                        </div>
                    )}
                </div>
        </div>
    );
};

export default ProfileCover;
