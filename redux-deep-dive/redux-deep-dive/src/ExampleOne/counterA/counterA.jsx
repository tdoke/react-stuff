import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterAIncremented, counterADecremented } from './slice'

export function CounterA() {
    const counter = useSelector((state) => state.counterA);
    const dispatch = useDispatch()
    console.log("render CounterA")
    return (
        <div>
            <h1>counter A</h1>
            <span>{counter.valueA}</span>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(counterAIncremented())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterADecremented())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}