import React ,{useState,useEffect}from 'react'
import "./Gallery.css";
import { Link } from 'react-router-dom';
const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [error,setError] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getPhotos();
      if (data.status==="success") {
        setPhotos(data.photos);
      }else{
        setError(data.message);
      }
    };

    fetchPhotos();
  }, []);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      const data = await getPhotos(); // Get all photos if query is empty
      setPhotos(data.photos);
      setError('');
    } else {
      const data = await searchPhotos(query);
      if (data.status === "success") {
        setPhotos(data.photos);
      } else {
        setPhotos([]);
        setError(data.message);
      }
    }
  };

  // Handle photo deletion
  const handleDelete = async (photoId) => {
    const data = await deletePhoto(photoId);
    console.log(data);
    if (data.status === "success") {
      setPhotos(photos.filter(photo => photo.id !== photoId));
    } else{
      setError(data.message);
    }
  }
}

export default Gallery
