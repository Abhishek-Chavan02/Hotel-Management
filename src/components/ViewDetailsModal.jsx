import React from 'react';

const ViewDetailsModal = ({ hotel, onClose }) => {
  if (!hotel) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/75 z-50">
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Hotel Details</h3>
          <div className="mb-4">
            <strong>Owner Name:</strong> {hotel.ownerName}
          </div>
          <div className="mb-4">
            <strong>Hotel Name:</strong> {hotel.name}
          </div>
          <div className="mb-4">
            <strong>Address:</strong> {hotel.address}
          </div>
          <div className="mb-4">
            <strong>Rooms:</strong> {hotel.rooms}
          </div>
          <div className="mb-4">
            <strong>Amenities:</strong> {hotel.amenities.join(', ')}
          </div>
          <div className="mb-4">
            <strong>Ratings:</strong> {hotel.ratings}
          </div>
          <div className="mb-4">
            <strong>Payment Transactions:</strong> {hotel.paymentTransactions}
          </div>
          <div className="mb-4">
            <strong>Images:</strong>
            <div className="flex space-x-2 mt-2">
              {hotel.images.map((image, index) => (
                <img key={index} src={image} alt={`Hotel Image ${index + 1}`} className="w-20 h-20 object-cover rounded" />
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;