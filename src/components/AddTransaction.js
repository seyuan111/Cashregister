import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/Global'

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addItem } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addItem(newTransaction);
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Item Bought or Sold</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Import Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(put negative for payment)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter"></input>
                </div>
                <button className="btn">Add to transaction</button>
                
            </form>
        </div>
    )
}
