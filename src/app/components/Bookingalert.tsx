import React from 'react';

type BookingAlertProps = {
  message: string;
};

const BookingAlert: React.FC<BookingAlertProps> = ({ message }) => {
  return (
    <div className="booking-alert">
      <p>{message}</p>
    </div>
  );
};

export default BookingAlert;
