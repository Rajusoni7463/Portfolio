export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/raju.jpeg"
          alt="Hero Section"
          style={{ width: "500px", height: "400px", borderRadius: "500px" }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a B.Tech Computer Science student with a passion for full-stack
            development, focusing on the MERN stack (MongoDB, Express.js,
            React.js, and Node.js). Through my experience in technology, I’ve
            built a strong foundation in both front-end and back-end
            development. I enjoy creating responsive, user-friendly applications
            that solve real-world problems.
          </p>
          <p className="hero--section-description">
            As a dedicated learner, I actively work on hands-on projects,
            continuously improving my skills in web development. I am always
            seeking opportunities to innovate, collaborate, and make an impact
            with the technical expertise I've gained.
          </p>
        </div>
      </div>
    </section>
  );
}
