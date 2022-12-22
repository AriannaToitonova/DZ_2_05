import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const NumberPage = () => {

    const dispatch = useDispatch()

    const { result } = useSelector(state => state)

    const oneNumber = (e) =>{
        dispatch({
            type:"NUMBER_ONE",
            payload: e.target.value
        })
    }

    const twoNumber = (e) =>{
        dispatch({
            type:"NUMBER_TWO",
            payload: e.target.value
        })
    }

    const plus = () =>{
        dispatch({
            type: "PLUS"
        })
    }

    const minus = () =>{
        dispatch({
            type: "MINUS"
        })
    }

    const multi = () =>{
        dispatch({
            type: "MULTI"
        })
    }

    const divis = () =>{
        dispatch({
            type:"DIVIS"
        })
    }




    return (
        <>
            <input
                type="number"
                onChange={oneNumber}
                placeholder='one number'
            />
            <input
                type="number"
                onChange={twoNumber}
                placeholder='two number'
            />
            <br />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <br />
            <button onClick={multi}>*</button>
            <button onClick={divis}>/</button>
            <h1>{result}</h1>
        </>
    )
}

export default NumberPage