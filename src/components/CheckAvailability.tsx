import { Calendar, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function CheckAvailability() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const roomOptions = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite Room" },
    { value: "family", label: "Family Room" },
    { value: "presidential", label: "Presidential Suite" },
  ] as const;

  type RoomType = (typeof roomOptions)[number]["value"];

  // Mock data untuk room availability
  const roomAvailability: Record<
    RoomType,
    { unavailablePeriods: { start: string; end: string }[] }
  > = {
    standard: {
      unavailablePeriods: [
        { start: "2025-09-10", end: "2025-09-15" },
        { start: "2025-09-25", end: "2025-09-30" },
      ],
    },
    deluxe: {
      unavailablePeriods: [
        { start: "2025-09-05", end: "2025-09-08" },
        { start: "2025-09-20", end: "2025-09-22" },
      ],
    },
    suite: {
      unavailablePeriods: [{ start: "2025-09-12", end: "2025-09-18" }],
    },
    family: {
      unavailablePeriods: [],
    },
    presidential: {
      unavailablePeriods: [
        { start: "2025-09-01", end: "2025-09-07" },
        { start: "2025-09-15", end: "2025-09-25" },
      ],
    },
  };

  // Type guard function to check if a string is a valid RoomType
  const isValidRoomType = (roomType: string): roomType is RoomType => {
    return roomOptions.some((option) => option.value === roomType);
  };

  const checkRoomAvailability = (
    roomType: string,
    checkIn: string,
    checkOut: string
  ) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Type check before accessing roomAvailability
    if (!isValidRoomType(roomType)) {
      return { available: false, error: "Invalid room type" };
    }

    const unavailablePeriods = roomAvailability[roomType].unavailablePeriods;

    for (const period of unavailablePeriods) {
      const periodStart = new Date(period.start);
      const periodEnd = new Date(period.end);

      // Check if the requested dates overlap with any unavailable period
      if (checkInDate <= periodEnd && checkOutDate >= periodStart) {
        return {
          available: false,
          conflictPeriod: period,
        };
      }
    }

    return { available: true };
  };

  const formatDateForDisplay = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleCheckAvailability = () => {
    if (!checkInDate || !checkOutDate || !selectedRoom) {
      alert("Please select room type and both check-in and check-out dates");
      return;
    }

    // Validate dates
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const roomLabel = roomOptions.find(
      (option) => option.value === selectedRoom
    )?.label;

    const availability = checkRoomAvailability(
      selectedRoom,
      checkInDate,
      checkOutDate
    );

    if (availability.available) {
      setIsAvailable(true);
      setAlertMessage(
        `${roomLabel} on ${formatDateForDisplay(
          checkInDate
        )} until ${formatDateForDisplay(checkOutDate)} is available.`
      );
    } else {
      setIsAvailable(false);
      if (availability.conflictPeriod) {
        const conflictStart = formatDateForDisplay(
          availability.conflictPeriod.start
        );
        const conflictEnd = formatDateForDisplay(
          availability.conflictPeriod.end
        );
        setAlertMessage(
          `${roomLabel} is not available from ${conflictStart} until ${conflictEnd}. Please select different dates.`
        );
      } else {
        setAlertMessage(
          `${roomLabel} is not available for the selected dates. Please select different dates.`
        );
      }
    }

    setShowAlert(true);
  };

  const handleCheckInClick = () => {
    if (checkInRef.current) {
      checkInRef.current.showPicker();
    }
  };

  const handleCheckOutClick = () => {
    if (checkOutRef.current) {
      checkOutRef.current.showPicker();
    }
  };

  const handleRoomSelect = (roomValue: string) => {
    setSelectedRoom(roomValue);
    setShowRoomDropdown(false);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Check In";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatDateOut = (dateString: string) => {
    if (!dateString) return "Check Out";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getSelectedRoomLabel = () => {
    const room = roomOptions.find((option) => option.value === selectedRoom);
    return room ? room.label : "Room Type";
  };

  return (
    <section className="relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
            <div className="flex justify-center">
              {/* Mobile Layout */}
              <div className="w-full max-w-4xl md:hidden">
                {/* Row 1: Room Dropdown */}
                <div className="mb-6">
                  <div className="relative">
                    <button
                      onClick={() => setShowRoomDropdown(!showRoomDropdown)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={
                          selectedRoom ? "text-gray-900" : "text-gray-500"
                        }
                      >
                        {getSelectedRoomLabel()}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {showRoomDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {roomOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleRoomSelect(option.value)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2: Check In and Check Out */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Check In */}
                  <div>
                    <button
                      onClick={handleCheckInClick}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={
                          checkInDate
                            ? "text-gray-900 text-sm"
                            : "text-gray-500 text-sm"
                        }
                      >
                        {formatDate(checkInDate)}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </button>
                    <input
                      ref={checkInRef}
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="sr-only"
                    />
                  </div>

                  {/* Check Out */}
                  <div>
                    <button
                      onClick={handleCheckOutClick}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={
                          checkOutDate
                            ? "text-gray-900 text-sm"
                            : "text-gray-500 text-sm"
                        }
                      >
                        {formatDateOut(checkOutDate)}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </button>
                    <input
                      ref={checkOutRef}
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="sr-only"
                    />
                  </div>
                </div>

                {/* Row 3: Check Availability Button */}
                <div>
                  <button
                    onClick={handleCheckAvailability}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Check Availability
                  </button>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-4 gap-8 items-end max-w-4xl w-full">
                {/* Room Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Room Type
                  </label>
                  <button
                    onClick={() => setShowRoomDropdown(!showRoomDropdown)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className={
                        selectedRoom ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {selectedRoom ? getSelectedRoomLabel() : "Select Room"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>

                  {/* Dropdown Menu */}
                  {showRoomDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {roomOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleRoomSelect(option.value)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Check In */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Check In
                  </label>
                  <button
                    onClick={handleCheckInClick}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className={
                        checkInDate ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {checkInDate ? formatDate(checkInDate) : "Select Date"}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </button>
                  <input
                    ref={checkInRef}
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="sr-only"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Check Out
                  </label>
                  <button
                    onClick={handleCheckOutClick}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className={
                        checkOutDate ? "text-gray-900" : "text-gray-500"
                      }
                    >
                      {checkOutDate
                        ? formatDateOut(checkOutDate)
                        : "Select Date"}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </button>
                  <input
                    ref={checkOutRef}
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="sr-only"
                  />
                </div>

                {/* Check Availability Button */}
                <button
                  onClick={handleCheckAvailability}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 w-48 cursor-pointer rounded-lg font-medium transition-colors duration-300"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showRoomDropdown && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowRoomDropdown(false)}
        />
      )}

      {/* Alert Dialog */}
      {showAlert && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-md w-full relative animate-in fade-in duration-300 rounded-lg">
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isAvailable ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <Calendar
                  className={`w-8 h-8 ${
                    isAvailable ? "text-green-600" : "text-red-600"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isAvailable ? "text-green-800" : "text-red-800"
                }`}
              >
                {isAvailable ? "Available!" : "Not Available"}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {alertMessage}
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setShowAlert(false)}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                    isAvailable
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                >
                  {isAvailable
                    ? "Proceed to Booking"
                    : "Select Different Dates"}
                </button>
                <button
                  onClick={() => setShowAlert(false)}
                  className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
