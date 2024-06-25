import React from "react";

const News = (props) => {
  let trueDive = props.title !== "[Removed]";
  return (
    <>
      {trueDive && (
        <div className="card my-3 mx-3" style={{ width: "18rem" }}>
          <img src={props.url} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.readmore} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
