import React from "react";

function Suggested({ suggestions }) {
  return (
    <div>
      {suggestions &&
        suggestions.map((item) => {
          return (
            <span>
              {item.name}
              <br /> <br />
              {item.title}
              <br /> <br />
              {item.image}
              <br /> <br />
              {item.description}
              <br /> <br />
              <br /> <br />
              <br /> <br />
              <br /> <br />
            </span>
          );
        })}
    </div>
  );
}

export default Suggested;
