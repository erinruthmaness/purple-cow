import { useState, useEffect } from "react";

const useRippleEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    const reportMouseDown = ({ offsetX, offsetY }) => {
        if (!isActive) {
            if (offsetX !== mousePosition.x || offsetY !== mousePosition.y) {
                setMousePosition({ x: offsetX, y: offsetY });
                setIsActive(true);
            }
        }
    };

    useEffect(() => {
        let animationEndTimer = setTimeout(() => setIsActive(false), 600);

        return () => {
            clearTimeout(animationEndTimer);
        };
    }, [isActive]);

    return {
        isActive,
        mousePosition: isActive ? { "--x": `${mousePosition.x}px`, "--y": `${mousePosition.y}px` } : {},
        reportMouseDown,
    };
};

export default useRippleEffect;
