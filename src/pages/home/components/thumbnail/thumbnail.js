import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./thumbnail.css";

class Project_Thumbnail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <a href={"./project/" + this.props.data.link}>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 left-thumbnail">
              <h2>{this.props.data.name}</h2>
              <hr />
              <h5>{this.props.data.tags}</h5>
              <h5>{this.props.data.date}</h5>
            </div>

            <div className="col-xl-5 col-md-6 col-sm-12">
              <div id="">
                <img id="" src={this.props.data.mainimg} />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Project_Thumbnail;
