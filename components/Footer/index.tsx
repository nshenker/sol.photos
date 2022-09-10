import Link from "next/link";
import styles from "./Footer.module.sass";
import cn from "classnames";

import { LegalList } from "../../constants/navigation";

type FooterProps = {
    className?: string;
};

const Footer = ({ className }: FooterProps) => (
    <div className={cn(className, styles.footer)}>
        <div className="container-xl">
            <div className={styles.foot}>
                <div className={styles.copyright}>© 2022 sol.photos</div>
                <div className={styles.list}>
                    {LegalList.map((link, index) => (
                        <Link href={link.url} key={index}>
                            <a className={styles.link}>{link.title}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
