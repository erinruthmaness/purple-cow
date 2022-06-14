import { useState } from "react";
import useCountAPI from "hooks/useCountAPI";
import Button from "components/Button";
import "./App.css";

const App = () => {
    const [isCountRevealed, setIsCountRevealed] = useState(false);
    const { count } = useCountAPI();

    const clickHandler = () => {
        setIsCountRevealed((prevCount) => !prevCount);
    };

    return (
        <div className="App">
            <Button text="Reveal Hit Count" onClick={clickHandler} />
            {isCountRevealed && <span>The count is {count}!</span>}
        </div>
    );
};

export default App;
