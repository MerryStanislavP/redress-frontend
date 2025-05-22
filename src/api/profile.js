import { demoProfileData } from '../demoData';

export const fetchProfile = async () => {
  // Для демо-режиму - повертаємо фейкові дані
  if (process.env.REACT_APP_DEMO_MODE === 'true') {
    return new Promise(resolve => {
      setTimeout(() => resolve(demoProfileData), 500); // Імітуємо затримку мережі
    });
  }

  // Реальний запит до бекенду
  const response = await fetch("https://localhost:7029/api/Profile/user", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (!response.ok) throw new Error('Не вдалося отримати дані профілю');
  return response.json();
};