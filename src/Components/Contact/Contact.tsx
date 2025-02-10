import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
            <form>
                <div className="mb-4">
                <label className="block text-gray-900 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-900 dark:text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-900 dark:text-white text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                    id="message"
                    placeholder="Your message"
                    rows={4}
                ></textarea>
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    type="button"
                >
                    Send
                </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;