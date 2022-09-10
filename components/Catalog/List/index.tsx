import styles from "./List.module.sass";
import cn from "classnames";
import Card from "../../Card";
import Loader from "../../Loader";

import { ItemsType } from "../../../types";

type ListProps = {
    className?: string;
    items: ItemsType[];
    bigPreview?: boolean;
    col2?: boolean;
};

const List = ({
    className,
    items,
    bigPreview,
    col2,
}: ListProps) => {
    return (
        <>
            <div
                className={cn(
                    styles.list,
                    { [styles.list_2]: col2 },
                    className
                )}
            >
                {items.map((x, index) => (
                    <Card
                        className={styles.card}
                        item={x}
                        key={index + Date.now()}
                        bigPreview={bigPreview}
                    />
                ))}
            </div>
            <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                    <Loader className={styles.loader} />
                    Load more
                </button>
            </div>
        </>
    );
};

export default List;
