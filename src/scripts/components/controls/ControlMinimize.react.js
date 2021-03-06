import React, { Component } from "react";
import PropTypes            from "prop-types";

class ControlMinimize extends Component {
    static propTypes = {
        window : PropTypes.object.isRequired
    }

    onClick = () => {
        this.props.window.minimize();
    }

    render() {
        return (
            <div onClick={this.onClick} className="control-minimize" />
        );
    }
}

export default ControlMinimize;
