import "../styles/ad-form.css";
import ColorOptions from "../components/ColorOptions";
import CategoryModal from "../components/CategoryModal";
import AdType from "../components/AdType";
import BrandSelector from "../components/BrandSelector";
import React, { useState } from "react";

export default function AdFormPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectCategory = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setIsModalOpen(false);
  };

  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <main>
      <div className="container">
        <span className="ad-description">
          Якісно заповнене оголошення підвищує вірогідність продажу вашого
          товару
        </span>
        <span className="ad-description-text">Додайте фото товару </span>
        <span className="ad-description-text-1">
          Рекомендована кількість від трьох фото*
        </span>
        <div className="container-btn">
          <span className="text-btn">Перейти до завантаження фотографій</span>
        </div>
        <span className="ad-description-text-2">Опишіть вашу річ</span>
        <span className="ad-description-text-3">Назва (українською мовою)</span>
        <input
          type="text"
          className="input-line"
          maxLength={200}
          placeholder="Введіть назву"
        />
        <span className="ad-description-text-4">Опис (українською мовою)*</span>
        <textarea
          className="input-line-1"
          placeholder="Опишіть річ"
          maxLength={500}
        />
        <span className="ad-description-text-5">Виберіть розділ</span>
        <div className={`container ${isModalOpen ? "blurred" : ""}`}>
          {!selectedCategory ? (
            <div className="sections-wrapper">
              <div
                className="section-container"
                onClick={() => handleSectionClick("Вона")}
              >
                <div className="icon-common women"></div>
                <span className="section-text">Вона</span>
              </div>
              <div
                className="section-container"
                onClick={() => handleSectionClick("Він")}
              >
                <div className="icon-common men"></div>
                <span className="section-text">Він</span>
              </div>
              <div
                className="section-container"
                onClick={() => handleSectionClick("Діти")}
              >
                <div className="icon-common kids"></div>
                <span className="section-text">Діти</span>
              </div>
            </div>
          ) : (
            <div className="sections-wrapper">
              <div
                className="section-container selected"
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedSubcategory("");
                  setSelectedSection("");
                }}
              >
                <span className="change-text">Змінити</span>
                <div
                  className={`icon-common ${
                    selectedSection === "Вона"
                      ? "women"
                      : selectedSection === "Він"
                      ? "men"
                      : "kids"
                  }`}
                ></div>
                <span className="section-text">{selectedSection}</span>
                <div className="selected-subcategory-text">
                  {selectedCategory} / {selectedSubcategory}
                </div>
              </div>
            </div>
          )}
        </div>

        {isModalOpen && (
          <CategoryModal
            section={selectedSection}
            onClose={closeModal}
            onSelect={handleSelectCategory}
          />
        )}

        <span className="ad-description-text-6">Бренд*</span>
        <BrandSelector
          selectedBrand={selectedBrand}
          onSelect={(brand) => setSelectedBrand(brand)}
        />
        <span className="ad-description-text-7">Виберіть до 2 відтінків</span>
        <ColorOptions />
        <span className="ad-description-text-8">Вкажіть ціну</span>
        <div className="pay-container">
          <div className="pay-container-block">
            <input
              type="text"
              className="price-input"
              placeholder="Введіть суму"
              // для управления состоянием можно добавить value и onChange, если нужно
            />
            <span className="currency-label">грн</span>
          </div>
          <div className="icon-money"></div>
          <span className="pay-text">Оплата</span>
        </div>
        <span className="ad-description-text-9">Оберіть тип оголошення</span>
        <AdType />
        <div className="btn-container">
          <span className="btn-text">Завантажити оголошення</span>
        </div>
      </div>
    </main>
  );
}
