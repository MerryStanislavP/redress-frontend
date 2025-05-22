export const fetchProfileFeedbacks = async (profileId, page = 1, pageSize = 10) => {
    const response = await fetch(`/api/profile/${profileId}/feedbacks?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
      throw new Error('Не вдалося завантажити відгуки');
    }
    return response.json();
  };