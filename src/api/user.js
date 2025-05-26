import { demoUserData } from '../demoData';
import { demoFavoritesData, getPaginatedData} from '../demoData';

export const fetchUserById = async (id) => {
    if (process.env.REACT_APP_DEMO_MODE === 'true') {
        return new Promise(resolve => {
          setTimeout(() => resolve(demoUserData), 500);
        });
    }
    
    const response = await fetch(`https://localhost:7029/api/User/GetById/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    if (!response.ok) throw new Error('Не вдалося отримати дані користувача');
    return response.json();
  };
  
export const updateUser = async (userData) => {
    if (process.env.REACT_APP_DEMO_MODE === 'true') {
        return new Promise(resolve => {
          setTimeout(() => resolve(userData), 500);
        });
    }
    
    const response = await fetch(`https://localhost:7029/api/User/Update/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    if (!response.ok) throw new Error('Помилка оновлення даних');
    return response.json();
};
  


export const fetchUserFavorites = async (profileId, page = 1, pageSize = 5) => {
  if (process.env.REACT_APP_DEMO_MODE === 'true') {
    return new Promise(resolve => {
      setTimeout(() => resolve(getPaginatedData(demoFavoritesData, page, pageSize)), 500);
    });
  }
  
  const response = await fetch(`https://localhost:7029/api/Favorite/GetUserFavorites?profileId=${profileId}&page=${page}&pageSize=${pageSize}`);
  if (!response.ok) throw new Error('Не вдалося завантажити обрані товари');
  return response.json();
};