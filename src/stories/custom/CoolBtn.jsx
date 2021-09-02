import React from "react";
import PropTypes from 'prop-types';

export default function CoolBtn({ label, action, primary, color }) {
    const style = primary ? {
        backgroundColor: "lightblue",
    } : {
        backgroundColor: "red"
    };

    return <button onClick={action} style={Object.assign(style, {
        borderRadius: 20,
        width: 250,
        color: color || "black"
    })}>{label}</button>
}

CoolBtn.propTypes = {
    /**
     *  The button label
     */
    label: PropTypes.string,
    /**
     * The onClick action 
     */
    action: PropTypes.func,
    /**
     * A boolean to switch between two custom styles
     */
    primary: PropTypes.bool,
    /**
     * The button text color
     */
    color: PropTypes.string
}
CoolBtn.defaultProps = {
    action: () => void 0
}