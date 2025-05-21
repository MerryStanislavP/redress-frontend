import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProfileFeedbacks } from '../api/feedback';
import { useState } from 'react';

const FeedbackItem = ({ feedback }) => {
    return (
        <div className="feedback-item">
            <div className="feedback-header">
                <span className="feedback-rating">Рейтинг: {feedback.rating}/5</span>
                <span className="feedback-date">{new Date(feedback.createdAt).toLocaleDateString()}</span>
            </div>
            {feedback.comment && (
                <div className="feedback-comment">
                    <p>{feedback.comment}</p>
                </div>
            )}
        </div>
    );
};

export const FeedbackList = ({ profileId }) => {
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const { data: feedbacksData, isLoading, error } = useQuery({
        queryKey: ['feedbacks', profileId, page],
        queryFn: () => fetchProfileFeedbacks(profileId, page, pageSize),
        enabled: !!profileId,
    });

    if (isLoading) return <div className="loading">Завантаження відгуків...</div>;
    if (error) return <div className="error">Помилка: {error.message}</div>;
    
    // Якщо немає даних або пустий масив
    if (!feedbacksData?.items || feedbacksData.items.length === 0) {
        return (
            <div className="content-section">
                <div className="text-wrapper"><p className="text">Тут поки пусто</p></div>
            </div>
        );
    }

    return (
        <div className="content-section">
            <div className="feedbacks-container">
                {feedbacksData.items.map(feedback => (
                    <FeedbackItem key={feedback.id} feedback={feedback} />
                ))}
            </div>
            <div className="pagination">
                <button 
                    onClick={() => setPage(p => Math.max(1, p - 1))} 
                    disabled={page === 1}
                >
                    Попередня
                </button>
                <span>Сторінка {page}</span>
                <button 
                    onClick={() => setPage(p => p + 1)} 
                    disabled={!feedbacksData?.hasNextPage}
                >
                    Наступна
                </button>
            </div>
        </div>
    );
};