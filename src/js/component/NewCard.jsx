import React from "react"

export const NewCard = () => {
    return (
      <div className="card mb-5" style={{width:"400px"}}>
        <img src="https://picsum.photos/300/300" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    )
  };