const googleCloudProvider = {
    async getBookingInfo(bookingId: string) {
      // Mock Google Cloud interaction
      console.log(`Fetching booking info for ${bookingId}`);
      return { bookingId, status: 'confirmed' };
    },
  };
  
  export default googleCloudProvider;
  