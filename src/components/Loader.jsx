import { useState, useEffect } from 'react';
import './Loader.css';
import logo from '../assets/logo.jpg';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loader-container">
            <div className="loader-content">
                <img src={logo} alt="Quantive Research" className="loader-logo" />
                <div className="loader-spinner">
                    <div className="spinner"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;