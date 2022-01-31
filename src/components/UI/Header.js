import React from 'react'

const Header = ({text}) => {
    return (
        <h1 style={style}> {text} </h1>
    )
}

const style = {
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',
    WebkitTextStroke: '1px black',
}

export default Header
