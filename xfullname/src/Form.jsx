import { useState } from "react"

export default function Form() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [fullName, setFullName] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(lName)
        setFullName(fName + " " + lName);
    }

    const changeHandler = (event) => {
        if (event.target.id === "firstName") {
            setFName(event.target.value);
        } else {
            setLName(event.target.value);
        }
    }

    return (
        <>
            <h1>FULL NAME DISPLAY</h1>
            <form onSubmit={(event) => submitHandler(event)}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" required name="firstName" id="firstName" value={fName} onChange={(event) => changeHandler(event)} />
                < br />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" required name="lastName" id="lastName" value={lName} onChange={(event) => changeHandler(event)} />
                <br />
                <button type="submit">Submit</button>
            </form>
            {fullName ? <p>Full Name: ${fullName}</p> : null}
        </>
    )
}