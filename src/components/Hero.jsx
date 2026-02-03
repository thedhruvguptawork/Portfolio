import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="hero" className="hero">
            <motion.div
                className="hero-text"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                <span className="hero-badge">Full Stack Developer</span>

                <h1>Hi, I'm Dhruv</h1>
                <p>
                    Full Stack Developer focused on building clean, scalable, and
                    user-centric web applications.
                </p>

                <button
  onClick={() =>
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  View Projects
</button>



                <div className="hero-links">
                    <a href="https://github.com/thedhruvguptawork">GitHub</a>
                    <a href="https://linkedin.com/in/dhruv-gupta-a73391268">LinkedIn</a>
                    <a href="https://drive.google.com/drive/folders/1NP9JRT6YGeoze24dUCwqiYWsiasRCOP9?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>

                </div>

            </ motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >

                <img src={profile} alt="Dhruv Gupta" />
            </motion.div>
        </section>
    );
}

export default Hero;
