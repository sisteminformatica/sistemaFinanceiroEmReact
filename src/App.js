import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [entradas, setIncome] = useState(0);
  const [saidas, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));      

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const saidas = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entradas = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(entradas - saidas).toFixed(2);

    setIncome(`R$ ${entradas}`);
    setExpense(`R$ ${saidas}`);
    setTotal(`${Number(entradas) < Number(saidas) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume entradas={entradas} saidas={saidas} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;