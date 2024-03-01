import { useState } from "react";

const EventRegistrationForm = (props) => {
    const [user, setUser] = useState({
        name: ``,
        lastname: ``,
        email: ``,
        number: ``,
        subscribe: false,
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setUser(prevData => ({
            ...prevData, [name]: type === `checkbox` ? checked : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        if(user.name === `` || user.lastname === `` || user.email === `` || user.number === ``) {
            alert(`NE ME ZE!`);
        }
        else {
            document.getElementById(`btn`).style.display = `block`;
            document.getElementById(`test`).style.display = `block`;
            setTimeout(() => {
                document.getElementById(`test`).style.display = `none`;
            }, 3000);
        }
    }

    const handleReset = (e) => {
        setUser({ 
        name: '',
        lastname: '',
        email: '',
        number: '',
        subscribe: false,})
    }

    return <form onSubmit={handleSubmit} onReset={handleReset}>
        <h1>{props.eventName}</h1>
        <div><input type="text" name="name" placeholder="Enter Your Name" value={user.name} onChange={handleChange}></input></div>
        <div><input type="text" name="lastname" placeholder="Enter Your Last Name" value={user.lastname} onChange={handleChange}></input></div>
        <div><input type="text" name="email" placeholder="Enter Your E-mail" value={user.email} onChange={handleChange}></input></div>
        <div><input type="text" name="number" placeholder="Enter Your Phone Number" value={user.number} onChange={handleChange}></input></div>
        <div><input type="checkbox" name="subscribe" id="subscribe" checked={user.subscribe} onChange={handleChange}></input><label htmlFor="subscribe">Subscribe to Newsletter</label></div>
        <div>
            <input type="submit" value="Submit"/>
        </div>
        <div id="test" className="pokazi">
            <h1 className="pokazi">Uspesno poslata forma!</h1>
            <h3>Name: {user.name}</h3>
            <h3>Last Name: {user.lastname}</h3>
            <h3>E-mail: {user.email}</h3>
            <h3>Number: {user.number}</h3>
            <h3>Subscription: {user.subscribe ? `Subscribed` : `Not subscribed`}</h3>
        </div>
        <input type="reset" className="pokazi" id="btn" value={`Popuni opet!`}></input>
    </form>
}

export default EventRegistrationForm;