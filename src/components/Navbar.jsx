function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <h2>Dhruv's <br /> Portfolio</h2>
      <ul>
        <li onClick={() => scrollToSection("hero")}>Home</li>
<li onClick={() => scrollToSection("about")}>About</li>
<li onClick={() => scrollToSection("skills")}>Skills</li>
<li onClick={() => scrollToSection("projects")}>Projects</li>
<li onClick={() => scrollToSection("contact")}>Contact</li>

      </ul>
    </nav>
  );
}

export default Navbar;
