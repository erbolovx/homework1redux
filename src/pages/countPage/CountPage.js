import React from 'react';
import {useDispatch, useSelector} from "react-redux";
const CountPage = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const clickCounter = (num)=> {
        dispatch({
            type: 'COUNTER',
            payload: num
        })
    }
    const counterDelete = () => {
        dispatch({
            type:'DELETE'
        })
    }
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={()=> clickCounter(+1)}>+1</button>
            <button onClick={()=> clickCounter(-1)}>-1</button>
            <button onClick={()=> clickCounter(+10)}>+10</button>
            <button onClick={()=> clickCounter(-10)}>-10</button>
            <button onClick={counterDelete}>Удалить</button>
        </div>
    );
};

export default CountPage;