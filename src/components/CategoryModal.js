import React, { useState } from "react";
import "../styles/category-modal.css";

export default function CategoryModal({ section, onClose, onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState("Одяг");
  const categories = ["Одяг", "Взуття", "Аксесуари"];
  const subcategories = Array.from(
    { length: 10 },
    (_, i) => `Підкатегорія ${i + 1}`
  );

  const handleClick = (subcategory) => {
    onSelect(selectedCategory, subcategory); // передаємо вибір у AdFormPage
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="category-list">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`category-item ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="subcategory-placeholder">
          <p>
            <strong>{section}</strong> / <strong>{selectedCategory}</strong>
          </p>
          <div className="subcategory-buttons">
            {subcategories.map((sub, index) => (
              <button
                key={index}
                className="subcategory-btn"
                onClick={() => handleClick(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <button className="close-modal-btn" onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
}
