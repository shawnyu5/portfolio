//create a post component and use a hook to get the post data
export default function Post(props) {
   return (
      <a href={props.link}>
         <div className="post">
            <small>{props.date}</small>
            <p>{props.title}</p>
         </div>
      </a>
   );
}
