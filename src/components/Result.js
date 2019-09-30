import React from 'react'

export default function Result({expression, result}) {
    return (
        <div className="calcResult">
            <div className="expression">{ expression }</div>
            <div className="finalResult">{ result }</div>
        </div>
    )
}
