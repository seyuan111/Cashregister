import React, { useContext } from 'react'
import { GlobalContext } from '../context/Global'

export const Sold = () => {
const { transactions } = useContext(GlobalContext);
const amounts = transactions.map(transaction => transaction.amount)

const refund = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2)

const payment = (amounts.filter(item => item <0).reduce((acc,item) => (acc += item),0) * -1).toFixed(2);

    return (
        <div className="sold-owe-container">
            <div>
                <h5>Refunded</h5>
                <p className="money plus">{refund}</p>
            </div>
            <div>
                <h5>Payment</h5>
                <p className="money minus">{payment}</p>
            </div>
        </div>
    )
}
