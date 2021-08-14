import React, { useContext } from 'react'
import { GlobalContext } from '../context/Global'

export const Total = () => {
const { transactions } = useContext(GlobalContext);

const amounts = transactions.map(transaction => transaction.amount)
const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
    return (
        <div>
            <h4>Total Cost of Item</h4>
            <h5>${total}</h5>
        </div>
    )
}
