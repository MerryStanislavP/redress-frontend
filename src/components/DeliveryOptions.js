// components/DeliveryOptions.js
import React, { useState } from "react";
import "../styles/delivery-options.css";

const deliveryOptions = [
  { id: "ukrposhta", label: "Самовивіз з Укр пошти" },
  { id: "nova-poshta-machine", label: "Самовивіз з поштомата Нової пошти" },
  { id: "nova-poshta", label: "Самовивіз з Нової пошти" },
  { id: "seller", label: "Самовивіз від продавця" },
];

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <div>
      <span className="v599_53">Доставка</span>
      <div className="v599_55">
        {deliveryOptions.map((option) => (
          <div key={option.id} className="delivery-option">
            <label>
              <input
                type="radio"
                name="delivery"
                checked={selectedOption === option.id}
                onChange={() => handleRadioChange(option.id)}
              />
              {option.label}
            </label>
            {selectedOption === option.id && (
              <input
                type="text"
                placeholder="Введіть номер відділення"
                className="delivery-input"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptions;
