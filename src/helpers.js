import { tools } from "./allTools.json";

export function randomRGB(min = 0, max = 255) {
   const r = getRandomInt(min, max);
   const g = getRandomInt(min, max);
   const b = getRandomInt(min, max);
   return `${r} ${g} ${b}`;
}
export function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getAllTools() {
   return tools;
}

export function getToolElement(name, height = 30) {
   const tool = tools.find((t) => t.name.toLowerCase() === name.toLowerCase());
   if (!tool) return;
   let style = {
      paddingLeft: "5px",
      height: `${height}px`,
      filter: tool.dark ? "invert(1)" : "initial",
   };
   return (
      <a href={tool.url}>
         <img src={tool.imageURL} style={style} alt={name + "'s logo"} />
      </a>
   );
}

export function getTool(name) {
   return tools.find((t) => t.name.toLowerCase() === name.toLowerCase());
}

export function convertDate(date) {
   let newDate = new Date(date);
   let month = newDate.getMonth();
   let day = newDate.getDate();
   let year = newDate.getFullYear();
   let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   return `${day} ${months[month]} ${year}`;
}

export default { randomRGB, getRandomInt, convertDate };
