import ButtonComponent from "./button";

const Contact = async () => {
  console.log("Hey, is this in server or client");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  return (
    <div>
      Contact Page
      <ButtonComponent />
    </div>
  );
};

export default Contact;
