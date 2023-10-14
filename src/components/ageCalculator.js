import { useState } from "react"

function AgeCalculator(props){
    const [age, setAge] = useState(0);

    const calcAge = () => {
        const birthdate = document.getElementById('date');
        const bdateValue = birthdate.value;
        const birthYear = new Date(bdateValue).getFullYear();
        const currYear = new Date().getFullYear();
        const currAge = currYear - birthYear;
        setAge(currAge);
    }
    return <div>

        <input id="date" type="date"></input>
        <button onClick={calcAge}>Calculate</button>
        <p >your age is {age}</p>
    </div>
}

export default AgeCalculator 