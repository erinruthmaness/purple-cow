import { useState, useEffect } from "react";

const BASE_URL = "https://api.countapi.xyz";
const API_NAMESPACE = "";
const API_KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

const endpoints = {
    get: () => `${BASE_URL}/get/${API_NAMESPACE ? API_NAMESPACE + "/" : ""}${API_KEY}`,
    set: (newValue) => `${BASE_URL}/set/${API_NAMESPACE ? API_NAMESPACE + "/" : ""}${API_KEY}?value=${newValue}`,
};

const useCountAPI = () => {
    const [isIdle, setIsIdle] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setIsIdle(false);
            const response = await fetch(endpoints.get());
            const resData = await response.json();
            setCount(resData.value);
            setIsIdle(true);
        };

        fetchData();
    }, []);

    return { isIdle, count };
};

export default useCountAPI;
