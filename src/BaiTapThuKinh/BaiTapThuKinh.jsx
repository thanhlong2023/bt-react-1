import React, { Component } from "react";
import css from "./thuKinh.module.css";
import dataGlass from "./dataGlass.json";

export default class BaiTapThuKinh extends Component {
  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlass = () => {
    return dataGlass.map((glass, index) => {
      return (
        <img
          src={glass.url}
          alt={index}
          key={index}
          style={{ width: "110px", cursor: "pointer" }}
          onClick={() => this.changeGlass(glass)}
        />
      );
    });
  };
  changeGlass = (newGlass) => {
    this.setState({
      glassCurrent: newGlass,
    });
  };
  render() {
    let { name, url, desc } = this.state.glassCurrent;
    let style = {
      width: "300px",
      height: "400px",
    };
    let infoGlass = {
      width: "300px",
      height: "100px",
      backgroundColor: "rgba(0, 128, 0, 0.379)",
      top: "356px",
      left: "236px",
      position: "absolute",
    };
    return (
      <div className={css["bg"]}>
        <div className={css["bg-dark"]}>
          <div className="container">
            <h1 className="text-center text-white">Ứng dụng thử kính</h1>
            <div className="row text-center">
              <div className="col-6">
                <div className="model">
                  <img src="./img/model.jpg" alt="" style={style} />
                  <img src={url} alt="" className={css["glass"]} />\
                  <div style={infoGlass}>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./img/model.jpg" alt="" style={style} />
              </div>
            </div>
            <div className="row d-flex pt-5">{this.renderGlass()}</div>
          </div>
        </div>
      </div>
    );
  }
}
