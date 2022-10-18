import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import resume from "../../assets/resume.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { animateScroll as scroll } from "react-scroll";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gu6r8vn",
        "template_1bsh3cb",
        form.current,
        "eH0lCkqUdM4uqn_4M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="email-container">
        <h1>Contact me</h1>
        <p>
          Feel free to shoot me a message, even if its just to say hi :&#41;
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-container">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Message:</label>
            <textarea
              name="message"
              value={message}
              rows={4}
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input
            className="btn-border-3"
            type="submit"
            value="Send"
            disabled={!name || !email || !message}
          />
        </form>
      </div>
      <div className="links-container">
        <div>
          <img src={resume} alt="resume" />
          <a
            href="https://drive.google.com/file/d/1oDvFkQLMyU0WyMFccr35GQWp0vd39lBD/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            Resume
          </a>
        </div>
        <div>
          <img src={github} alt="github" />
          <a
            href="https://github.com/jadew33"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            Github
          </a>
        </div>
        <div>
          <img src={linkedin} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/jade-wei/"
            target="_blank"
            rel="noreferrer"
            className="hover-underline-animation"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <h1
        className="back-to-top"
        onClick={() =>
          scroll.scrollToTop({
            duration: 1000,
          })
        }
      >
        Back to top
      </h1>
    </div>
  );
}
