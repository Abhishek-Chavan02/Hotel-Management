import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";

const AddModal = ({ hotel, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    ownerName: hotel?.ownerName || "",
    name: hotel?.name || "",
    address: hotel?.address || "",
    amenities: hotel?.amenities || [],
    rooms: hotel?.rooms || "",
  });

  useEffect(() => {
    if (hotel) {
      setFormData({
        ownerName: hotel.ownerName || "",
        name: hotel.name || "",
        address: hotel.address || "",
        amenities: hotel.amenities || [],
        rooms: hotel.rooms || "",
      });
    }
  }, [hotel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const amenities = checked
        ? [...prevState.amenities, value]
        : prevState.amenities.filter((amenity) => amenity !== value);
      return { ...prevState, amenities };
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);  
  };


  const isEditMode = hotel && hotel.id;

  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form onSubmit={handleSubmit}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">
                      {isEditMode ? "Edit Hotel" : "Add Hotel"}
                    </h3>
                    <div className="mt-2">
                      
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ownerName">
                          Owner Name
                        </label>
                        <InputField
                          type="text"
                          name="ownerName"
                          placeholder="Owner Name"
                          value={formData.ownerName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Hotel Name
                        </label>
                        <InputField
                          type="text"
                          name="name"
                          placeholder="Hotel Name"
                          value={formData.name}
                          onChange={handleChange}
                          
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                          Address
                        </label>
                        <InputField
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rooms">
                          Rooms
                        </label>
                        <InputField
                          type="number"
                          name="rooms"
                          placeholder="Number of rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Amenities</label>
                        {["WiFi", "Pool", "Parking"].map((amenity) => (
                          <label key={amenity} className="block">
                            <input
                              type="checkbox"
                              value={amenity}
                              checked={formData.amenities.includes(amenity)}
                              onChange={handleCheckboxChange}
                            />{" "}
                            {amenity}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-[#5A2360] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-purple-600 sm:ml-3 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
