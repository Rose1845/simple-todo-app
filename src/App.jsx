import React from "react";

import "./App.css";

function App() {
  // const imageLink="https://v1.tailwindcss.com/img/card-top.jpg"
  return (
    <div className="page-wrapper">
      <div className="card-component">
        <img
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt=""
          className="card-image"
        />
        <div className="card-content">
          <h1 className="card-title">The Coldest Sunset</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            quasi. Quibusdam iste, quidem nihil laborum possimus aperiam
            repellat dolor non totam consequuntur distinctio ducimus obcaecati
            consequatur earum repudiandae sapiente cumque!
          </p>
          <div className="tags">
            <span className="tag">#photography</span>
            <span className="tag">#travel</span>
            <span className="tag">#winter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
