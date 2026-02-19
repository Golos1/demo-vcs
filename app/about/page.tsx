import React from 'react';

export default function About() {
    const time = fetch('http://localhost:3000/api/time')
        .then(response => response.json())
        .then(data => data.time);
    const revenue = fetch('http://localhost:3000/api/financials/revenue')
        .then(response => response.json())
        .then(data => data.revenue);
    const debt = fetch('http://localhost:3000/api/financials/debt')
        .then(response => response.json())
        .then(data => data.debt);
    const share_price = fetch('http://localhost:3000/api/financials/share_price')
        .then(response => response.json())
        .then(data => data.share_price);
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Canncorp</h1>
                <h4 className="text-xl text-gray-700 mb-4">Time: {time}</h4>
                <h4 className="text-xl text-gray-700 mb-4">Share Price: ${share_price} Debt: ${debt} Revenue: ${revenue}</h4>

                <section className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are dedicated to providing exceptional products and services to our community.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Innovation and excellence</li>
                        <li>Customer-focused approach</li>
                        <li>Integrity and transparency</li>
                        <li>Continuous improvement</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}