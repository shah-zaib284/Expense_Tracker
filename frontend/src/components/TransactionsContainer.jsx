import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0 25px 0;
  border: 2px solidrgb(10, 10, 10);
  background-color: #fff;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    color:rgb(7, 7, 7);
    opacity: 1;
    font-style: italic;
    font-size: 15px;
  }
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filteredData = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    let filtered = [...transactions];
    filtered = filtered.filter((item) =>
      item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filteredData(searchInput);
  }, [transactions, searchInput]);

  return (
    <Container>
      <Heading>Transactions</Heading>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <TransactionItems>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
