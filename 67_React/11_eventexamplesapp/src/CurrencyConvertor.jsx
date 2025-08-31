import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const euroRate = 0.011; // Example rate
    const result = parseFloat(amount) * euroRate;
    alert(`₹${amount} is approximately €${result.toFixed(2)}`);
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:{" "}
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Currency:{" "}
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
