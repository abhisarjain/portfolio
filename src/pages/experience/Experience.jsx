import { useRef, useState } from "react";
import AvatarGuide from "../others/AvatarGuide";
import projectsData from "../../assets/json/Projects.json";
import "./components/Experience.css";

export default function Experience({ setActivePage }) {

    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const companies = projectsData.enterpriseProjects;

    // scroll to card on dot click
    const scrollToCard = (index) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index];
        if (!card) return;
        card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        setActiveIndex(index);
    };

    // mouse drag
    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - trackRef.current.offsetLeft);
        setScrollLeft(trackRef.current.scrollLeft);
    };
    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };
    const onMouseUp = () => setIsDragging(false);

    // touch drag
    const onTouchStart = (e) => {
        setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
        setScrollLeft(trackRef.current.scrollLeft);
    };
    const onTouchMove = (e) => {
        const x = e.touches[0].pageX - trackRef.current.offsetLeft;
        trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    // active card detect on scroll
    const onScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let minDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
            const dist = Math.abs((child.offsetLeft + child.offsetWidth / 2) - center);
            if (dist < minDist) { minDist = dist; closest = i; }
        });
        setActiveIndex(closest);
    };

    return (
        <div className="exp-container">

            <AvatarGuide
                message="My work experience 💼"
                animate={false}
            />

            <div className="exp-right">

                <h2 className="exp-main-title">Experience</h2>

                {/* ── TIMELINE PILLS ── */}
                <div className="timeline-wrapper">
                    {companies.map((org, i) => (
                        <>
                            {i > 0 && <div key={`sep-${i}`} className="timeline-sep" />}
                            <button
                                key={org.orgId}
                                className={`timeline-dot ${i === activeIndex ? "active" : ""}`}
                                onClick={() => scrollToCard(i)}
                            >
                                <span className="dot-index">0{i + 1}</span>
                                <span className="dot-label">{org.orgName}</span>
                            </button>
                        </>
                    ))}
                </div>

                {/* ── CARDS TRACK ── */}
                <div
                    className={`cards-track ${isDragging ? "dragging" : ""}`}
                    ref={trackRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onScroll={onScroll}
                >
                    {companies.map((org, i) => (
                        <div
                            key={org.orgId}
                            className={`exp-card ${i === activeIndex ? "exp-card-active" : ""}`}
                        >
                            {/* header */}
                            <div className="exp-card-header">
                                <span className="exp-card-number">0{i + 1}</span>
                                <div>
                                    <h3 className="exp-org-name">{org.orgName}</h3>
                                    <p className="exp-role">{org.role}</p>
                                </div>
                            </div>

                            <p className="exp-duration">📅 {org.duration}</p>

                            <div className="exp-divider" />

                            {/* projects list */}
                            <p className="exp-projects-label">Projects</p>
                            <div className="exp-projects-list">
                                {org.projects.map((proj) => (
                                    <div key={proj.id} className="exp-project-item">
                                        <span className="exp-project-dot" />
                                        <div>
                                            <p className="exp-project-name">{proj.name}</p>
                                            <p className="exp-project-desc">{proj.shortDescription}</p>
                                            <div className="exp-tech-pills">
                                                {proj.tech.map((t) => (
                                                    <span key={t} className="exp-tech-pill">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* see all projects */}
                            <button
                                className="see-projects-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActivePage("projects");
                                }}
                            >
                                See All Projects ↗
                            </button>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}