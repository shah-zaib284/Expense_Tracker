// FileName: AddTransaction.js

import React, { useState } from "react";
import styled from "styled-components";

// Styled input with custom placeholder and border
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 15px;
  border: 2px solidrgb(10, 10, 10);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color:rgb(8, 8, 8);
    opacity: 1;
    font-style: italic;
    font-size: 15px;
  }
`;

const Container = styled.div`
  text-align: center;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

const RadioBtn = styled(RadioContainer)`
  margin: 10px 20px 10px 0;
`;

const SubmitBtn = styled.button`
  background-color: #44e610;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #44e610;
  }
`;

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !details) return;
    AddTransactions({
      id: Date.now(),
      amount: Number(amount),
      details,
      transType: type,
    });
    setAmount("");
    setDetails("");
    setToggle(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Enter details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <div style={{ marginBottom: 15 }}>
          <label>
            <input
              type="radio"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            Expense
          </label>
          <label style={{ marginLeft: 15 }}>
            <input
              type="radio"
              value="income"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            Income
          </label>
        </div>
        <SubmitBtn type="submit">
          Add Transaction
        </SubmitBtn>
      </form>
    </Container>
  );
};

export default AddTransaction;