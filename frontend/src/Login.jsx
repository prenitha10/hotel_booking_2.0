import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import axios from 'axios'

function Login() {
    const [name, setName] = useState(''); 
    const [pwd, setPwd] = useState('');
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:5000/login',{name,password:pwd});
            alert(response.data.message);
            localStorage.setItem('token', response.data.token);
        }
        catch(err)
        {
            setError(err.response.data.error || 'Server error!');
        }
        console.log("Submitted username:", name);
    };

    return (   
        <div>
            <Header />
            <div className="bg-cover h-screen flex items-center justify-center bg-login">
                <div className="bg-black/70 text-white p-8 rounded-md w-2/4 sm:w-96">
                    <form className="mx-auto space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-white font-bold text-lg">Username</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 mt-2 rounded text-black"
                            />
                        </div>
                        <div>
                            <label className="text-white font-bold text-lg">Password</label>
                            <input
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                className="w-full p-3 mt-2 rounded text-black"
                            />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-blue-400 text-sm underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-white font-bold text-lg">
                            Don’t have an account? <a href="/signup" className="text-blue-400 underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Login;
