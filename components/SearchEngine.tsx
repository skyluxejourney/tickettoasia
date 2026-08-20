"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Calendar,
  Users,
  PlaneTakeoff,
  PlaneLanding,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Loader2,
  AlertCircle,
} from "lucide-react";

// Sample location data with airport codes
const locations = [
  { name: "New York", code: "JFK", country: "USA" },
  { name: "Los Angeles", code: "LAX", country: "USA" },
  { name: "Chicago", code: "ORD", country: "USA" },
  { name: "Miami", code: "MIA", country: "USA" },
  { name: "Paris", code: "CDG", country: "France" },
  { name: "London", code: "LHR", country: "UK" },
  { name: "Dubai", code: "DXB", country: "UAE" },
  { name: "Tokyo", code: "HND", country: "Japan" },
  { name: "Bali", code: "DPS", country: "Indonesia" },
  { name: "Singapore", code: "SIN", country: "Singapore" },
  { name: "Bangkok", code: "BKK", country: "Thailand" },
  { name: "Sydney", code: "SYD", country: "Australia" },
  { name: "Rome", code: "FCO", country: "Italy" },
  { name: "Barcelona", code: "BCN", country: "Spain" },
  { name: "Istanbul", code: "IST", country: "Turkey" },
  { name: "Kuala Lumpur", code: "KUL", country: "Malaysia" },
  { name: "Mumbai", code: "BOM", country: "India" },
  { name: "Cape Town", code: "CPT", country: "South Africa" },
];

export default function SearchEngine() {
  const [tripType, setTripType] = useState("roundtrip");
  const [leavingFrom, setLeavingFrom] = useState("");
  const [departingTo, setDepartingTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showLeavingHints, setShowLeavingHints] = useState(false);
  const [showDepartingHints, setShowDepartingHints] = useState(false);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDepartDate, setSelectedDepartDate] = useState<Date | null>(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const leavingRef = useRef<HTMLDivElement>(null);
  const departingRef = useRef<HTMLDivElement>(null);
  const departCalendarRef = useRef<HTMLDivElement>(null);
  const returnCalendarRef = useRef<HTMLDivElement>(null);
  const passengerRef = useRef<HTMLDivElement>(null);

  const filteredLeaving = locations.filter(loc =>
    loc.name.toLowerCase().includes(leavingFrom.toLowerCase()) ||
    loc.code.toLowerCase().includes(leavingFrom.toLowerCase())
  );
  const filteredDeparting = locations.filter(loc =>
    loc.name.toLowerCase().includes(departingTo.toLowerCase()) ||
    loc.code.toLowerCase().includes(departingTo.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (leavingRef.current && !leavingRef.current.contains(event.target as Node)) {
        setShowLeavingHints(false);
      }
      if (departingRef.current && !departingRef.current.contains(event.target as Node)) {
        setShowDepartingHints(false);
      }
      if (departCalendarRef.current && !departCalendarRef.current.contains(event.target as Node)) {
        setShowDepartCalendar(false);
      }
      if (returnCalendarRef.current && !returnCalendarRef.current.contains(event.target as Node)) {
        setShowReturnCalendar(false);
      }
      if (passengerRef.current && !passengerRef.current.contains(event.target as Node)) {
        setShowPassengerDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-hide error message after 4 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSearch = async () => {
    // Show "not in service" message
    setErrorMessage("Flight search is currently not in service. Please try again later.");
    
    // Still show loading state briefly for UX
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  // Helper functions for calendar
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day: number, isDepart: boolean) => {
    const date = new Date(currentYear, currentMonth, day);
    // Format date as MM-DD-YYYY
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${month}-${dayStr}-${year}`;
    
    if (isDepart) {
      setSelectedDepartDate(date);
      setDepartDate(formattedDate);
      setShowDepartCalendar(false);
    } else {
      setSelectedReturnDate(date);
      setReturnDate(formattedDate);
      setShowReturnCalendar(false);
    }
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[0]}-${parts[1]}-${parts[2]}`;
    }
    return dateStr;
  };

  const renderCalendar = (isDepart: boolean) => {
    const days = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const today = new Date();
    const selected = isDepart ? selectedDepartDate : selectedReturnDate;

    return (
      <div className="bg-white shadow-2xl p-4 w-80 z-[9999] relative border" style={{ borderColor: '#e2e8f0' }}>
        {/* Header with "Choose the Departure" or "Choose the Return" */}
        <div className="text-center mb-3">
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#5e503f' }}>
            {isDepart ? 'Choose the Departure' : 'Choose the Return'}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-1 rounded-full transition-colors"
            style={{ color: '#5e503f' }}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-semibold" style={{ color: '#3d3226' }}>
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="p-1 rounded-full transition-colors"
            style={{ color: '#5e503f' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day) => (
            <div key={day} className="text-center text-xs font-bold py-1" style={{ color: '#5e503f' }}>
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }, (_, i) => (
            <div key={`empty-${i}`} className="h-8" />
          ))}
          {Array.from({ length: days }, (_, i) => {
            const day = i + 1;
            const date = new Date(currentYear, currentMonth, day);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = selected?.toDateString() === date.toDateString();
            const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

            return (
              <button
                key={day}
                onClick={() => !isPast && handleDateSelect(day, isDepart)}
                disabled={isPast}
                className={`
                  h-8 w-full rounded-full text-sm font-medium transition-all duration-200
                  ${isPast ? 'text-gray-300 cursor-not-allowed line-through' : ''}
                  ${isSelected ? 'text-white' : ''}
                  ${isToday && !isSelected ? 'border-2 font-bold' : ''}
                `}
                style={{
                  backgroundColor: isSelected ? '#5e503f' : 'transparent',
                  borderColor: isToday && !isSelected ? '#b8956e' : 'transparent',
                  color: isSelected ? 'white' : isToday && !isSelected ? '#3d3226' : '#3d3226'
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-2xl max-w-auto mx-auto p-4 relative z-[100] border" style={{ borderColor: '#e2e8f0' }}>
      {/* Error Message with Red Icon */}
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center justify-between animate-in slide-in-from-top-1 duration-200">
          <div className="flex items-center gap-2">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setErrorMessage("")}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Trip Type Toggle - Fixed Width */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto">
        <button
          onClick={() => setTripType("roundtrip")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            tripType === "roundtrip"
              ? "text-white shadow-lg"
              : "hover:bg-[#eae0d5]"
          }`}
          style={{
            background: tripType === "roundtrip" 
              ? `linear-gradient(to right, #5e503f, #b8956e)`
              : 'transparent',
            color: tripType === "roundtrip" ? 'white' : '#2a242099',
            boxShadow: tripType === "roundtrip" ? `0 10px 15px -3px #5e503f33` : 'none'
          }}
        >
          Round Trip
        </button>
        <button
          onClick={() => setTripType("oneway")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            tripType === "oneway"
              ? "text-white shadow-lg"
              : "hover:bg-[#eae0d5]"
          }`}
          style={{
            background: tripType === "oneway" 
              ? `linear-gradient(to right, #5e503f, #b8956e)`
              : 'transparent',
            color: tripType === "oneway" ? 'white' : '#2a242099',
            boxShadow: tripType === "oneway" ? `0 10px 15px -3px #5e503f33` : 'none'
          }}
        >
          One Way
        </button>
        <button
          onClick={() => setTripType("multicity")}
          className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            tripType === "multicity"
              ? "text-white shadow-lg"
              : "hover:bg-[#eae0d5]"
          }`}
          style={{
            background: tripType === "multicity" 
              ? `linear-gradient(to right, #5e503f, #b8956e)`
              : 'transparent',
            color: tripType === "multicity" ? 'white' : '#2a242099',
            boxShadow: tripType === "multicity" ? `0 10px 15px -3px #5e503f33` : 'none'
          }}
        >
          Multi-City
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Leaving From */}
        <div className="relative lg:col-span-1" ref={leavingRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10" style={{ color: '#5e503f' }}>
            <PlaneTakeoff size={16} className="block" />
          </div>
          <input
            type="text"
            placeholder="Leaving from"
            value={leavingFrom}
            onChange={(e) => {
              setLeavingFrom(e.target.value);
              setShowLeavingHints(true);
            }}
            onFocus={() => setShowLeavingHints(true)}
            className="w-full bg-[#faf7f2] border pl-10 pr-8 py-3 placeholder-[#94A3B8] focus:outline-none transition-all duration-300 text-sm h-[52px]"
            style={{
              borderColor: '#e2e8f0',
              color: '#2a2420',
              backgroundColor: '#faf7f2'
            }}
          />
          {leavingFrom && (
            <button
              onClick={() => {
                setLeavingFrom("");
                setShowLeavingHints(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {/* Hints Dropdown - Wider */}
          {showLeavingHints && filteredLeaving.length > 0 && (
            <div className="absolute bottom-full left-0 w-[280px] mb-1 bg-white shadow-lg border max-h-52 overflow-y-auto z-[9999] custom-scrollbar" style={{ borderColor: '#e2e8f0' }}>
              {filteredLeaving.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => {
                    setLeavingFrom(`${loc.name} (${loc.code})`);
                    setShowLeavingHints(false);
                  }}
                  className="w-full text-left px-4 py-3 transition-colors flex items-center justify-between border-b last:border-0"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <MapPin size={14} className="flex-shrink-0" style={{ color: '#5e503f' }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium" style={{ color: '#2a2420' }}>
                        {loc.name}
                      </span>
                      <span className="text-xs ml-2" style={{ color: '#2a242080' }}>
                        {loc.country}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ml-2" style={{ color: '#5e503f', backgroundColor: '#eae0d5' }}>
                    {loc.code}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Departing To */}
        <div className="relative lg:col-span-1" ref={departingRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10" style={{ color: '#5e503f' }}>
            <PlaneLanding size={16} className="block" />
          </div>
          <input
            type="text"
            placeholder="Departing to"
            value={departingTo}
            onChange={(e) => {
              setDepartingTo(e.target.value);
              setShowDepartingHints(true);
            }}
            onFocus={() => setShowDepartingHints(true)}
            className="w-full bg-[#faf7f2] border pl-10 pr-8 py-3 placeholder-[#94A3B8] focus:outline-none transition-all duration-300 text-sm h-[52px]"
            style={{
              borderColor: '#e2e8f0',
              color: '#2a2420',
              backgroundColor: '#faf7f2'
            }}
          />
          {departingTo && (
            <button
              onClick={() => {
                setDepartingTo("");
                setShowDepartingHints(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {/* Hints Dropdown - Wider */}
          {showDepartingHints && filteredDeparting.length > 0 && (
            <div className="absolute bottom-full left-0 w-[280px] mb-1 bg-white shadow-lg border max-h-52 overflow-y-auto z-[9999] custom-scrollbar" style={{ borderColor: '#e2e8f0' }}>
              {filteredDeparting.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => {
                    setDepartingTo(`${loc.name} (${loc.code})`);
                    setShowDepartingHints(false);
                  }}
                  className="w-full text-left px-4 py-3 transition-colors flex items-center justify-between border-b last:border-0"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <MapPin size={14} className="flex-shrink-0" style={{ color: '#5e503f' }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium" style={{ color: '#2a2420' }}>
                        {loc.name}
                      </span>
                      <span className="text-xs ml-2" style={{ color: '#2a242080' }}>
                        {loc.country}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ml-2" style={{ color: '#5e503f', backgroundColor: '#eae0d5' }}>
                    {loc.code}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Depart Date */}
        <div className="relative lg:col-span-1" ref={departCalendarRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10" style={{ color: '#5e503f' }}>
            <Calendar size={16} className="block" />
          </div>
          <button
            onClick={() => {
              setShowDepartCalendar(!showDepartCalendar);
              setShowReturnCalendar(false);
            }}
            className="w-full lg:w-45 bg-[#faf7f2] border pl-10 pr-8 py-3 text-left focus:outline-none transition-all duration-300 text-sm h-[52px]"
            style={{
              borderColor: '#e2e8f0',
              color: '#2a2420',
              backgroundColor: '#faf7f2'
            }}
          >
            {departDate ? formatDisplayDate(departDate) : <span style={{ color: '#94A3B8' }}>Departure Date</span>}
          </button>
          {departDate && (
            <button
              onClick={() => {
                setDepartDate("");
                setSelectedDepartDate(null);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              <X size={14} />
            </button>
          )}
          {/* Calendar - Positioned Above */}
          {showDepartCalendar && (
            <div className="absolute bottom-full left-0 mb-1 z-[9999]">
              {renderCalendar(true)}
            </div>
          )}
        </div>

        {/* Return Date - Only show for round trip */}
        {tripType === "roundtrip" && (
          <div className="relative lg:col-span-1" ref={returnCalendarRef}>
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10" style={{ color: '#5e503f' }}>
              <Calendar size={16} className="block" />
            </div>
            <button
              onClick={() => {
                setShowReturnCalendar(!showReturnCalendar);
                setShowDepartCalendar(false);
              }}
              className="w-full bg-[#faf7f2] border pl-10 pr-8 py-3 text-left focus:outline-none transition-all duration-300 text-sm h-[52px]"
              style={{
                borderColor: '#e2e8f0',
                color: '#2a2420',
                backgroundColor: '#faf7f2'
              }}
            >
              {returnDate ? formatDisplayDate(returnDate) : <span style={{ color: '#94A3B8' }}>Return Date</span>}
            </button>
            {returnDate && (
              <button
                onClick={() => {
                  setReturnDate("");
                  setSelectedReturnDate(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
              >
                <X size={14} />
              </button>
            )}
            {/* Calendar - Positioned Above */}
            {showReturnCalendar && (
              <div className="absolute bottom-full left-0 mb-1 z-[9999]">
                {renderCalendar(false)}
              </div>
            )}
          </div>
        )}

        {/* Custom Passengers Selector */}
        <div className="relative lg:col-span-1" ref={passengerRef}>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10" style={{ color: '#5e503f' }}>
            <Users size={16} className="block" />
          </div>
          <button
            onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
            className="w-full bg-[#faf7f2] border pl-10 pr-8 py-3 text-left focus:outline-none transition-all duration-300 text-sm h-[52px] flex items-center"
            style={{
              borderColor: '#e2e8f0',
              color: '#2a2420',
              backgroundColor: '#faf7f2'
            }}
          >
            <span>{passengerCount} {passengerCount === 1 ? 'Passenger' : 'Passengers'}</span>
          </button>

          {/* Passenger Dropdown */}
          {showPassengerDropdown && (
            <div className="absolute bottom-full left-0 mb-1 bg-white shadow-lg border p-4 w-56 z-[9999]" style={{ borderColor: '#e2e8f0' }}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: '#2a2420' }}>Passengers</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#eae0d5' }}
                  >
                    <Minus size={14} style={{ color: '#5e503f' }} />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center" style={{ color: '#2a2420' }}>
                    {passengerCount}
                  </span>
                  <button
                    onClick={() => setPassengerCount(Math.min(10, passengerCount + 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#eae0d5' }}
                  >
                    <Plus size={14} style={{ color: '#5e503f' }} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button - Rectangular with loading state */}
        <div className="lg:col-span-1 flex items-center">
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className={`w-full text-white transition-all duration-300 flex items-center justify-center h-[52px] px-6 ${
              isLoading 
                ? 'opacity-80 cursor-not-allowed' 
                : 'hover:scale-[1.02] active:scale-95'
            }`}
            style={{
              background: `linear-gradient(to right, #5e503f, #b8956e)`,
              boxShadow: `0 10px 15px -3px #5e503f33`
            }}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search size={20} className="mr-2" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #eae0d5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #5e503f;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7a6a56;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #5e503f #eae0d5;
        }
      `}</style>
    </div>
  );
}