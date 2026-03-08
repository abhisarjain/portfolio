import { useState, useEffect } from "react";
import avatarVideo from "../../assets/videos/avatar.webm";
import "./AvatarGuide.css";

export default function AvatarGuide({ message, animate }) {

  const [enter, setEnter] = useState(!animate);

  useEffect(() => {

    if (animate) {
      setTimeout(() => {
        setEnter(true);
      }, 200);
    }

  }, [animate]);

  return (

    <div className={`avatar-wrapper ${enter ? "avatar-enter" : ""}`}>

      <div className="speech-bubble">
        {message}
      </div>

      <video autoPlay muted playsInline className="avatar-video">
        <source src={avatarVideo} type="video/webm" />
      </video>

    </div>

  );
}