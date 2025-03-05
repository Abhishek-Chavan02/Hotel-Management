import React, { useState } from "react";
import AddModal from "./AddModal";
import ViewDetailsModal from "../components/ViewDetailsModal";
import AppButton from "../components/AppButton";

const initialHotels = [
  {
    id: 1,
    ownerName: "John Doe",
    name: "Taj Hotel",
    address: "Mumbai",
    amenities: ["WiFi", "Pool", "Parking"],
    rooms: 100,
    ratings: 4.5,
    paymentTransactions: "PayPal",
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 2,
    ownerName: "Jane Doe",
    name: "Radisson Blu",
    address: "Alibaug",
    amenities: ["WiFi", "Pool", "Parking"],
    rooms: 150,
    ratings: 4.0,
    paymentTransactions: "Credit Card",
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 3,
    ownerName: "Jack Doe",
    name: "Hilton",
    address: "Mumbai",
    amenities: ["WiFi", "Pool", "Parking"],
    rooms: 200,
    ratings: 4.8,
    paymentTransactions: "PayPal",
    images: ["https://via.placeholder.com/150"],
  },
];

const HotelList = () => {
  const [hotels, setHotels] = useState(initialHotels);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleAddHotel = () => {
    setSelectedHotel(null);
    setIsModalOpen(true);
  };

  const handleSaveHotel = (hotelData) => {
    setHotels((prevHotels) => [
      ...prevHotels,
      { ...hotelData, id: prevHotels.length + 1 },
    ]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleViewDetails = (hotel) => {
    setSelectedHotel(hotel);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mr-10">
        <AppButton
          title={"Add Hotel"}
          onClick={handleAddHotel}
          className="w-24"
        />
      </div>

      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        ID
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Owner Name
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Hotel Name
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Address
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Rooms
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Amenities
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {hotels.map((hotel) => (
                      <tr key={hotel.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {hotel.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {hotel.ownerName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {hotel.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {hotel.address}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {hotel.rooms}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {hotel.amenities.join(", ")}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <AppButton
                            title="View Details"
                            onClick={() => handleViewDetails(hotel)}
                            className="w-32"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AddModal
          hotel={selectedHotel}
          onSave={handleSaveHotel}
          onCancel={handleCancel}
        />
      )}

      {isViewModalOpen && (
        <ViewDetailsModal
          hotel={selectedHotel}
          onClose={handleCloseViewModal}
        />
      )}
    </div>
  );
};

export default HotelList;
