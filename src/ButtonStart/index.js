import React, { useState, useEffect } from 'react';
import './ButtonStart.css'
import Loading from '../Loading';
import MyComponent from '../MyComponent';


function ButtonStart(){
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading){
        return (
        <>
            <div className='Button-container'>
                <img src='https://i.pinimg.com/originals/49/a2/bb/49a2bb1e7b9a8a376e2dc8f00113c33f.gif'></img>
                <button onClick={() => {
                    setIsLoading(false)
                }}>
                    Presioname :D
                </button>
                <img src='https://i.pinimg.com/originals/8b/a3/ae/8ba3aeda89533098e553bbd2e4cd7e82.gif'></img>
            </div>
        </>
        )
    }else{
        return (
            <>
                <MyComponent></MyComponent>
            </>
        );
    }

}

export default ButtonStart;