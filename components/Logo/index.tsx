import Link from "next/link";
import Image from "../Image";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)}>
            <Image
                src="/images/sol.photos.png"
                width="200"
                height="50"
                alt="sol.photos"
            />
        </a>
    </Link>
);

export default Logo;
