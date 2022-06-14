import PropTypes from "prop-types"; // ES6

const Button = ({ text, ...buttonAttributes }) => {
    return <button {...buttonAttributes}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
