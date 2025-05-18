import "../styles/filters.css";
import React, { useState, useEffect } from 'react';

export default function Filters() {
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({});
  const [selectedSubcategories, setSelectedSubcategories] = useState({
    "Одяг": "Увесь одяг",
    "Взуття": "Усе взуття",
    "Аксесуари": "Усі аксесуари",
    "Колір": ["Всі оголошення"],
    "Матеріал": ["Всі оголошення"],
    "Бренд": ["Всі оголошення"]
  });
    const [selectedSizes, setSelectedSizes] = useState({ clothing: [], footwear: [] });
    const mockCategories = [
        {
          name: "Одяг",
          type: "radio",
          selected: "Увесь одяг",
          subcategories: [
            "Не показувати",
            "Увесь одяг",
            "Підкатегорія 1",
            "Підкатегорія 2",
            "Підкатегорія 3",
            "Підкатегорія 4",
            "Підкатегорія 5",
            "Підкатегорія 6",
            "Підкатегорія 7",
            "Підкатегорія 8",
            "Підкатегорія 9",
            "Підкатегорія 10",
            "Підкатегорія 11",
            "Підкатегорія 12",
            "Підкатегорія 13",
            "Підкатегорія 14",
            "Підкатегорія 15",
            "Підкатегорія 16",
            "Підкатегорія 17"
          ]
        },
        {
          name: "Взуття",
          type: "radio",
          selected: "Усе взуття",
          subcategories: [
            "Не показувати",
            "Усе взуття",
            "Підкатегорія A",
            "Підкатегорія B",
            "Підкатегорія C",
            "Підкатегорія D",
            "Підкатегорія E",
            "Підкатегорія F",
            "Підкатегорія G",
            "Підкатегорія H"
          ]
        },
        {
          name: "Аксесуари",
          type: "radio",
          selected: "Усі аксесуари",
          subcategories: [
            "Не показувати",
            "Усі аксесуари",
            "Підкатегорія X",
            "Підкатегорія Y",
            "Підкатегорія Z",
            "Підкатегорія W",
            "Підкатегорія 1",
            "Підкатегорія 2",
            "Підкатегорія 3",
            "Підкатегорія 4",
            "Підкатегорія 5",
            "Підкатегорія 6",
            "Підкатегорія 7"
          ]
      },
      {
        name: "Розмір",
        type: "size",
        clothingSizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "One size"],
        shoeSizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"]
      },
        {
          name: "Колір",
          type: "checkbox",
          selected: ["Всі оголошення"],
          subcategories: [
            "Всі оголошення",
            "Червоний",
            "Синій",
            "Жовтий",
            "Зелений",
            "Чорний",
            "Білий",
            "Сірий",
            "Фіолетовий",
            "Коричневий",
            "Бежевий",
            "Оранжевий",
            "Бірюзовий",
            "Рожевий",
            "Золотий",
            "Срібний",
            "Мультиколір"
          ]
        },
        {
          name: "Матеріал",
          type: "checkbox",
          selected: ["Всі оголошення"],
          subcategories: [
            "Всі оголошення",
            "Бавовна",
            "Льон",
            "Шерсть",
            "Шкіра",
            "Штучна шкіра",
            "Джинс",
            "Поліестер",
            "Шовк",
            "Атлас",
            "Замша",
            "Мереживо",
            "Нейлон",
            "Твід",
            "Фліс",
            "Велюр"
          ]
        },
        {
          name: "Бренд",
          type: "checkbox",
          selected: ["Всі оголошення"],
          subcategories: [
            "Всі оголошення",
            "Nike",
            "Adidas",
            "Zara",
            "H&M",
            "Bershka",
            "Stradivarius",
            "Puma",
            "Reebok",
            "New Balance",
            "Levi’s",
            "Mango",
            "Massimo Dutti",
            "Gucci",
            "Chanel",
            "Louis Vuitton",
            "Prada",
            "Armani",
            "Tommy Hilfiger",
            "Ralph Lauren",
            "Lacoste",
            "Calvin Klein",
            "Versace",
            "Balenciaga",
            "Dolce & Gabbana",
            "The North Face",
            "Columbia",
            "Cropp",
            "Reserved",
            "Pull & Bear",
            "Uniqlo",
            "Under Armour"
          ]
        }
      ];
      
    
    // Для з'єднання з бекендом
// async function fetchCategories() {
//     const response = await fetch('https://localhost:5001/api/categories');
//     if (!response.ok) {
//       throw new Error('Не вдалося завантажити категорії');
//     }
//     return await response.json();
//   }
  

//   useEffect(() => {
//     fetchCategories()
//       .then(data => setCategories(data))
//       .catch(error => console.error(error));
    //   }, []);
    
    useEffect(() => {
        setCategories(mockCategories);
      }, []);
      

    const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
    console.log("openCategories state:", JSON.stringify(openCategories, null, 2));
  };

  const handleSubcategoryChange = (categoryName, subcategoryName, isCheckbox) => {
    setSelectedSubcategories(prev => {
      const prevSelection = prev[categoryName] || (isCheckbox ? [] : '');
      
      if (isCheckbox) {
        // Якщо вибираємо "Всі оголошення"
        if (subcategoryName === "Всі оголошення") {
          return { 
            ...prev, 
            [categoryName]: ["Всі оголошення"] 
          };
        }
        
        // Якщо вибираємо інший чекбокс
        let newSelection;
        if (prevSelection.includes("Всі оголошення")) {
          // Якщо раніше було вибрано "Всі оголошення", видаляємо його
          newSelection = [subcategoryName];
        } else {
          // Інакше додаємо/видаляємо звичайним чином
          newSelection = prevSelection.includes(subcategoryName)
            ? prevSelection.filter(item => item !== subcategoryName)
            : [...prevSelection, subcategoryName];
            
          // Якщо нічого не вибрано, автоматично вибираємо "Всі оголошення"
          if (newSelection.length === 0) {
            newSelection = ["Всі оголошення"];
          }
        }
        
        return { ...prev, [categoryName]: newSelection };
      } else {
        // Логіка для радіокнопок залишається незмінною
        return { ...prev, [categoryName]: subcategoryName };
      }
    });
  };

  const handleSizeToggle = (type, size) => {
    setSelectedSizes(prev => {
      const current = prev[type];
      const newSelection = current.includes(size)
        ? current.filter(s => s !== size)
        : [...current, size];
      return { ...prev, [type]: newSelection };
    });
  };

  // Додаємо стан для ціни
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 50000
  });
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: 50000
  });

  // Обробники для ціни
  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    setInputPrice(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handlePriceBlur = (type) => {
    let value = inputPrice[type];
    
    // Валідація значень
    if (isNaN(value)) {
      value = type === 'min' ? 0 : 50000;
    }
    
    if (type === 'min' && value < 0) value = 0;
    if (type === 'max' && value > 50000) value = 50000;
    if (type === 'min' && value > priceRange.max) value = priceRange.max;
    if (type === 'max' && value < priceRange.min) value = priceRange.min;
    
    setInputPrice(prev => ({
      ...prev,
      [type]: value
    }));
    
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSliderChange = (e, type) => {
    const value = parseInt(e.target.value);
    
    // Запобігаємо перетину повзунків
    if (type === 'min' && value >= priceRange.max) {
      setPriceRange(prev => ({
        min: prev.max - 1,
        max: prev.max
      }));
      setInputPrice(prev => ({
        min: prev.max - 1,
        max: prev.max
      }));
      return;
    }
    
    if (type === 'max' && value <= priceRange.min) {
      setPriceRange(prev => ({
        min: prev.min,
        max: prev.min + 1
      }));
      setInputPrice(prev => ({
        min: prev.min,
        max: prev.min + 1
      }));
      return;
    }
    
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
    setInputPrice(prev => ({
      ...prev,
      [type]: value
    }));
  };
  const resetPrice = () => {
    setPriceRange({ min: 0, max: 50000 });
    setInputPrice({ min: 0, max: 50000 });
  };

  const applyPrice = () => {
    // Тут можна додати логіку застосування фільтра
    console.log("Applied price range:", priceRange);
    // Наприклад, викликати функцію фільтрації з батьківського компоненту
  };

  return (
    <div className="filter-block">
          <div className="filter-title">Для неї</div>
          {categories.map(category => (
              console.log(category.name, category.subcategories),
            <div className="category" key={category.name}>
            <div className="category-header" onClick={() => toggleCategory(category.name)}>
              {category.name}
              <span className="toggle-icon">{openCategories[category.name] ? '-' : '+'}</span>
            </div>
          {openCategories[category.name] && (
            <div className="subcategory-list">
              {category.type === 'radio' && Array.isArray(category.subcategories) && category.subcategories.map(sub => (
                <label key={sub}>
                  <input
                    type="radio"
                    name={category.name}
                    checked={selectedSubcategories[category.name] === sub}
                    onChange={() => handleSubcategoryChange(category.name, sub, false)}
                  />
                  {sub}
                </label>
              ))}
              {category.type === 'checkbox' && Array.isArray(category.subcategories) && category.subcategories.map(sub => (
                <label key={sub}>
                  <input
                    type="checkbox"
                    name={category.name}
                    checked={(selectedSubcategories[category.name] || []).includes(sub)}
                    onChange={() => handleSubcategoryChange(category.name, sub, true)}
                  />
                  {sub}
                </label>
              ))}
              {category.type === 'size' && (
  <>
    {/* <div>Одяг:</div> */}
    <div className="size-buttons">
      {category.clothingSizes.map(size => (
        <button
          key={size}
          className={`size-button ${selectedSizes.clothing.includes(size) ? 'selected' : ''}`}
          onClick={() => handleSizeToggle('clothing', size)}
        >
          {size}
        </button>
      ))}
    </div>
    {/* <div>Взуття:</div> */}
    <div className="size-buttons">
      {category.shoeSizes.map(size => (
        <button
          key={size}
          className={`size-button ${selectedSizes.footwear.includes(size) ? 'selected' : ''}`}
          onClick={() => handleSizeToggle('footwear', size)}
        >
          {size}
        </button>
      ))}
    </div>
  </>
)}

            </div>
          )}
        </div>
          ))}
      {/* Блок фільтрації за ціною */}
      <div className="category">
        <div className="category-header" onClick={() => setIsPriceOpen(!isPriceOpen)}>
          Ціна
          <span className="toggle-icon">{isPriceOpen ? '-' : '+'}</span>
        </div>
        
        {isPriceOpen && (
          <div className="subcategory-list price-filter">
            <div className="price-slider-container">
  <div className="price-slider-line">
    <input
      type="range"
      min="0"
      max="50000"
      value={priceRange.min}
      onChange={(e) => handleSliderChange(e, 'min')}
      className="price-slider min-slider"
    />
    <input
      type="range"
      min="0"
      max="50000"
      value={priceRange.max}
      onChange={(e) => handleSliderChange(e, 'max')}
      className="price-slider max-slider"
    />
  </div>
</div>
            
            <div className="price-inputs">
              <div className="price-input-group">
                <label>від</label>
                <input
                  type="number"
                  value={inputPrice.min}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  onBlur={() => handlePriceBlur('min')}
                  min="0"
                  max={priceRange.max}
                />
              </div>
              
              <div className="price-input-group">
                <label>до</label>
                <input
                  type="number"
                  value={inputPrice.max}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  onBlur={() => handlePriceBlur('max')}
                  min={priceRange.min}
                  max="50000"
                />
              </div>
            </div>
            
            <div className="price-buttons">
              <button onClick={resetPrice} className="price-button reset">
                Скинути
              </button>
              <button onClick={applyPrice} className="price-button apply">
                Застосувати
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
