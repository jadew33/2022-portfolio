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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

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
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
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
          {error && (
            <span className="error">
              Something went wrong, please try again.
            </span>
          )}
          {success && <span>Successfully sent!</span>}
        </form>
      </div>
      <div className="links-container">
        <div>
          <img src={resume} alt="resume" />
          <a
            href="https://docs.google.com/document/d/1ViDlGgHe4s5KWZWJAmzRI-bym033aOj2xmuTYMOOhz8/edit?usp=sharing"
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
      <span
        className="back-to-top blinkText"
        onClick={() =>
          scroll.scrollToTop({
            duration: 1000,
          })
        }
      >
        Back to top
      </span>
    </div>
  );
}
