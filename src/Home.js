import React, { Component } from 'react'
import './Home.css'
import Video from './Video'
import { FaPlus, FaMinus } from 'react-icons/fa';
import Prop from './prop.json'


class Home extends Component {
    state = {
        pback: 1,
        listCourse: [],
        selected: "",
        index: 0
    }

    handlePback(s) {
        if (s === "+") {
            this.setState({ pback: this.state.pback + 0.1 })
        } else {
            if (this.state.pback !== 1) {
                this.setState({ pback: this.state.pback - 0.1 })
            }
        }
    }

    componentDidMount() {
        fetch(Prop.Subject, {
            headers: {
                Authorization: Prop.Token
            }
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error) {
                    this.setState({ listCourse: json })
                } else {
                    alert("ใส่ Token ด้วยยยยยยย")
                }



            })

    }
    Selected(t, i) {
        this.setState({ selected: t, index: i })
    }
    FullScreen() {
        var v = document.getElementsByClassName("Video")[0].webkitRequestFullscreen();
    }
    render() {
        return (

            <div className="Home">
                <div className="VideoBox">
                    <Video pBack={this.state.pback} Selected={this.state.selected} />

                    <div className="PlaybackRate">
                        <div id="index">EP: {this.state.index + 1}</div>
                        <div id="minus" onClick={() => this.handlePback("-")}><FaMinus /></div>
                        <div id="textPback">&nbsp;{this.state.pback.toFixed(1)}x&nbsp;</div>

                        <div id="plus" onClick={() => this.handlePback("+")}><FaPlus /></div>
                        <div id="Fullsc" onClick={() => this.FullScreen()}>Fullscreen</div>
                    </div>

                </div>

                <div className="ScrollList">

                    <div className="BoxA" id="style-3">
                        <h2 style={{ alignSelf: 'flex-start' }}>INT 401</h2>


                        {
                            this.state.listCourse.length !== 0 ?
                                (
                                    this.state.listCourse.map((e, i) => {
                                        var myDate = new Date(e.video_class.start_time);
                                        var time = e.video_class.start_time.substring(0, 10)
                                        return <p key={i} onClick={() => this.Selected(e.name, i)}>{i + 1}&nbsp; Room {myDate.getDay() == 1 ? "B": ""}{myDate.getDay() == 2 ? "A": ""}  | <b>{time}</b>&nbsp;<span style={{ color: 'gray' }}>{e.video_class.room_name}</span></p>


                                    })
                                )
                                :
                                (null)

                        }
                    </div>


                </div>


            </div>


        );
    }
}

export default Home;
