import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the really really BEST home component </div>
      <button
        onClick={() => {
          console.log("Hi there... hydrated much?");
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default Home;
