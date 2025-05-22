import SortSelector from "../components/SortSelector";
import "../styles/profile.css";
import React, { useState, useEffect } from 'react';
import RatingComponent from '../components/RatingComponent';
import UserInfoComponent from '../components/UserInfoComponent';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../api/profile';
import ProfileImage from '../components/ProfileImage';
import BioComponent from '../components/BioComponent';
import WalletBalance from '../components/WalletBalance';
import { fetchProfileFeedbacks } from '../api/feedback';
import { FeedbackList } from '../components/FeedbackList';

const sortOptions1 = [
    "За популярністю",
    "Дешевше",
    "Дорожче",
    "За новинками"
  ];

const sortOptions2 = [
    "Мої товари",
    "Відгуки",
    "Гаманець",
    "Обране",
    "Про мене"
];
  
export default function Profile() {
  const { data: profileData, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5, // Дані будуть "свіжими" 5 хвилин
  });
  

    const [sort1, setSort1] = useState(sortOptions1[0]);
      const [sort2, setSort2] = useState(sortOptions2[0]);
    
      const handleReset = () => {
        setSort1(sortOptions1[0]);
        setSort2(sortOptions2[0]);
  };
  
  const navigate = useNavigate();

  if (isLoading) return <div className="loading">Завантаження профілю...</div>;
  if (error) return <div className="error">Помилка: {error.message}</div>;
    
    return (
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap"
            rel="stylesheet"
        />
        {/* <RatingComponent 
        rating={profileData?.averageRating} 
        count={profileData?.ratingCount} 
        status={profileData?.ratingStatus} 
      /> */}

<div className="top-section">
        <ProfileImage imageUrl={profileData?.profileImage?.url} />

        <div className="info-section">
          <span className="username">sxirens</span>

          <RatingComponent />

          <UserInfoComponent 
            createdAt={profileData?.createdAt} 
            location={{ 
              latitude: profileData?.latitude, 
              longitude: profileData?.longitude 
            }} 
          />

          <div className="buttons-wrapper">
            <button className="edit-btn" onClick={() => navigate("/edit-profile-page")}>
              Редагувати профіль
            </button>
            <button className="add-listing-btn" onClick={() => navigate("/ad-form")}>
              Додати оголошення
            </button>
          </div>
        </div>
      </div>
             
        <div className="add-info-list">
        <SortSelector
                  options={sortOptions2}
                  active={sort2}
                  setActive={setSort2}
                  variant="reverse"
                />
          </div>

                

        <div className="line"></div>
        
        {sort2 === "Гаманець" && (
          <div className="content-section">
            <WalletBalance />
          </div>
        )}

        {sort2 === "Про мене" && (
          <div className="content-section">
            <BioComponent text={profileData?.bio} />
          </div>
        )}

        {sort2 === "Мої товари" && (
          <div className="content-section">
            <div className="sort">
            <SortSelector
            options={sortOptions1}
            active={sort1}
            setActive={setSort1}
            variant="default"
          />
          </div>
        </div>
        )}

{sort2 === "Відгуки" && (
          // <div className="content-section">
          //   <FeedbackList profileId={profileId} />
          // </div>
          <div className="content-section">
            <div className="text-wrapper"><p className="text">Тут поки пусто</p></div>
          </div>
        )}

{sort2 === "Обране" && (
          <div className="content-section">
            <div className="text-wrapper"><p className="text">Тут поки пусто</p></div>
          </div>
        )}

        </>
      );
}