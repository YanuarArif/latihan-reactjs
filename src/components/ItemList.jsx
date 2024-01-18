import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    // Tambahkan logika untuk menambahkan newItem ke dalam daftar items
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    // Tambahkan logika untuk menghapus item dari daftar berdasarkan index
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Daftar Item</h2>
      <label>
        Input:<span> </span>
        <input
          className="border"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <button className="btn-blue" onClick={addItem}>
        Kirim
      </button>

      {/* List Items yang ditambahkan */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="btn-blue" onClick={() => removeItem(index)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
