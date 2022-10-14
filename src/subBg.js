import { useState } from "react";

export default function subBg {
    return(
    <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/subBg01.jpg"}
              width="80%"
              className="subBg01"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/subBg02.jpg"} width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/subBg03.jpg"} width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
          )
          
  }
  