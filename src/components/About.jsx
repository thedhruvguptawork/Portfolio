import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="section-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I am a <span>Full Stack Developer</span> with a strong focus on the
          <span> MERN stack</span>, experienced in building real-world
          applications that emphasize clean architecture, data integrity, and
          usability. My work revolves around solving practical problems through
          scalable and maintainable software systems.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I have developed projects such as <span>HealthTraco</span>, a healthcare
          data management platform enabling secure storage and retrieval of
          medical records, and <span>AyushSeva</span>, a Panchkarma therapy
          scheduling system featuring patient feedback, personalized diet plans,
          and digital prescriptions managed by doctors.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Through these projects, I have worked extensively on
          <span> backend APIs</span>, <span>authentication</span>,
          <span> database design</span>, and <span>workflow automation</span>,
          while also maintaining a strong emphasis on frontend polish and
          performance. I continuously refine my skills to build systems that are
          reliable, efficient, and user-centric.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
