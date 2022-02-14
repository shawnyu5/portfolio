import "./Navbar.css";
import { RiNewspaperLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import NewProject from "../../pages/NewProject/NewProject";

export default function Navbar() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(() => {
      if (document.cookie.includes("PHPSESSID")) {
         setIsLoggedIn(true);
      }
   }, []);

   const [blogURL, setBlog] = useState([]);
   useEffect(() => {
      fetch("data/about.json").then((res) =>
         res.json().then((r) => {
            setBlog(r.blogURL || null);
         })
      );
   }, []);

   const [showModal, setShowModal] = useState(false);

   return (
      <nav>
         <div id="links">
            <a href="/#">
               <div>Home</div>
            </a>
            <a href="/#portfolio">
               <div>Projects</div>
            </a>
            <a href="/#contact">
               <div>Contact</div>
            </a>
         </div>
         {blogURL ? (
            <a href={blogURL}>
               <div id="blog" className={"primary"}>
                  Blog <RiNewspaperLine />
               </div>
            </a>
         ) : (
            ""
         )}

         {isLoggedIn
            ? [
                 <a href="/php/logout.php">
                    <div id="logout" className={"primary"}>
                       Logout
                    </div>
                 </a>,
                 <a
                    id="new"
                    className={"primary"}
                    onClick={() => setShowModal(true)}
                 >
                    New Project
                 </a>,
                 <NewProject
                    setShowModal={setShowModal}
                    showModal={showModal}
                 />,
              ]
            : [
                 <a href="/php/login.php">
                    <div id="login" className={"primary"}>
                       Login
                    </div>
                 </a>,
              ]}
      </nav>
   );
}
