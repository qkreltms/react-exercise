import React, { Component } from "react";
import Webcam from "react-webcam";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrennshot: null
    };

    this.videoConstraints = {
      width: 0,
      height: 0,
      facingMode: "user"
      // facingMode: { exact: "environment" }
    };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    setInterval(() => {
      const screenshot = this.webcam.getScreenshot();
      this.setState({ screenshot });
    }, 2000);
  };

  webcamErrHandler = (err) => {
    console.log(err);
  }

  render() {
    return (
      <React.Fragment>
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={this.videoConstraints}
          ref={this.setRef}
          width="500"
          height="500"
          onUserMediaError={this.webcamErrHandler}
          scrennshotQuality={0.5}
          // style={{
          //   height: "100vh",
          //   width: "100%",
          //   objectFit: "fill",
          //   position: "absolute"
          // }}
        />
        {this.capture()}
        {this.state.screenshot ? (
          <img alt="img" src={this.state.screenshot} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
