import React from "react";
import { useSelector } from "react-redux";

const Stats = ({ totalBet }) => {
  const { balance } = useSelector((state) => state.user);
  return (
    <>
      <h1>Total amount pledged: {totalBet}</h1>
      <h1>User Balance: {balance}</h1>
    </>
  );
};

export default Stats;
