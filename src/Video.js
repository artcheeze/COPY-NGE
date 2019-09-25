import React, { Component } from 'react'
import './Video.css'
class Video extends Component {
  state = {
    audioURL: "",
    videoURL: "",
    playRate: 1
  }

  componentDidMount() {
    var v = document.getElementsByClassName("Video")[0]
    var a = document.getElementsByClassName("Audio")[0]
    a.play();
    v.play();

    a.playbackRate = this.state.playRate;
    v.playbackRate = this.state.playRate;
  }

  componentDidUpdate() {

    var v = document.getElementsByClassName("Video")[0]
    var a = document.getElementsByClassName("Audio")[0]

    this.state.playRate = this.props.pBack;


    a.playbackRate = this.state.playRate;
    v.playbackRate = this.state.playRate;


  }


  seeked(ct) {
    if(!document.fullscreenElement){
    var v = document.getElementsByClassName("Video")[0]
    v.currentTime = ct;
    }
  
  
  }
  seeked2(ct){
    ct.preventDefault()
    if(document.fullscreenElement){
      var a = document.getElementsByClassName("Audio")[0]
      a.currentTime = ct.currentTarget.currentTime;
    }
   
  }
  pp(t) {
    var v = document.getElementsByClassName("Video")[0]
    var a = document.getElementsByClassName("Audio")[0]
    if (t === "play") {
      v.play()
      a.play()
    } else {
      v.pause()
      a.pause()
    }

  }

  render() {
    if(this.props.Selected !== ""){
      this.state.audioURL = "https://streaming-test.sit.kmutt.ac.th/olivvideos/" + this.props.Selected + "/" + this.props.Selected + "/audio_dashinit.mp4"
      this.state.videoURL = "https://streaming-test.sit.kmutt.ac.th/olivvideos/" + this.props.Selected + "/" + this.props.Selected + "/1_video_1000_dashinit.mp4"
    }
 
    return (

      <div className="Player">
        <video className="Video" src={this.state.videoURL} align="center"
          onSeeked={e => this.seeked2(e)}
          onPause={e => this.pp("pause")}
          onPlay={e => this.pp("play")}
        />
        <audio className="Audio"
          onSeeked={e => this.seeked(e.currentTarget.currentTime)}
          onPause={e => this.pp("pause")}
          onPlay={e => this.pp("play")}

          controls
          src={this.state.audioURL}
        />
      </div>


    );
  }
}

export default Video;
