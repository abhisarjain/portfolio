import AvatarGuide from "../others/AvatarGuide";
import "./components/Skills.css";
import { useEffect, useState } from "react";
import reactIcon from "../../assets/images/react.png";
import springIcon from "../../assets/images/springboot.png";
import awsIcon from "../../assets/images/aws.png";
import djangoIcon from "../../assets/images/django.png";
import mysqlIcon from "../../assets/images/mysql.png";
import redisIcon from "../../assets/images/redis.png";

export default function Skills() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowContent(true);
        }, 800); // pause after navbar

    }, []);

    return (

        <div className="skills-container">
            {showContent && (<>
                <AvatarGuide
                    message="These are my skills 💻"
                    animate={true}
                />


                <div className="skills-right">

                    <h2 className="skills-title">
                        Skills
                    </h2>

                    <h3 className="primary-title">
                        Primary Skills
                    </h3>

                    <div className="primary-icons">

                        <img src={reactIcon} alt="React" />
                        <img src={springIcon} alt="Spring" />
                        <img src={awsIcon} alt="AWS" />
                        <img src={djangoIcon} alt="Django" />
                        <img src={mysqlIcon} alt="MySQL" />
                        <img src={redisIcon} alt="Redis" />

                    </div>
                     <p className="other-skills">
                        React.js • Springboot • AWS • Django • MySQL • Redis
                    </p>

                    <h3 className="other-title">
                        Other Skills
                    </h3>

                    <p className="other-skills">
                        Vite • Git • Docker • Swagger • Microservices • Azure • Linux • Jira • Axios
                    </p>

                </div>
            </>)}
        </div>

    );

}