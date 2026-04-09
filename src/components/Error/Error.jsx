import React from 'react';
import { useNavigate } from 'react-router';


import errorImg from '../../assets/error-404.png'; 

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col font-sans">
           
            <main className="flex-grow bg-[#F3F4F6] flex flex-col items-center justify-center p-6 text-center">
                
               
                <div className="relative mb-8 w-full max-w-sm flex justify-center">
                  
                    <div className="absolute bottom-4 w-40 h-10 bg-[#FCD45A] opacity-30 blur-2xl rounded-full"></div>
                    
                    
                    <img 
                        src={errorImg} 
                        alt="App Not Found" 
                        className="relative z-10 w-64 md:w-80 object-contain"
                    />
                </div>

                
                <div className="space-y-3">
                    <h1 className="text-[#001931] text-3xl md:text-5xl font-bold tracking-tight">
                        OPPS!! APP NOT FOUND
                    </h1>
                    <p className="text-[#627382] text-base md:text-lg max-w-md mx-auto">
                        The App you are requesting is not found on our system, please try another apps
                    </p>
                </div>

                {/* Action Button */}
                <button
                    onClick={() => navigate(-1)} 
                    className="mt-8 bg-[#6C4FE8] hover:bg-[#5a3fd1] text-white px-10 py-3 rounded-xl font-semibold transition-all shadow-lg active:scale-95"
                >
                    Go Back!
                </button>
            </main>
        </div>
    );
};

export default Error;