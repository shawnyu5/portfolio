import Skill from "../../components/Skill";
import InfoBox from "../../components/InfoBox";
import "./Home.css";
import Project from "../../components/Project/Project";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import Contact from "../../components/Suggestions/Contact.js";
import { useEffect, useState } from "react";
import Posts from "../../components/Posts/Posts";
import Toggle from "../../components/Toggle/Toggle";

export default function Home() {
   const [about, setAbout] = useState([]);
   const [skills, setSkills] = useState([]);
   const [knowledge, setKnowledge] = useState([]);
   const [projects, setProjects] = useState([]);
   const [projectFilters, setProjectFilters] = useState([]);
   const [activeProjectFilters, setActiveProjectFilters] = useState(new Set());

   useEffect(() => {
      fetch("data/about.json").then((res) =>
         res.json().then((r) => {
            setAbout(r);
         })
      );
      fetch("data/skills.json").then((res) => {
         res.json().then((s) =>
            setSkills(
               s.skills.map((s) => {
                  return (
                     <div>
                        <Skill
                           percentage={s.percentage}
                           text={`${s.name}`}
                           width={`350px`}
                        />
                     </div>
                  );
               })
            )
         );
      });
      fetch("data/knowledge.json").then((res) => {
         res.json().then((s) =>
            setKnowledge(
               s.knowledge.map((k) => {
                  return (
                     <InfoBox
                        label={k.label}
                        title={k.title}
                        text={k.text}
                        width={`750px`}
                     />
                  );
               })
            )
         );
      });
      fetch("data/projects.json").then((res) => {
         res.json().then((s) => {
            let projectFiltersSet = new Set();
            s.forEach((p) =>
               p.madeWith.forEach((m) => projectFiltersSet.add(m.toLowerCase()))
            );

            let projects;
            if (activeProjectFilters.size === 0) {
               projects = s.map((p) => {
                  return (
                     <Project
                        madeWith={p.madeWith}
                        label={p.label}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        github={p.links.github}
                        demo={p.links.demo}
                        more={p.links.more}
                     />
                  );
               });
            } else {
               projects = s
                  .filter((p) =>
                     p.madeWith.some((m) =>
                        activeProjectFilters.has(m.toLowerCase())
                     )
                  )
                  .map((p) => {
                     return (
                        <Project
                           madeWith={p.madeWith}
                           label={p.label}
                           image={p.image}
                           title={p.title}
                           description={p.description}
                           github={p.links.github}
                           demo={p.links.demo}
                           more={p.links.more}
                        />
                     );
                  });
            }
            setProjects(projects);

            const projectFilterElements = Array.from(projectFiltersSet).map(
               (p) => {
                  return (
                     <label htmlFor={p}>
                        {p}
                        <Toggle
                           id={p}
                           name={"projectFilters[]"}
                           value={p}
                           onChange={setFilter}
                        />
                     </label>
                  );
               }
            );
            setProjectFilters([...projectFilterElements]);
         });
      });
   }, [activeProjectFilters]);

   function setFilter(event) {
      if (event.target.checked) {
         setActiveProjectFilters(
            new Set([...activeProjectFilters, event.target.value])
         );
      } else {
         setActiveProjectFilters(
            new Set(
               Array.from(activeProjectFilters).filter(
                  (f) => f !== event.target.value
               )
            )
         );
      }
   }

   function resetFilters() {
      setActiveProjectFilters(new Set());
      document
         .querySelectorAll("#filter input[type=checkbox]")
         .forEach((f) => (f.checked = false));
   }

   return about && skills && knowledge && projects ? (
      <div id="About">
         <div className={"about-container"}>
            <div>
               <div className={"info-container"}>
                  <div>
                     <p id="iam">👋 Hi, I am</p>
                     <h1 id="title">{about.name || "Rehman Ahmadzai"}</h1>
                  </div>
                  {about.pictureURL ? (
                     <img
                        className={"picture"}
                        src={about.pictureURL}
                        alt={about.name + "s Picture"}
                     />
                  ) : null}
               </div>
               <p id="bio" style={{ color: "#A1A1A1" }}>
                  {about.bio ||
                     "I am a programmer, I like to work on games and full-stack applications."}
               </p>
               <pre id={"socials"}>
                  <a
                     href={
                        about.linkedInURL ||
                        "https://www.linkedin.com/in/rehmanahmadzai/"
                     }
                  >
                     <button value={"LinkedIn"}>
                        LinkedIn <AiFillLinkedin size={30} />
                     </button>
                  </a>
                  <a
                     href={
                        about.githubURL || "https://github.com/certifiedrehman/"
                     }
                  >
                     <button value={"GitHub"}>
                        Github <SiGithub size={30} />
                     </button>
                  </a>
                  <a href={`mailto:${about.email || "mailto:hi@ahmadz.ai"}`}>
                     <button value={"Email"}>
                        Email <AiOutlineMail size={30} />
                     </button>
                  </a>
                  <a href={`${about.blogURL || "http://blog.ahmadz.ai"}`}>
                     <button value={"Blog"}>
                        Blog <RiNewspaperLine size={30} />
                     </button>
                  </a>
               </pre>
            </div>
         </div>
         <br />
         <br />
         <br />
         <h2>Programming Languages</h2>
         <div id={"section-2"}>
            <div id={`languages`}>{skills}</div>
            <Posts />
         </div>
         <br />

         <div>
            <h2>Knowledge</h2>
            <div id={"tools"}>{knowledge}</div>
         </div>
         <hr />
         <div id={"portfolio"}>
            <h1>
               Projects{" "}
               {activeProjectFilters.size > 0 ? (
                  <button onClick={resetFilters}>Clear Filter</button>
               ) : null}
            </h1>
            <div id={"filter"}>{projectFilters}</div>
            <div id={"projects"}>{projects}</div>
         </div>

         <hr />
         <h1 id={"contact"}>Get in Touch</h1>
         <Contact />
      </div>
   ) : (
      <div>Loading</div>
   );
}
