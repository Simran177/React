import React from 'react'

export default function MyComponent1(props) {
    return (
        <div className="Box">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.author}</p>
        </div>
    )
}
