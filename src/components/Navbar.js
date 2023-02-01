import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav>

            <button
                type="button"
                onClick={() => navigate('/profile')}
            >
               Profielpagina
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

            {isAuth ?
                <button
                    type="button"
                    onClick={logout}
                >
                    Log uit
                </button>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Inlogpagina
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registratiepagina
                    </button>
                </div>
            }
        </nav>
    );
}

export default NavBar;