import "./Error404.css";
export default function error404(props) {
   return (
      <div id="Error404">
         <h1 style={{ fontSize: "120px" }}>404</h1>
         <a href="/">
            <p>{props.message || "You are not supposed to be here 🙄"}</p>
         </a>
      </div>
   );
}
