import axios from 'axios';
import { demoListings } from '../demoData'; // Імпорт демо-функції

const API_BASE_URL = 'https://localhost:7029/api';

// Отримання оголошень за статтю
// export const fetchListingsBySex = async (sex, page = 1, pageSize = 12) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/Listing/by-sex`, {
//       params: {
//         sex: sex.toUpperCase(),
//         page,
//         pageSize
//       }
//     });
//     return {
//       items: response.data.items,
//       totalPages: response.data.totalPages,
//       totalCount: response.data.totalCount
//     };
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Помилка при завантаженні оголошень');
//   }
// };


// Демо-функція для імітації API
const demoFetchListings = async (sex, page = 1, pageSize = 12) => {
    await new Promise(resolve => setTimeout(resolve, 300)); // Імітація затримки
    
    // Генеруємо великий набір демо-даних (60 товарів)
    const generateDemoItems = () => {
      const items = [];
      const categories = {
        'Male': ['Костюм', 'Сорочка', 'Штани', 'Піджак', 'Куртка'],
        'Female': ['Сукня', 'Блузка', 'Спідниця', 'Кофта', 'Пальто'],
        'Child': ['Комбінезон', 'Футболка', 'Шорти', 'Світшот', 'Плащ']
      };
      
      const currentCategory = sex === 'male' ? 'Male' : 
                            sex === 'female' ? 'Female' : 'Child';
      
      for (let i = 0; i < 60; i++) {
        const categoryItems = categories[currentCategory];
        const itemName = categoryItems[i % categoryItems.length];
        
        items.push({
          id: `${i+1}a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d`,
          title: `${itemName} ${currentCategory.toLowerCase()} ${i+1}`,
          price: Math.floor(Math.random() * 10000) + 2000,
          isAuction: Math.random() > 0.7
        });
      }
      
      return items;
    };
  
    const allItems = generateDemoItems();
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = allItems.slice(startIndex, endIndex);
  
    return {
      items: paginatedItems,
      totalPages: Math.ceil(allItems.length / pageSize),
      totalCount: allItems.length
    };
  };

// Отримання оголошень за статтю
export const fetchListingsBySex = async (sex, page = 1, pageSize = 12) => {
  // Якщо DEMO_MODE увімкнено — повертаємо демо-дані
  if (process.env.REACT_APP_DEMO_MODE === 'true') {
    return demoFetchListings(sex, page, pageSize);
  }

  // Інакше — реальний запит до API
  try {
    const response = await axios.get(`${API_BASE_URL}/Listing/by-sex`, {
      params: {
        sex: sex.toUpperCase(),
        page,
        pageSize
      }
    });

    return {
      items: response.data.items,
      totalPages: response.data.totalPages,
      totalCount: response.data.totalCount
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Помилка при завантаженні оголошень');
  }
};


// Демо-функція для зображень
const demoFetchListingImages = async (listingId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const demoImages = {
      '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d': [
        { id: 'img1', url: '../images/main-page/v30_108.png' }
      ],
      '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e': [
        { id: 'img2', url: '../images/main-page/v30_108.png' }
      ]
    };
    return demoImages[listingId] || [];
  };
  
  export const fetchListingImages = async (listingId) => {
    if (process.env.REACT_APP_DEMO_MODE === 'true') {
      return demoFetchListingImages(listingId);
    }
  
    try {
      const response = await axios.get(`${API_BASE_URL}/ListingImage/${listingId}`);
      return response.data.items || [];
    } catch (error) {
      throw new Error('Помилка при завантаженні зображень');
    }
  };

// Отримання деталей оголошення (дата створення)
export const fetchListingDetails = async (listingId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Listing/${listingId}`);
    return response.data;
  } catch (error) {
    throw new Error('Помилка при завантаженні деталей оголошення');
  }
};