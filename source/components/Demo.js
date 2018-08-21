import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import RankQR from "./RankQR";

export default class Demo extends Component {
  state = {
    userScore: 0,
  }
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "/static/unity/Build/Build/Build.json",
      "/static/unity/Build/Build/UnityLoader.js"
    );

    this.unityContent.on("SendId", MetaId => { //유니티에서 오는 것
      console.log("Unity id : "+MetaId);
    });

    this.unityContent.on("GameOver",userScore => {  //유니티에서 점수 올 때
      this.setState({userScore: userScore});
    });
  }

  render() {
    return (
      <div>
        <Unity unityContent={this.unityContent} />
        <RankQR id="rankQRCode" value={this.state.userScore}/>
      </div>
    );
  }
}
