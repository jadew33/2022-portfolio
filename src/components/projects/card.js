import useWindowDimensions from "../../hooks/useWindowDimensions";
export default function ProjectCard({
  title,
  description,
  link,
  video,
  skills,
}) {
  const { height, width } = useWindowDimensions();
  return (
    <div className="project-card">
      {width > 768 ? (
        <iframe
          width="450"
          height="270"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ) : (
        <iframe
          width="300"
          height="200"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
      <div className="card-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <p key={index} className="skill">
            {skill}
          </p>
        ))}
      </div>

      {link && (
        <a
          className="carousel-link hover-underline-animation"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Work
        </a>
      )}
    </div>
  );
}
