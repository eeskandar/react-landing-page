import React from "react"

export const Jumbotron = () => {
    return (
      <div className="row py-5 mt-5">
        <div className="col-lg-11 col-md-11 col-sm-11 mx-auto bg-light rounded-3">
          <div className="px-2 pt-5" style={{fontSize: "70px"}}>A Warm Welcome</div>
          <p className="lead text-muted px-2">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p className="px-2 pb-4">
            <a href="#" className="btn btn-primary my-2">Call to action!</a>
          </p>
        </div>
      </div>
    )
  };