import PropTypes from 'prop-types';


const Navbar = ({ user }) => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <img src="https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw" alt="logo" className="h-10 w-10 inline-block mr-2 rounded-lg" />
                    <a href="/" className="hover:text-gray-300">Photos App</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <a href="/profile" className="hover:text-gray-300">Mi pefil</a>
                    <a href="/post" className="hover:text-gray-300 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Crear Post</a>
                    {user && (
                        <div className="flex items-center space-x-2">
                            <img src={user.photo} alt={user.name} className="h-8 w-8 rounded-full" />
                            <span>{user.name} ({user.email})</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        photo: PropTypes.string
    })
};


export default Navbar;
