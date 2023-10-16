import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">Himanshu Kumar Modi</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm{" "}
                <span className="name-Im-text">Himanshu Kumar Modi</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev{" "}
                <span role="img" aria-label="Close">
                  😎
                </span>
              </span>
              <span className="Im-text-subheading">
                Knack of building Web applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                src="https://res.cloudinary.com/dnrel9myp/image/upload/f_auto,q_auto/v1/Portfolio/wp31sfgxlf6fgdrqkral"
                alt="Profile-pic"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                src="https://lottie.host/481055df-40f3-41b4-8f32-45194a92320e/96fRcQL0ks.json"
                background="transparent"
                align="center"
                speed="1"
                style={{ width: "400px", height: "400px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 cpl-md-6 col-sm-12 py-7 d-flex flex-column">
              <span className="some-text-about-me">
                I'm Himanshu Kumar Modi, a Full-Stack Web Developer from the
                dynamic state of Jharkhand, India, and I'm now doing my B. Tech
                in Computer Science and Engineering with a specialization in
                Information Security at Vellore Institute of Technology. My
                passion for web development drives my work, and I'm always
                looking for new methods to create novel digital experiences. I'm
                ready to help if you have a project that requires a dedicated
                developer with a strong eye for detail and a commitment to
                perfection. Explore my resume area below, and let's go on a
                journey to make your ideas a reality.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full Stack Developer</li>
                    <li>MERN Stack Developer</li>
                    <li>Machine Learning Enthusiast</li>
                    <li>AWS Cloud Practitoner</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
