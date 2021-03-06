import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'



const ExpenseListItem = ({description,amount,createdAt,id}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>
        ₹
        {numeral(amount).format('0,0.00')} 
        - 
        {moment(createdAt).format('Do MMM, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem