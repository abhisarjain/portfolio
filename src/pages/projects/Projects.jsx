import { useState } from "react";
import AvatarGuide from "../others/AvatarGuide";
import projectsData from "../../assets/json/Projects.json";
import "./components/Projects.css";

function ProjectCard({ project, isEnterprise }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`project-card-wrapper ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="project-card-inner">

                {/* FRONT */}
                <div className="project-card-front">
                    <div className="project-card-image">
                        <img src={project.image} alt={project.name} />
                        <div className="project-card-image-overlay" />
                    </div>
                    <div className="project-card-front-content">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-short-desc">{project.shortDescription}</p>
                        <div className="project-tech-pills">
                            {project.tech.slice(0, 3).map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="tech-pill">+{project.tech.length - 3}</span>
                            )}
                        </div>
                        <p className="flip-hint">Click to see more →</p>
                    </div>
                </div>

                {/* BACK */}
                <div className="project-card-back">
                    <div className="project-card-back-inner">
                        <h3 className="project-name">{project.name}</h3>

                        <div className="project-full-desc-scroll">
                            <p className="project-full-desc">
                                {project.fullDescription.split('\n').map((line, i) => (
                                    <span key={i} style={{ display: 'block', marginBottom: '6px' }}>
                                        {line}
                                    </span>
                                ))}
                            </p>                        </div>

                        <div className="project-tech-pills" style={{ marginTop: "12px" }}>
                            {project.tech.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        {!isEnterprise && (
                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="project-link-btn"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="project-link-btn project-link-live"
                                    >
                                        Live ↗
                                    </a>
                                )}
                            </div>
                        )}

                        <p className="flip-hint" style={{ marginTop: "10px" }}>Click to go back ←</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function Projects() {
    const { personalProjects, enterpriseProjects } = projectsData;

    return (
        <div className="projects-container">

            <AvatarGuide
                message="Here are my projects 🚀"
                animate={false}
            />

            <div className="projects-right">

                {/* ── PERSONAL PROJECTS ── */}
                <section className="projects-section">
                    <h2 className="section-title">Personal Projects</h2>
                    <div className="projects-grid">
                        {personalProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} isEnterprise={false} />
                        ))}
                    </div>
                </section>

                {/* ── ENTERPRISE PROJECTS ── */}
                {enterpriseProjects.map((org) => (
                    <section key={org.orgId} className="projects-section">

                        <div className="org-header">
                            <h2 className="section-title">{org.orgName}</h2>
                            <div className="org-meta">
                                <span className="org-role">{org.role}</span>
                                <span className="org-duration">{org.duration}</span>
                            </div>
                        </div>

                        <div className="projects-grid">
                            {org.projects.map((project) => (
                                <ProjectCard key={project.id} project={project} isEnterprise={true} />
                            ))}
                        </div>

                    </section>
                ))}

            </div>
        </div>
    );
}