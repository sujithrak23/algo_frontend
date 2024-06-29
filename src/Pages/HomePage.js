
import React from 'react';
import ExpenseItem from '../components/ExpenseItem'; 
import { details } from './../Utils/expenseData'; 

export const HomePage = () => {
    return (
      <div className="layout-container__wrapper">
        <div className="flexbox flexbox-justify-between flexbox-align-baseline">
          <h3>Expenses</h3>
          <span className="pill info">INR 770</span>
        </div>
        <hr />
        <div className="layout-container__expenses">
          <ul>
          {details.map(i=><ExpenseItem detail={i}/>)}
          </ul>
        </div>
      </div>
    );
  };
  
  export default HomePage;
