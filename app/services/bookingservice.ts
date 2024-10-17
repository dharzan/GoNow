const bookingService = {
    async createBookingAlert(user: string, message: string) {
      const response = await fetch('/api/booking/alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, message }),
      });
      return response.json();
    },
  };
  
  export default bookingService;
  