import githubImg from "../assets/github_icon.png";
import linkedinImg from "../assets/linkedin_icon.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Created by Wen Zhao</p>
      <div className={styles.socialmedia}>
        <a href="#">
          <img src={githubImg} />
        </a>
        <a href="#">
          <img src={linkedinImg} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
