import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>

            <button
                type="button"
                onClick={() => navigate('/')}
            >
                Homepagina
            </button>

            <button
                type="button"
                onClick={() => navigate('/search')}
            >
                Zoekpagina
            </button>

            <button
                type="button"
                onClick={() => navigate('/result')}
            >
               Resultaatpagina
            </button>

            <button
                type="button"
                onClick={() => navigate('/donations')}
            >
               Donatiepagina
            </button>

            <button
                type="button"
                onClick={() => navigate('/profile')}
            >
                Profielpagina
            </button>


        </nav>
    );
}

export default NavBar;