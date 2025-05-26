import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/order-page.css";
import DeliveryOptions from "../components/DeliveryOptions";
import RecipientInfo from "../components/RecipientInfo";
import ProductSellerInfo from "../components/ProductSellerInfo";
import OrderSummary from "../components/OrderSummary";
import FeedbackModal from "../components/FeedbackModal"; // The feedback modal component
import { useNavigate } from "react-router-dom"; // Hook for navigation
import { fetchProfileDetails, fetchUserDetails } from "../api/listing";
import { fetchCurrentUserProfile } from "../api/profile";

const OrderPage = () => {
  // State to control the visibility of the feedback modal
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  // Initialize the navigate function for programmatic navigation
  const navigate = useNavigate();

  // Function called when the "Сплатити" button is clicked
  const handlePayClick = () => {
    console.log("Payment initiated!");
    setShowFeedbackModal(true); // Show the feedback modal
  };

  // Function called when the feedback modal is closed (e.g., by clicking "x")
  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false); // Hide the modal
    navigate("/main-page"); // Navigate to the main page
  };

  // Function called when the feedback form inside the modal is submitted
  const handleSubmitFeedback = ({ rating, comment }) => {
    console.log("Feedback Submitted:", { rating, comment });
    // In a real application, you would send this data to your backend API here
    alert("Дякуємо за ваш відгук!"); // Simple confirmation message
    setShowFeedbackModal(false); // Hide the modal after submission
    navigate("/main-page"); // Navigate to the main page
  };

  const location = useLocation();
  const [listing, setListing] = useState(null);
  const [seller, setSeller] = useState(null);
  const [buyerPhone, setBuyerPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Отримуємо дані зі стану навігації або localStorage
        const listingData = location.state?.listing || 
          JSON.parse(localStorage.getItem('currentOrderListing'));
        
        if (!listingData) {
          navigate('/');
          return;
        }

        setListing(listingData);

        // Отримуємо дані продавця
        if (listingData.profileId) {
          const profile = await fetchProfileDetails(listingData.profileId);
          const user = await fetchUserDetails(profile.userId);
          setSeller({ profile, user });
        }

        // Отримуємо телефон покупця
      const userProfile = await fetchCurrentUserProfile();
      if (userProfile && userProfile.userId) {
        const buyerUser = await fetchUserDetails(userProfile.userId);
        if (buyerUser && buyerUser.phoneNumber) {
          setBuyerPhone(buyerUser.phoneNumber);
        } else {
          setBuyerPhone('Номер не вказаний');
        }
      }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [location, navigate]);

  if (loading) return <div className="loading">Завантаження даних...</div>;
  if (error) return <div className="error">Помилка: {error}</div>;
  if (!listing) return <div className="no-data">Дані товару не знайдені</div>;

  return (
    <div className="order-container">
      <div className="order-info">
      <ProductSellerInfo
        productName={listing.title}
        price={`${listing.price} грн`}
          sellerName={seller?.user?.username || 'Продавець'}
          sellerAvatar={seller?.profile?.profileImage?.url}
        productImage={listing.images?.[0]?.url}
      />

      <DeliveryOptions />
      <RecipientInfo phoneNumber={buyerPhone} />
      </div>

      <OrderSummary
        productPrice={`${listing.price} грн`}
        deliveryPrice="За тарифами перевізника"
        totalPrice={`${listing.price} грн`}
      />

      {/* Conditionally render the FeedbackModal based on showFeedbackModal state */}
      {showFeedbackModal && (
        <FeedbackModal
          onClose={handleCloseFeedbackModal} // Pass function to close modal
          onSubmit={handleSubmitFeedback} // Pass function to handle submitted feedback
        />
      )}
    </div>
  );
};

export default OrderPage;
