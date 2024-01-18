import React, { useState, useEffect } from "react";

const AmbilDataAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Tambahkan logika untuk mengambil data dari API dan menyimpannya ke dalam state 'data'
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error menambil data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data dari API</h2>
      <ul>
        {/* Tampilkan data dari API di sini */}
        {data.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AmbilDataAPI;
