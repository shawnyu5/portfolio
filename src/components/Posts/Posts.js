import Post from "./Post";
import "./Posts.css";
import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { convertDate } from "../../helpers";

export default function Posts(props) {
   const [posts, setPosts] = useState(null);
   useEffect(() => {
      fetch("https://blog.ahmadz.ai/@rehman/posts", {
         method: "GET",
         redirect: "follow",
      })
         .then((response) => response.json())
         .then((data) => setPosts(data.slice(0, 3)))
         .catch((error) => console.log("error", error));
   }, []);

   return posts ? (
      <div className="posts" style={props.style}>
         <h2>Latest Posts</h2>
         <div className={"post-container"}>
            {posts.map((post) => (
               <Post
                  link={"https://blog.ahmadz.ai/" + post.slug}
                  title={post.title}
                  date={convertDate(post.created_on)}
               />
            ))}
         </div>
         <a
            href={"https://blog.ahmadz.ai/@rehman"}
            target={"_blank"}
            rel="noreferrer"
         >
            <button
               style={{
                  width: "100%",
                  padding: "10px",
                  placeContent: "center",
                  border: "1px solid var(--border-color)",
               }}
            >
               View More <FiExternalLink size={30} />
            </button>
         </a>
      </div>
   ) : (
      <div>Loading</div>
   );
}
