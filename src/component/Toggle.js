// import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle({ toggled, onClick }) {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
      <div className="btn1">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
}
