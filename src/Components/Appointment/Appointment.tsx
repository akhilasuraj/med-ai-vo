import React, { useState, useMemo, useRef, useEffect } from 'react';

type TimeSlot = {
    time: string;
    available: boolean;
};

type Doctor = {
    name: string;
    specialty: string;
};

type Hospital = {
    name: string;
    location: string;
};

const Appointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [reason, setReason] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Hardcoded doctors list
    const doctors: Doctor[] = [
        { name: 'Dr. John Doe', specialty: 'Cardiologist' },
        { name: 'Dr. Jane Smith', specialty: 'Neurologist' },
        { name: 'Dr. Alan Walker', specialty: 'Dermatologist' },
        { name: 'Dr. Emily Brown', specialty: 'Pediatrician' },
        { name: 'Dr. Robert Wilson', specialty: 'Orthopedic Surgeon' },
        { name: 'Dr. Sarah Miller', specialty: 'Oncologist' },
        { name: 'Dr. Michael Clark', specialty: 'General Physician' },
        { name: 'Dr. Laura Adams', specialty: 'Psychiatrist' },
        { name: 'Dr. William Scott', specialty: 'Ophthalmologist' },
        { name: 'Dr. Olivia Green', specialty: 'Endocrinologist' }
    ];

    // Hardcoded hospitals list
    const hospitals: Hospital[] = [
        { name: 'Central Hospital', location: 'Downtown' },
        { name: 'Memorial Medical Center', location: 'West Side' },
        { name: 'St. Mary\'s Hospital', location: 'East Side' },
        { name: 'Community Health Center', location: 'North District' },
        { name: 'University Medical Center', location: 'South Campus' }
    ];

    // Filter doctors based on search term
    const filteredDoctors = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase();
        return doctors.filter(doctor => 
            doctor.name.toLowerCase().includes(searchTermLower) ||
            doctor.specialty.toLowerCase().includes(searchTermLower)
        );
    }, [searchTerm]);

    // Mock time slots (in a real app, these would come from an API)
    const timeSlots: TimeSlot[] = [
        { time: '09:00', available: true },
        { time: '10:00', available: true },
        { time: '11:00', available: false },
        { time: '12:00', available: true },
        { time: '14:00', available: true },
        { time: '15:00', available: true },
        { time: '16:00', available: false },
        { time: '17:00', available: true },
    ];

    const handleDoctorSelect = (doctor: Doctor) => {
        setDoctorName(doctor.name);
        setSearchTerm(doctor.name);
        setIsDropdownOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Appointment Details:', { selectedDate, selectedTime, selectedHospital, doctorName, reason });
    };

    return (
        <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Schedule an Appointment</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-6">
                        {/* Date Selection */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Time Slots */}
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-white block mb-2">
                                Available Time Slots
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot.time}
                                        type="button"
                                        disabled={!slot.available}
                                        onClick={() => setSelectedTime(slot.time)}
                                        className={`
                                            p-2 rounded-md text-sm font-medium
                                            ${selectedTime === slot.time 
                                                ? 'bg-gray-900 dark:bg-gray-700 text-white' 
                                                : slot.available 
                                                    ? 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                            }
                                        `}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Hospital Selection */}
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-white block mb-1">
                                Hospital
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedHospital}
                                    onChange={(e) => setSelectedHospital(e.target.value)}
                                    className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent appearance-none"
                                    required
                                >
                                    <option value="">Select a hospital</option>
                                    {hospitals.map((hospital, index) => (
                                        <option key={index} value={hospital.name}>
                                            {hospital.name} - {hospital.location}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Doctor Selection */}
                        <div className="relative">
                            <label className="text-sm font-medium text-gray-900 dark:text-white block mb-1">
                                Doctor
                            </label>
                            <div className="relative" ref={dropdownRef}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            if (e.target.value !== doctorName) {
                                                setDoctorName('');
                                            }
                                            setIsDropdownOpen(true);
                                        }}
                                        onFocus={() => setIsDropdownOpen(true)}
                                        className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent pr-10"
                                        placeholder="Search doctor by name or specialty"
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSearchTerm('');
                                                setDoctorName('');
                                                setIsDropdownOpen(false);
                                            }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                                        {filteredDoctors.length > 0 ? (
                                            filteredDoctors.map((doctor, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handleDoctorSelect(doctor)}
                                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none"
                                                >
                                                    <div className="font-medium text-gray-900 dark:text-white">{doctor.name}</div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">{doctor.specialty}</div>
                                                </button>
                                            ))
                                        ) : (
                                            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No doctors found</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Reason for Visit */}
                        <div>
                            <label className="text-sm font-medium text-gray-900 dark:text-white block mb-1">
                                Reason for Visit
                            </label>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent"
                                rows={3}
                                placeholder="Brief description of your visit"
                                required
                            />
                        </div>
                    </div>

                    {/* Preview Card */}
                    {(selectedDate || selectedTime || doctorName || selectedHospital) && (
                        <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Appointment Preview</h3>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-4 h-12 bg-gray-900 dark:bg-gray-700 rounded-l"></div>
                                <div>
                                    {selectedHospital && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {selectedHospital}
                                        </p>
                                    )}
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        {doctorName || 'Select a doctor'}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { 
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                        {selectedTime && ` at ${selectedTime}`}
                                    </p>
                                    {reason && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{reason}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;