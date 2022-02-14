export default function InfoBox(props) {
   const InfoBoxStyles = {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      maxWidth: `${props.width || "350px"}`,
      border: "solid 1px var(--border-color)",
   };
   const titleStyles = {
      padding: "5px",
      fontSize: 30,
      borderBottom: "solid 1px var(--border-color)",
      paddingTop: props.label ? 0 : "5px",
      fontWeight: "600",
   };
   const textStyles = {
      padding: "5px",
      fontWeight: "300",
   };
   const labelStyles = {
      padding: "5px",
      paddingBottom: 0,
      fontWeight: 300,
      color: "#8e8e8e",
   };

   return (
      <div className={"InfoBox"} style={InfoBoxStyles}>
         <div id={"titleBox"}>
            {props.label ? (
               <div id={"label"} style={labelStyles}>
                  {props.label}
               </div>
            ) : (
               ""
            )}
            <div id={"infoBox-title"} style={titleStyles}>
               {props.title}
            </div>
         </div>
         <div id={"textBox"} style={textStyles}>
            {props.text}
         </div>
      </div>
   );
}
