import projects from "./project-constants";
import ProjectCard from "./card";

export default function ProjectsContainer() {
  return (
    <div className="projects-section">
      <h1 className="title">Some of my past projects:</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
