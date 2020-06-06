import React from "react";

function Home(props) {
  console.log("Props provided by React Router:");
  console.log(props);
  return <h1>{props.title}</h1>;
}

export default Home;
