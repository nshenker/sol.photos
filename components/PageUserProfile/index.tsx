import cn from "classnames";
import Main from "./Main";
import Catalog from "../Catalog";
import styles from "./PageUserProfile.module.sass";

import {sortingMarket} from "../../mocks/sortingCatalog";

type UserProfileProps = {
    domain: string
};

const UserProfile = (props: UserProfileProps) => {
    return (
        <div className={cn("section-main", styles.section)}>
            <Main domain={props.domain} />
            <Catalog value={sortingMarket} className={styles.catalog} />
        </div>
    );
};

export default UserProfile;
