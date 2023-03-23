import React from "react";

const Hello = props => {
    const {employeeName} = props
    return <div><h3>Hello {employeeName}</h3></div>
}

export default Hello