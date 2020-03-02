import React, {useState} from 'react';
import "./styles.css"

export default function App() {
    const [randNumArr, setRandNumArr] = useState([])

    function addNumber() {
        let randNum = Math.floor(Math.random() * 100);
        setRandNumArr([...randNumArr, randNum])
    }

    function removeNumber() {
        let newArr = randNumArr;
        newArr.pop();
        setRandNumArr([...newArr]); // if just replace the array, won't refresh screen
    }

    return (
        <div>
            <button onClick={addNumber}>add number</button>
            <button onClick={removeNumber}>remove number</button>
            {
            randNumArr.map((number, i) => {
                return (
                    <p key={i}>{number}</p>
                    )
                })
            }
        </div>
    )
}