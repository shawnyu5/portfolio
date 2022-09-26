export default interface IProject {
   title: string;
   description: string;
   image: {
      url: string;
      alt: string;
   };
   techonologies: Array<{
      name: string;
      icon: string;
      url: string;
   }>;
   buttons: Array<{
      text: string;
      link: string;
   }>;
}
