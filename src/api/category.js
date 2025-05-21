// import {
//     parentCategories,
//     demoCategoriesFemale,
//     demoCategoriesMale,
//     demoCategoriesKids
//   } from '../demoData';
  
//   export const fetchParentCategories = async () => {
//     if (process.env.REACT_APP_DEMO_MODE === 'true') {
//       return new Promise(resolve => resolve(parentCategories));
//     }
//     // Реальний запит для батьківських категорій
//   };
  
//   export const fetchSubcategoriesBySex = async (sex) => {
//     if (process.env.REACT_APP_DEMO_MODE === 'true') {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           switch (sex) {
//             case 'female': resolve(demoCategoriesFemale);
//             case 'male': resolve(demoCategoriesMale);
//             case 'kids': resolve(demoCategoriesKids);
//             default: resolve([]);
//           }
//         }, 300);
//       });
//     }
    
//     const response = await fetch(`https://localhost:7029/api/Category/GetBySex/${sex}`);
//     if (!response.ok) throw new Error('Не вдалося отримати категорії');
//     return response.json();
//   };

import { demoParentCategories, demoSubcategories } from '../demoData';

export const fetchParentCategories = async () => {
  if (process.env.REACT_APP_DEMO_MODE === 'true') {
    return new Promise(resolve => resolve(demoParentCategories));
  }
  const response = await fetch('https://localhost:7029/api/Category/parent-categories');
  if (!response.ok) throw new Error('Не вдалося отримати батьківські категорії');
  return response.json();
};

export const fetchSubcategoriesBySex = async (sex) => {
  if (process.env.REACT_APP_DEMO_MODE === 'true') {
    return new Promise(resolve => {
      setTimeout(() => resolve(demoSubcategories[sex] || []), 300);
    });
  }
  const response = await fetch(`https://localhost:7029/api/Category/GetBySex/${sex}`);
  if (!response.ok) throw new Error('Не вдалося отримати підкатегорії');
  return response.json();
};