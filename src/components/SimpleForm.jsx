import React, { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    // Tambahkan logika untuk menyimpan nilai input
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tambahkan logika untuk menanggapi pengiriman formulir
    inputValue;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input: <span> </span>
          <input
            className="border"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button className="btn-blue" type="submit">
          Kirim
        </button>
      </form>
      <p>Nilai Input: {inputValue}</p>
    </div>
  );
};

export default SimpleForm;
