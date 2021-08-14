import React, { useContext } from 'react'
import { GlobalContext } from '../context/Global'

export const Trans = ({transaction}) => {
const { deleteItem } = useContext(GlobalContext)

const sign = transaction.amount < 0 ? '-' : '+';

    return (
    <li className="minus">
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteItem(transaction.id)} className="delete-btn">x</button>
    </li>
    )
}
