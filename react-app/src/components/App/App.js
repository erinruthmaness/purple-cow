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
        <main className="card">
            <Button text={isCountRevealed ? "Hide Hit Count" : "Reveal Hit Count"} onClick={clickHandler} />
            {isCountRevealed ? (
                <p className="content">
                    The count is: <span className={"caps"}>{count}</span>
                </p>
            ) : (
                <div className="placeholder" />
            )}
        </main>
    );
};

export default App;
