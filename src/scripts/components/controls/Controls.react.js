import React, { Component } from "react";
import ControlClose         from "./ControlClose.react";
import ControlMaximize      from "./ControlMaximize.react";
import ControlMinimize      from "./ControlMinimize.react";

class Controls extends Component {
    render() {
        const WebWindow = nw.Window.get();

        return (
            <div className="app-header-controls controls-container">
                <ControlClose window={WebWindow} />
                <ControlMinimize window={WebWindow} />
                <ControlMaximize window={WebWindow} />
            </div>
        );
    }
}

export default Controls;
