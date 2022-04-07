import classes from "./Footer.module.css"
import { FaDiscord, FaTwitter, FaFlickr } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.browse}>
                <div className={classes.title}>
                    Your NFT needs a soundtrack.<br />Find it here.
                </div>
                <button className={classes.btn}>Browse Music</button>
            </div>
            <div className={classes.footer_bottom}>
                <div className={classes.footer_comment}>@ 2022 Dequencey Music Inc</div>
                <div className={classes.footer_icon_field}>
                    <FaFlickr className={classes.icon} />
                    <FaTwitter className={classes.icon} />
                    <FaDiscord className={classes.icon} />
                </div>
                <div className={classes.footer_nav}>
                    <div className={classes.footer_text}>DMCA Policy</div>
                    <div className={classes.footer_text}>Terms of Service</div>
                    <div className={classes.footer_text}>Privacy Policy</div>
                </div>
            </div>
        </div>
        
    )
}
export default Footer