import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterBIncremented, counterBDecremented } from '../counterB/slice'

export function CounterB() {
    const counter = useSelector((state) => state.counterB)
    const dispatch = useDispatch()
    console.log("render CounterB")
    return (
        <div>
            <h1>counter B</h1>
            <span>{counter.valueB}</span>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(counterBIncremented())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterBDecremented())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}