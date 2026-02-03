function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Dhruv Gupta</p>

        <div className="footer-links">
          <a href="gupta.dhruv.professional@gmail.com">Email - gupta.dhruv.professional@gmail.com</a>
          <a href="6388715461">Contact-6388715461</a>
          <a href="https://linkedin.com/in/dhruv-gupta-a73391268/" target="_blank">
            LinkedIn
          </a>
          <a href="https://x.com/_dhruvgupta2308" target="_blank">
            X
          </a>
          <a href="https://github.com/thedhruvguptawork" target="_blank">
            GitHub
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Dhruv Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
