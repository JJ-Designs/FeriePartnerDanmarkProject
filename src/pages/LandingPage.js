import React from 'react';
import CallToAction from '../components/CallToAction';

function LandingPage() {
return (
    <div className="min-h-screen bg-linen font-sans">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-h1 text-slate-800 mb-2 text-center">Welcome to Ferie Partner Danmark</h1>
            <h2 className="text-h2 text-slate-700 mb-6 text-center">Your Gateway to Amazing Holidays</h2>
            <CallToAction 
                to="/employees"
                title="View Employees Page to Meet Our Team"
                description="See Employees Page to view our dedicated team members who make your holidays unforgettable."
            />
        </div>
    </div>
);
}

export default LandingPage;