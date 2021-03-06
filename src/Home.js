import React, { Component } from 'react'
import './css/Home.css'
import Video from './Video'
import { FaPlus, FaMinus } from 'react-icons/fa';
import Prop from './prop.json'


class Home extends Component {
    state = {
        pback: 1,
        listCourse: [],
        selected: "",
        nameCourse: "NONE",
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
        fetch('https://learning.sit.kmutt.ac.th/api/videos/list?academic_year=2562&all=true&semester=1&semester_id=16&subject_id='+Prop.SubjectID+'&type=class_record', {
            headers: {
                Authorization: Prop.Token
            }
        })
            .then(res => res.json())
            .then(json => {
                if (!json.error && json.length!== 0) {
                
                    this.setState({selected:json[0].name })
                    this.setState({ listCourse: json })
                    this.setState({nameCourse: json[0].video_class.subject_code})
                } else {
                    alert("ใส่ Token ด้วยยยยยยย หรือ ถ้าใส่แล้วอาจจะเป็นเพราะว่าวิชานั้นไม่มีเนื้อหา")
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

            <div className="Home animated fadeInDown">
                <div className="VideoBox ">
                    <Video pBack={this.state.pback} Selected={this.state.selected} />

                    <div className="PlaybackRate">
                        <div id="index">EP: {this.state.index + 1}</div>
                        <div id="minus" onClick={() => this.handlePback("-")}><FaMinus /></div>
                        <div id="textPback">&nbsp;{this.state.pback.toFixed(1)}x&nbsp;</div>

                        <div id="plus" onClick={() => this.handlePback("+")}><FaPlus /></div>
                        <div id="Fullsc" onClick={() => this.FullScreen()}>Fullscreen</div>
                    </div>

                </div>

                <div className="ScrollList ">

                    <div className="BoxA" id="style-3">
                        <h2 style={{ alignSelf: 'flex-start' }}>{this.state.nameCourse}</h2>


                        {
                            this.state.listCourse.length !== 0 ?
                                (
                                    this.state.listCourse.map((e, i) => {
                                        var myDate = new Date(e.video_class.start_time);
                                        var time = e.video_class.start_time.substring(0, 10)
                                        return <p key={i} onClick={() => this.Selected(e.name, i)}>{i + 1}&nbsp; {this.state.nameCourse == "INT401" ? "Room" : null  } {myDate.getDay() == 1 ? "B": ""}{myDate.getDay() == 2 ? "A": ""}  | <b>{time}</b>&nbsp;<span style={{ color: 'gray' }}>{e.video_class.room_name}</span></p>


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
