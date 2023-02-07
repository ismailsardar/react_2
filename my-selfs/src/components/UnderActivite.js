import React from 'react'

const UnderActivite = () => {

    const ToDo = () => {
        return(
            <div>
                <p>ToDo App Title</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iste.</p>
            </div>
        )
    }

    const ToDo2 = () => {
        return(
            React.createElement("div",{},
            React.createElement("p",{},"ToDo App Title"),
            React.createElement("p",{},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iste.")
            )
        )
    }


  return (
    <>
        <ToDo />
        <br />
        <ToDo2 />
    </>
  )
}

export default UnderActivite