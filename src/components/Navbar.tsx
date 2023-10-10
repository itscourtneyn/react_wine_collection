import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-rose-200 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold italic font-serif text-2xl tracking-tight drop-shadow-lg'>Courtney's Wine Collection</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white border rounded-lg drop-shadow-lg border-white hover:text-white hover:border-white'>
                <i className="fa-solid fa-wine-glass-empty text-2xl"></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0  text-rose-300 hover:text-white mr-4 font-serif'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                            <div>
                                <Link to='/winetypes' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-rose-300 hover:text-white mr-4 font-serif'>
                                    Types of Wine
                                </Link>
                            </div>
                        </Button>
            
                        <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                            <div>
                                <Link to='/inventory' onClick={ clicked} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-rose-300 hover:text-white mr-4'>
                                    Inventory
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                            <div>
                                <Link to='/wineries' onClick={ clicked} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-rose-300 hover:text-white mr-4'>
                                     Local Wineries
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-rose-300 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-white justify-center rounded-lg'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-rose-300 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;