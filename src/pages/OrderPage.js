import React, { useState } from "react";
import "../styles/order-page.css";
import DeliveryOptions from "../components/DeliveryOptions";
import RecipientInfo from "../components/RecipientInfo";
import ProductSellerInfo from "../components/ProductSellerInfo";
import OrderSummary from "../components/OrderSummary";
import FeedbackModal from "../components/FeedbackModal"; // The feedback modal component
import { useNavigate } from "react-router-dom"; // Hook for navigation

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

  return (
    <div className="order-container">
      <div className="order-info">
        <ProductSellerInfo
          productName="Жакет строгий на гудзиках Mango"
          price="880 грн"
          sellerName="ketrin28"
        />

        <DeliveryOptions />
        <RecipientInfo />
      </div>

      <OrderSummary
        productPrice="880 грн"
        deliveryPrice="За тарифами перевізника"
        totalPrice="880 грн"
        onPayClick={handlePayClick} // Pass the function to trigger modal opening
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
