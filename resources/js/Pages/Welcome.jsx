import React from 'react';
import ApplicationLogo from '../components/ApplicationLogo'; // تعديل مسار الاستيراد إذا لزم الأمر
import NavLink from '@/Components/NavLink'; // تعديل مسار الاستيراد إذا لزم الأمر

function HomePage() {
    return (
        <div>
            <nav className="flex justify-between items-center p-6 bg-white shadow-md">
                <ApplicationLogo width={100} height={50} className="logo" alt="Logo" />
                <div className="flex space-x-4">
                    <NavLink href="login" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login </NavLink>
                    <NavLink href="register" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</NavLink>
                </div>
            </nav>

            <header className="bg-white bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url(/images/ch.jpg)' }}>
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">  Welcome to gmail chat </h1>
                    <p className="text-xl text-gray-700 mb-8"> Welcome to Gmail chat! Make your communications more organized and enjoyable with this popular email service. Discover the ease of communication and organization through an intuitive interface, where you can talk to friends and colleagues easily and exchange text messages quickly and securely.  </p>
                    <a href="register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register </a>
                </div>
            </header>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Main features </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-6 md:w-1/3">
                            <h3 className="text-xl font-bold text-gray-700 mb-2"> </h3>
                            <p className="text-gray-600"> Organizing messages</p>
                        </div>
                        <div className="p-6 md:w-1/3">
                            <h3 className="text-xl font-bold text-gray-700 mb-2"> </h3>
                            <p className="text-gray-600">  Safety and protection</p>
                        </div>
                        <div className="p-6 md:w-1/3">
                            <h3 className="text-xl font-bold text-gray-700 mb-2"> </h3>
                            <p className="text-gray-600">  Fast communication</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center py-6">
                <div className="container mx-auto">
                    <p>&copy; 2024 . جميع الحقوق محفوظة</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
