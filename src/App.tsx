import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-blue-600 p-6 text-white">
                <h1 className="text-3xl font-bold text-center">Seamless WiFi at Airports</h1>
                <p className="mt-2 text-lg text-center">Stay connected while you travel</p>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow container mx-auto p-6">
                {/* Hero Section */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Our WiFi?</h2>
                    <p className="text-gray-700 mb-4">Enjoy fast, reliable internet service while waiting for your flight. Our WiFi is designed for travelers, ensuring stable connections for streaming, browsing, and video calls.</p>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-medium mb-2">High Speed</h3>
                        <p className="text-gray-600">Experience speeds up to 100 Mbps.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-medium mb-2">Secure Connection</h3>
                        <p className="text-gray-600">Your data is safe with our secure network.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-medium mb-2">Global Access</h3>
                        <p className="text-gray-600">Connect from airports around the world.</p>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-800 p-4 text-white text-center">
                <p className="text-sm">&copy; 2023 Airport WiFi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;