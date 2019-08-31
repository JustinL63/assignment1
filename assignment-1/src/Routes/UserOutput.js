import React from "react"

const UserOutput = (props) => {
    return(
    <div>
        <p>My name is {props.name} !</p>
        <p>I am {props.age} years old.</p>
        <p>An interesting fact about me is that I {props.coolFact}</p>
    </div>
    )
}

export default UserOutput