import React, { Component } from "react";
import PropTypes            from "prop-types";
import ReactSVG             from "react-svg";

class AlertsInfo extends Component {
    static propTypes = {
        index   : PropTypes.number.isRequired,
        message : PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="alert-info qilin-panel" style={ { zIndex : this.props.index } }>
                <ReactSVG path="images/icons/alerts/help.svg" className="alert-icon" />

                <div className="alert-message">{this.props.message}</div>
            </div>
        );
    }
}

export default AlertsInfo;
