import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Photo.css";
const Photo = () => {
    const { id } = useParams(); 
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchPhoto = async () => {
          const data = await getPhoto(id);
          console.log(data);
          if (data.status === "success") {
            setPhoto(data.photo);
          } else {
            setError(data.message);
          }
        };
    
        fetchPhoto();
      }, [id]);

      if (error) {
        return <p className = "error-message">{error}</p>;
      }
    
      if (!photo) {
        return <p>Loading photo...</p>;
      }
}

export default Photo