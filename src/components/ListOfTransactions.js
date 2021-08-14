import React, { useContext } from 'react'
import { Trans } from './Trans';
import { GlobalContext } from '../context/Global'

export const ListOfTransactions = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Lists of Transactions</h3>
            <ul className="list">
                {transactions.map(transaction => (<Trans key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
