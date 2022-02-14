import ProgressBar from "./ProgressBar";
import { getTool } from "../helpers";
export default function Skill(props) {
   const tool = getTool(props.text);
   const SkillStyles = {
      margin: "5px 0 5px 0",
      border: "solid 1px var(--border-color)",
      display: "inline-flex",
      textAlign: "right",
      maxWidth: "100%",
   };
   const textStyle = {
      padding: "5px",
      borderLeft: "solid 1px var(--border-color)",
      fontWeight: "400",
      display: "flex",
      alignItems: "center",
   };
   let toolStyle = {
      paddingLeft: "5px",
      height: `20px`,
      filter: tool?.dark ? "invert(1)" : "initial",
   };
   return (
      <div className={`Skill`} style={SkillStyles}>
         <ProgressBar
            completed={props.percentage}
            width={props.width}
            showPercentage
         />

         {tool ? (
            <a href={tool.url}>
               <div style={textStyle}>
                  {props.text}
                  <img
                     src={tool.imageURL}
                     style={toolStyle}
                     alt={tool?.name + "'s logo"}
                  />
               </div>
            </a>
         ) : (
            <div style={textStyle}>{props.text}</div>
         )}
      </div>
   );
}
