import AvatarGuide from "../others/AvatarGuide";
import "./components/Skills.css";

import reactIcon from "../../assets/images/react.png";
import springIcon from "../../assets/images/react.png";
import awsIcon from "../../assets/images/react.png";
import postgresIcon from "../../assets/images/react.png";
import dockerIcon from "../../assets/images/react.png";

export default function Skills(){

return(

<div className="skills-container">

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

<img src={reactIcon}/>
<img src={springIcon}/>
<img src={awsIcon}/>
<img src={postgresIcon}/>
<img src={dockerIcon}/>

</div>

<h3 className="other-title">
Other Skills
</h3>

<p className="other-skills">
JavaScript • TypeScript • Java • MySQL • Git • Tailwind
</p>

</div>

</div>

);

}