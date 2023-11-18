import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PhotoCard from './components/PhotoCard';

function App() {
  const [photos, setPhotos] = useState([]);
  const [reload, setReload] = useState(false);

  const reloadPhotos = () => {
    setReload(prev => !prev); // Toggle to trigger useEffect
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/images')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 25)))
      .catch(error => console.error('Error fetching data: ', error));
  }, [reload]);

  return (
    <>
      {/* <h1 className='text-3xl font-bold'>Hola</h1>
      <p>Cuenta: {count}</p>
      <button onClick={() => setCount(count + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Sumar 1
      </button> */}
      {/* <Navbar /> */}
      <Navbar user={{ name: 'José Kuri', email: 'jk@up.mx', photo: 'https://media.discordapp.net/attachments/750831694839545886/1172622670433624186/image.png' }} onReload={reloadPhotos} />
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-10 mt-5'>
          {/* {photos.map(photo => (
            <div key={photo.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <img src={photo.url} alt={photo.title} className='w-full' />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{photo.title}</div>
              </div>
            </div>
          ))} */}

          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} /> // Use PhotoCard component here
          ))}

        </div>
      </div>
    </>
  );
}

export default App;
