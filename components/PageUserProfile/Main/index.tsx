import {useState, useEffect, useMemo} from "react";
import cn from "classnames";
import Tooltip from "rc-tooltip";
import { getDomainKey, getTwitterRecord, getUrlRecord } from "@bonfida/spl-name-service";
import { Connection } from "@solana/web3.js"
import axios from "axios";

import styles from "./Main.module.sass";
import Cover from "../../Profile/Cover";
import Icon from "../../Icon";
import Image from "../../Image";

import { formatWalletAddress } from "../../../utils";

type MainProps = {
    domain: string
};

const Main = (props: MainProps) => {
    const { domain } = props

    const [address, setAddress] = useState<string>("")
    const [twitterRecord, setTwitterRecord] = useState<string>("")
    const [urlRecord, setUrlRecord] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [profileUrl, setProfileUrl] = useState<string>("")


    const connection = useMemo(() => {
        return new Connection("https://api.mainnet-beta.solana.com")
    }, [])

    useEffect(() => {
        (async () => {
            const { pubkey } = await getDomainKey(domain)
            setAddress(pubkey.toBase58())

            try {
                const { data } = await getTwitterRecord(connection, domain);
                setTwitterRecord(data?.toString('utf-8') ?? "")
            } catch {}

            try {
                const { data } = await getUrlRecord(connection, domain);
                setUrlRecord(data?.toString('utf-8') ?? "")
            } catch {}

            try {
                const { data } = await axios.get(`/api/twitter?handle=onybose`)
                console.log(data)
                setName(data.name)
                setProfileUrl(data.profile_image.replace("_normal", ""))
            } catch {}
        })();
    }, [domain])

    return (
        <div className={cn("container-lg", styles.container)}>
            <div className={styles.wrapper}>
                <Cover
                    cover="/images/content/profile-cover.png"
                />
                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <Image
                            src={profileUrl || "/images/content/avatar.png"}
                            width={142}
                            height={142}
                            alt={name}
                        />
                    </div>
                    <div className={styles.details}>
                        <div className={cn("h6", styles.name)}>{name}</div>
                        <div className={styles.code}>
                            <div>
                                {formatWalletAddress(address, 7, 5)}
                                {twitterRecord}
                            </div>
                            <Tooltip overlay="Copy address">
                                <button className={styles.copy}>
                                    <Icon name="copy" size="20" />
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    {twitterRecord && (
                        <button
                            className={cn("button-stroke button-sm", styles.share)}
                            onClick={() => window.open(`https://twitter.com/${twitterRecord}`, "_blank")}
                        >
                            <Icon name="twitter" size="16" />
                            Twitter
                        </button>
                    )}

                    {urlRecord && (
                        <button
                            className={cn("button-stroke button-sm", styles.share)}
                            onClick={() => window.open(urlRecord, "_blank")}
                        >
                            <Icon name="link" size="16" />
                            Website
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;
