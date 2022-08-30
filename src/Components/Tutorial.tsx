import React from 'react';
import axios from "axios";

const Tutorial = () => {
    async function fetchWords() {
        const response = await axios.get('https://rslang.herokuapp.com/word');
        console.log(response.data);
    }

    fetchWords();
    return (
        <div>
        </div>
    );
};

export default Tutorial;
