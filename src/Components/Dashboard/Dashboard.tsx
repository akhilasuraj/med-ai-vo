import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    PlusIcon, BeakerIcon, ClockIcon, CalendarIcon, BellAlertIcon, 
    ArrowDownTrayIcon, DocumentTextIcon, ChartBarIcon, ChevronRightIcon, 
    HeartIcon, ExclamationTriangleIcon, DocumentDuplicateIcon,
    ChartPieIcon, ArrowTrendingUpIcon, SparklesIcon 
} from '@heroicons/react/24/solid';
import ScrollButtons from '../Shared/ScrollButtons';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleMakeAppointment = () => {
        navigate('/appointments/new');
    };

    return (
        <div className="dashboard p-6 min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <div className="hero-section bg-blue-600 text-white p-8 rounded-lg shadow-lg mb-8">
                <h1 className="text-4xl font-bold mb-2">Hi John, Welcome to Your Dashboard</h1>
                <p className="text-lg">Here you can find all your health-related information and insights at a glance.</p>
            </div>

            {/* Appointment Button */}
            <div className="flex justify-end mb-8">
                <button 
                    onClick={handleMakeAppointment}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out flex items-center gap-2"
                >
                    <PlusIcon className="h-5 w-5" />
                    Make an Appointment
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Trends Section */}
                <div className="trends-section">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <SparklesIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Trends Related To You</h2>
                        </div>
                        <ScrollButtons scrollContainerId="trends-scroll" />
                    </div>
                    <div id="trends-scroll" className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
                        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <ArrowTrendingUpIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">Blood Pressure Trend</h3>
                            </div>
                            <p className="text-emerald-600 dark:text-emerald-400 mb-2">Likely to increase in next week</p>
                            <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">Based on your history and weather changes</p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <ChartPieIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">Seasonal Allergies</h3>
                            </div>
                            <p className="text-emerald-600 dark:text-emerald-400 mb-2">High risk period approaching</p>
                            <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">Pollen forecast indicates increased activity</p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <HeartIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">Heart Health Prediction</h3>
                            </div>
                            <p className="text-emerald-600 dark:text-emerald-400 mb-2">Positive trend detected</p>
                            <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">Exercise routine showing results</p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">Sleep Pattern Analysis</h3>
                            </div>
                            <p className="text-emerald-600 dark:text-emerald-400 mb-2">Improvement recommended</p>
                            <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">Recent changes affecting sleep quality</p>
                        </div>

                        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 min-w-[220px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Show More</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insights Section */}
                <div className="insights-section">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <BellAlertIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Insights and Reminders</h2>
                        </div>
                        <ScrollButtons scrollContainerId="insights-scroll" />
                    </div>
                    <div id="insights-scroll" className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
                        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl shadow-sm border border-green-100 dark:border-green-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-green-100 dark:hover:bg-green-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <BeakerIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Lab Reports Ready</h3>
                            </div>
                            <p className="text-green-600 dark:text-green-400">Your recent lab results are available for review</p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl shadow-sm border border-yellow-100 dark:border-yellow-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <ClockIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Cholesterol Test Coming Soon!</h3>
                            </div>
                            <p className="text-yellow-600 dark:text-yellow-400">Scheduled for next week</p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <CalendarIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Appointment Coming Soon!</h3>
                            </div>
                            <p className="text-blue-600 dark:text-blue-400">Dr. Smith on Friday at 2:00 PM</p>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl shadow-sm border border-red-100 dark:border-red-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <HeartIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                                <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">Blood Pressure Check Due</h3>
                            </div>
                            <p className="text-red-600 dark:text-red-400">Schedule your monthly BP check</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl shadow-sm border border-orange-100 dark:border-orange-800 min-w-[320px]">
                            <div className="flex items-center gap-3 mb-3">
                                <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Medication Refill</h3>
                            </div>
                            <p className="text-orange-600 dark:text-orange-400">Refill needed in 5 days</p>
                        </div>

                        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 min-w-[220px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Show More</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medical Records Section */}
                <div className="records-section">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <DocumentTextIcon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Latest Medical Records</h2>
                        </div>
                        <ScrollButtons scrollContainerId="records-scroll" />
                    </div>
                    <div id="records-scroll" className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
                        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Blood Test Results</h3>
                            </div>
                            <p className="text-purple-600 dark:text-purple-400 mb-2">Date: March 15, 2024</p>
                            <p className="text-purple-600 dark:text-purple-400">Complete Blood Count Analysis</p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">X-Ray Report</h3>
                            </div>
                            <p className="text-purple-600 dark:text-purple-400 mb-2">Date: March 10, 2024</p>
                            <p className="text-purple-600 dark:text-purple-400">Chest X-Ray Analysis</p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Medical Certificate</h3>
                            </div>
                            <p className="text-purple-600 dark:text-purple-400 mb-2">Date: March 5, 2024</p>
                            <p className="text-purple-600 dark:text-purple-400">General Health Assessment</p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">ECG Report</h3>
                            </div>
                            <p className="text-purple-600 dark:text-purple-400 mb-2">Date: March 1, 2024</p>
                            <p className="text-purple-600 dark:text-purple-400">Cardiac Rhythm Analysis</p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">MRI Scan Report</h3>
                            </div>
                            <p className="text-purple-600 dark:text-purple-400 mb-2">Date: February 28, 2024</p>
                            <p className="text-purple-600 dark:text-purple-400">Brain MRI Analysis</p>
                        </div>

                        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 min-w-[220px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Show More</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prescriptions Section */}
                <div className="prescriptions-section">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <DocumentDuplicateIcon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Prescriptions</h2>
                        </div>
                        <ScrollButtons scrollContainerId="prescriptions-scroll" />
                    </div>
                    <div id="prescriptions-scroll" className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar">
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Antibiotics</h3>
                            </div>
                            <p className="text-indigo-600 dark:text-indigo-400 mb-2">Date: March 15, 2024</p>
                            <p className="text-indigo-600 dark:text-indigo-400">Dr. Sarah Smith</p>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Pain Medication</h3>
                            </div>
                            <p className="text-indigo-600 dark:text-indigo-400 mb-2">Date: March 10, 2024</p>
                            <p className="text-indigo-600 dark:text-indigo-400">Dr. Michael Johnson</p>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Blood Pressure Medication</h3>
                            </div>
                            <p className="text-indigo-600 dark:text-indigo-400 mb-2">Date: March 5, 2024</p>
                            <p className="text-indigo-600 dark:text-indigo-400">Dr. Sarah Smith</p>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800 relative min-w-[320px]">
                            <button className="absolute top-2 right-2 p-2 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg transition-colors">
                                <ArrowDownTrayIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            </button>
                            <div className="flex items-center gap-3 mb-3">
                                <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Allergy Medication</h3>
                            </div>
                            <p className="text-indigo-600 dark:text-indigo-400 mb-2">Date: March 1, 2024</p>
                            <p className="text-indigo-600 dark:text-indigo-400">Dr. Emily Chen</p>
                        </div>

                        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/30 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 min-w-[220px] cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Show More</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;