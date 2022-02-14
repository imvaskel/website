import styles from "../styles/footer.module.css"

const socials = {
    discord: "",
    twitter: ""
}

const style = {
    width: "64px",
    height: "64px"
}

const Footer = () => {

    return (
        <div className={styles.footer_container}>
            <a href={socials.discord}> <img src="discord.svg" className={styles.icon}/> </a>
            <a href={socials.twitter}> <img src="twitter.svg" className={styles.icon}/> </a>
        </div>
    )
}

export default Footer