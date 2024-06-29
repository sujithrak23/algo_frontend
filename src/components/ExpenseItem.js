import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExpenseItem = ({ detail }) => {
  console.log('ExpenseItem Details:', detail); // Check if details are correctly received

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <li className="a">
      <div className="ab">
        <div className="flexbox flexbox-column flexbox-align-center date">
          <div className="month">
            {monthNames[new Date(detail.date).getMonth()]}
          </div>
          <div className="day">{new Date(detail.date).getDate()}</div>
        </div>
        <div className="ab">
          <h3 className="title">{detail.title}</h3>
          <span className="type-pill">
            {detail.type === 1 ? "Credit" : "Debit"}
          </span>
        </div>
      </div>
      <div className="ab">
        <div className="pill">{detail.currency}</div>
        <button className="actions">
        <span className="material-icons edit">edit</span>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </button>
        <button className="actions">
        <span className="material-icons delete">delete</span>
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;