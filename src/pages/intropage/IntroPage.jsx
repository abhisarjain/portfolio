import { useEffect, useState } from "react";
import introVideo from "../../assets/videos/intrro.webm";
import "./components/IntroPage.css";

export default function IntroPage({ setEntered }) {

    const [moveLeft, setMoveLeft] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [showTyping, setShowTyping] = useState(false);
    const [showBio, setShowBio] = useState(false);
    const [bubbleText, setBubbleText] = useState("Hello there 👋");
    const fullText = "ABHISAR JAIN";
    const [exitIntro, setExitIntro] = useState(false);

 const handleEnter = () => {

    setExitIntro(true);

    setTimeout(()=>{

        localStorage.setItem("entered","yes");
        setEntered(true);

    },900);   // animation duration

};
    useEffect(() => {

        // move video left
        setTimeout(() => {
            setMoveLeft(true);
        }, 1600);

        // change bubble text
        setTimeout(() => {
            setBubbleText("How are you doing?");
        }, 5000);

        // start typing
        let i = 0;
        setTimeout(() => {

            setShowTyping(true);

            const interval = setInterval(() => {

                setDisplayText(fullText.slice(0, i + 1));
                i++;

                if (i === fullText.length) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setShowBio(true);
                    }, 500);
                }

            }, 180);

        }, 2600);

    }, []);
    return (
        <div className="intro-container">

            <div className={`video-wrapper ${moveLeft ? "move-left" : ""} ${exitIntro ? "exit-left" : ""}`}>
                {/* speech bubble */}
                <div className="speech-bubble">
                    {bubbleText}
                </div>
                <video autoPlay muted playsInline className="intro-video">
                    <source src={introVideo} type="video/webm" />
                </video>
            </div>

            {showTyping && (
                <div className={`intro-card ${exitIntro ? "exit-right" : ""}`}>

                    <h1 className="intro-small">
                        My Name Is
                    </h1>

                    <h1 className="intro-heading">
                        {displayText}
                        <span className="cursor">|</span>
                    </h1>

                </div>

            )}
            {showBio && (
                <div className={`bio-card ${exitIntro ? "exit-right" : ""}`}>
                    <h1 className="bio-text">
                        I am a Full Stack Developer specializing in Spring Boot, React, and AWS.
                        I build scalable, secure, and high-performance applications with clean architecture
                        and modern user experiences.
                    </h1>

                    <button className="start-btn" onClick={handleEnter}>
                        Let's Get Started
                    </button>

                </div>
            )}

        </div>
    );
}