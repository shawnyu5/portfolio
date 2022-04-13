export default interface IProject {
   title: string;
   description: string;
   url: string;
   image: {
      url: string;
      alt: string;
   };
   techonologies: Array<{
      name: string;
      icon: string;
      url: string;
   }>;
}
