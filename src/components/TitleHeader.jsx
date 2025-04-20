import React from 'react'

const TitleHeader = ({title}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="font-semibold md:text-5xl text-4xl text-center">{title}</div>
        </div>
    )
}
export default TitleHeader
