import githubImg from "../assets/github_icon.png";
import linkedinImg from "../assets/linkedin_icon.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Created by Wen Zhao</p>
      <div className={styles.socialmedia}>
        <a
          href="https://github.com/wwenzz"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={githubImg} alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/wendywenzhao/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedinImg} alt="LinkedIn Icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
