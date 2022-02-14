import React from "react";
import emailjs from "emailjs-com";

import "./Suggestions.css";

export default function Contact() {
   function sendEmail(e) {
      e.preventDefault();
      const message = e.target.getElementsByTagName("textarea")[0];
      const button = e.target.getElementsByTagName("input")[2]; //[0] == name, [1] == email
      const oldValue = button.value;
      if (oldValue) button.disabled = true;
      if (!message.value.length) {
         button.value = `There's nothing to send... 😔`;
         setTimeout(() => {
            button.disabled = false;
            button.value = oldValue;
         }, 2000);
      } else {
         button.value = `Sending... 😳`;

         emailjs
            .sendForm(
               process.env.REACT_APP_EMAILJS_SERVICE_ID,
               process.env.REACT_APP_TEMPLATE_ID,
               e.target,
               process.env.REACT_APP_USER_ID
            )
            .then(
               (result) => {
                  if (button.value) {
                     button.value = `Thank you 😍`;
                     message.value = "";
                     setTimeout(() => {
                        button.disabled = false;
                        button.value = oldValue;
                     }, 5000);
                  }
                  console.log(e.target);
               },
               (error) => {
                  button.disabled = false;
                  button.value = "Suggestion failed, sorry!";
                  setTimeout(() => {
                     button.value = oldValue;
                  }, 5000);
               }
            );
      }
   }

   return (
      <form className="contact-form" onSubmit={sendEmail}>
         <input type="name" name="name" placeholder={"Name"} />
         <input
            type="email"
            name="reply_to"
            placeholder={"Email"}
            required={true}
         />
         <textarea
            name="message"
            placeholder={"Your Message "}
            rows="4"
            maxLength={200}
         />
         <input type="submit" value="Send " />
      </form>
   );
}
