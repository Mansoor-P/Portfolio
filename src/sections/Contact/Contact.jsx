import styles from './ContactStyles.module.css';

const Contact = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Let's Connect</h3>
          <a href="mailto:munaf6007@gmail.com" className={styles.email}>munaf6007@gmail.com</a>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/mansoor0731/" className={styles.icon}>Li</a>
            <a href="https://github.com/Mansoor-P" className={styles.icon}>Git</a>
            
          </div>
        </div>
        
        <div className={styles.section}>
          <h3>Contact Me</h3>
          <form>
            <input type="email"  placeholder="Enter Email address" className={styles.emailInput} />
            <button type="submit"  className={styles.subscribeButton}>Mail Me</button>
          </form>
        </div>
      </div>
    <hr className={styles.hr}/>
      <div className={styles.footerBottom}>
      <p>
        &copy; Copyright &copy; 2024 All Rights reserved | This portfolio made
        by <span style={{color: "#0987f2"}} >Mansoor Pathikonda</span><br />
      </p>
      </div>
    </div>
  );
};

export default Contact;
