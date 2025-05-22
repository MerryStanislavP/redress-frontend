// components/RecipientInfo.js
import React, { useState } from "react";
import "../styles/recipient-info.css";

const RecipientInfo = () => {
  const [formData, setFormData] = useState({
    lastName: "Сіренко",
    firstName: "Кіра",
    middleName: "Антонівна",
    phone: "+380974567891",
  });

  const [errors, setErrors] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    phone: "",
  });

  const validateLastName = (value) => {
    if (!value.trim()) return "Прізвище обов'язкове";
    if (!/^[А-Яа-яЄєІіЇїҐґ'\s-]+$/.test(value))
      return "Тільки українські літери";
    return "";
  };

  const validateFirstName = (value) => {
    if (!value.trim()) return "Ім'я обов'язкове";
    if (!/^[А-Яа-яЄєІіЇїҐґ'\s-]+$/.test(value))
      return "Тільки українські літери";
    return "";
  };

  const validateMiddleName = (value) => {
    if (value && !/^[А-Яа-яЄєІіЇїҐґ'\s-]*$/.test(value))
      return "Тільки українські літери";
    return "";
  };

  const validatePhone = (value) => {
    if (!value.trim()) return "Телефон обов'язковий";
    if (!/^\+380\d{9}$/.test(value)) return "Формат: +380XXXXXXXXX";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    let error = "";
    switch (name) {
      case "lastName":
        error = validateLastName(value);
        break;
      case "firstName":
        error = validateFirstName(value);
        break;
      case "middleName":
        error = validateMiddleName(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "lastName":
        error = validateLastName(value);
        break;
      case "firstName":
        error = validateFirstName(value);
        break;
      case "middleName":
        error = validateMiddleName(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="recipient-info">
      <span className="v599_70">Отримувач</span>

      <div className="field-group">
        <span className="v599_74">Прізвище:</span>
        <div className="v599_71">
          <input
            type="text"
            className={`v599_72 ${errors.lastName ? "error" : ""}`}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="field-group">
        <span className="v599_82">Ім'я:</span>
        <div className="v599_79">
          <input
            type="text"
            className={`v599_80 ${errors.firstName ? "error" : ""}`}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
      </div>

      <div className="field-group">
        <span className="v599_86">По батькові:</span>
        <div className="v599_83">
          <input
            type="text"
            className={`v599_84 ${errors.middleName ? "error" : ""}`}
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.middleName && (
            <span className="error-message">{errors.middleName}</span>
          )}
        </div>
      </div>

      <div className="field-group">
        <span className="v599_78">Мобільний телефон:</span>
        <div className="v599_75">
          <input
            type="tel"
            className={`v599_76 ${errors.phone ? "error" : ""}`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipientInfo;
