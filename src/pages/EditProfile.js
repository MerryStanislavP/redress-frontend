import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProfile } from '../api/profile';
import { fetchUserById, updateUser } from '../api/user';
import ProfileImage from '../components/ProfileImage';
import "../styles/edit-profile.css";

export default function EditProfile() {
    // Отримання даних профілю
    const { data: profileData, isLoading, error } = useQuery({
        queryKey: ['profile'],
        queryFn: fetchProfile,
        staleTime: 1000 * 60 * 5, // Дані будуть "свіжими" 5 хвилин
    });
    
    const { id } = useParams();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Отримання даних користувача
  const { data: userData } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
  });

    // Локальний стан для форми
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    email: userData?.email || '',
    bio: profileData?.bio || '',
    location: profileData?.latitude && profileData?.longitude 
      ? 'Харків' // Тут буде логіка перетворення координат
      : '',
    phone: '' // Додайте це поле до вашого DTO якщо потрібно
  });
    
    // Оновлення даних
  const { mutate: updateUserMutation, isLoading: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['user', id]);
      queryClient.invalidateQueries(['profile']);
      navigate('/profile');
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserMutation({
      id,
      username: formData.username,
        email: formData.email,
        bio: formData.bio,
        location: formData.location
      // Інші поля, які можна оновити
    });
    };
    
    if (isLoading) return <div className="loading">Завантаження профілю...</div>;
    if (error) return <div className="error">Помилка: {error.message}</div>;
    
    return (
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap"
            rel="stylesheet"
            />
            <div className='edit-container'>
                <h2 className='header'>Редагування профілю</h2>

                <form onSubmit={handleSubmit}>
                <div className="info-sections">
    <div className="photo-container">
      <ProfileImage imageUrl={profileData?.profileImage?.url} />
      <button className="edit-photo-btn">Змінити фото профілю</button>
    </div>

    <div className="info-container">
      <h3 className="section-title">Основна інформація</h3>

      <div className="input-group">
        <label htmlFor="username" className="input-label">Нікнейм</label>
        <input type="text" id="username" name="username" className="input-field" value={formData.username}
                onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="location" className="input-label">Місцезнаходження</label>
        <input type="text" id="location" name="location" className="input-field" value={formData.location}
                onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="bio" className="input-label">Про мене</label>
        <textarea
          id="bio"
          name="bio"
          className="input-field textarea-field"
          maxLength="200"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>

    <div className="info-container">
      <h3 className="section-title">Прихована інформація</h3>

      <div className="input-group">
        <label htmlFor="phone" className="input-label">Номер телефону</label>
        <input type="tel" id="phone" name="phone" className="input-field" value={formData.phone}
                onChange={handleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" id="email" name="email" className="input-field" value={formData.email}
                onChange={handleChange} />
      </div>
    </div>
                </div>
                
                <div className='btn-wrapper'>
                    {/* <button className="save-btn" onClick={() => navigate("/profile")}>
              Зберегти
                    </button> */}
                        <button 
            type="submit" 
            className="save-btn"
            disabled={isUpdating}
          >
            {isUpdating ? 'Збереження...' : 'Зберегти'}
          </button>
                </div>
                </form>
                
            </div>
            
            </>
    )
}