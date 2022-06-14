import PropTypes from "prop-types";
import useRippleEffect from "hooks/useRippleEffect";
import "./Button.css";

const Button = ({ text, ...buttonAttributes }) => {
    const { isActive: rippleIsActive, reportMouseDown, mousePosition } = useRippleEffect();

    const mouseDownHandler = ({ nativeEvent }) => {
        reportMouseDown(nativeEvent);
    };

    return (
        <button onMouseDown={mouseDownHandler} className="btn caps" style={mousePosition} {...buttonAttributes}>
            {text}
            {rippleIsActive && <div className="ripple" />}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
