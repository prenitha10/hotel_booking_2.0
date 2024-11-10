import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import axios from 'axios'

function Signup() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [newpwd, setNewpwd] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();


        const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pwd !== newpwd) {
            setError("Passwords do not match.");
            return;
        }
        if (!strongPasswordRegex.test(pwd)) {
            setError("Password should be at least 8 characters long, include at least one letter, one number, and one special character.");
            return;
        }

        if (!nameRegex.test(name)) {
            setError("Name should contain only letters and spaces.");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!phoneRegex.test(number)) {
            setError("Phone number should contain only numbers.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/signup', { name, password: pwd, email, phone: number });
            alert(response.data.message);
        } 
        catch (err) 
        {
            setError(err.response.data.error || 'Server error!');
        }

        console.log("Submitted username:", name);
        setError('');
    };

    return (
        <div>
            <Header />
            <div className="h-screen flex items-center justify-center bg-cover bg-login">
                <div className="bg-black/70 text-white p-8 rounded-md w-full max-w-md">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-white font-bold text-lg mb-2">Username</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 rounded bg-white text-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white font-bold text-lg mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded bg-white text-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white font-bold text-lg mb-2">Phone Number</label>
                            <input
                                type="tel"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="w-full p-3 rounded bg-white text-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white font-bold text-lg mb-2">Password</label>
                            <input
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                className="w-full p-3 rounded bg-white text-black outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white font-bold text-lg mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={newpwd}
                                onChange={(e) => setNewpwd(e.target.value)}
                                className="w-full p-3 rounded bg-white text-black outline-none"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

