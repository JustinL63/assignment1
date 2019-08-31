import React from "react"

const UserInput = (props) => {
    return (
    <div>
        <form>
            <input type="text" placeholder="Name" value={props.name} changed={props.changed}/>
            <br/>
            <input type="text" placeholder="Age" value={props.age} changed={props.changed}/>
            <br/>
            <input type="text" placeholder="Cool Fact" value={props.coolFact} changed={props.changed}/>
            <br/>
            <button onClick={props.changed}>Submit</button>
        </form>
    </div>
    )
}


export default UserInput
