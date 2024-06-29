import { useState } from "react";
import { details } from "../Utils/expenseData";
import { useNavigate } from "react-router-dom";
const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState();
  const [type, setType] = useState(1);
  const navigate=useNavigate("1");
  const updateTitle=(e)=>{
    setTitle(e.target.value);
  };
  const updateAmount=(e)=>{
    setAmount(e.target.value);
  };
  const updateDate=(e)=>{
    setDate(e.target.value);
  };
  const updateDescription=(e)=>{
    setDescription(e.target.value);
  };
  const updateType = (e) => {
    setType(e.target.value);
  };
//   console.log(
//     `amount:${amount} date:${date} decription:${description} type:${type} title:${title}`
//   );
const specificDetail=details.find((detail)=>detail.id==1);
  const handleFormSubmission = (event) => {
    event.preventDefault();
    details.push({
      id: details.length,
      date: date,
      title: title,
      desc: description,
      type: type,
      currency: amount,
    });
    console.log(details);
    console.log("form added");
  };
  const handleClear = () => {
    setAmount(100);
    setDate();
    setTitle("");
    setDescription("");
    setType("");
  };
  return (
    <div className="layout-container__wrapper">
      <div className="heading">
        <h3>Expense Log</h3>
      </div>
      <hr />
      <form onSubmit={handleFormSubmission} onReset={handleClear}>
        <div className="form-wrap">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            className="form-input"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-wrap">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="form-textarea"
            placeholder="Enter Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-wrap">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            name="amount"
            className="form-input"
            min="0"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flexbox">
          <div className="form-wrap flexbox-child__fb50 pr-5">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-input"
              name="date"
              placeholder="Enter date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-wrap flexbox-child__fb50 pl-5">
            <label htmlFor="type">Select Type</label>
            <select
              className="form-select"
              name="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="1">Credit</option>
              <option value="2">Debit</option>
            </select>
          </div>
        </div>
        <div className="flexbox flexbox-reverse">
          <button className="btn" type="submit">
            <span>Add</span>
          </button>
          <button className="btn mr-5" type="reset">
            <span>Clear</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
