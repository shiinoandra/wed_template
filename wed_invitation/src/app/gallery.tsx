import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';


const ScrollableGridGallery = () => {
  // Sample images with different aspect ratios
  //data pic untuk gallery

  interface ImageType {
    id: number;
    src: string;
  }


  const pics = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/d/1FXfsIOgqeJn11BnYMmkxgHgT2gOg0VEB",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/d/14uo1KbYzNzvfydMWJLIjpS_QCDSkuvtA",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/d/1p0u549FicjkeKqS6XXA7ddQfYUm7QckD",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/d/1vJccEVOnucDsaDxa3DmUzkhw4dGywe6C",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/d/1NI3YTk4vRbV4Xrl5p9De8e0ayL68JWTI",
    }
  ];


  const emptyImage: ImageType ={
    id: 0,
    src: '',
  };

  const [images, setImages] = useState(pics);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState<ImageType>({
    id: 0,
    src: '',
  });

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleImageError = (imageId: number) => {
    console.log(`Image ${imageId} failed to load`);
  };

  const openModal = (image :ImageType) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(emptyImage);
    document.body.style.overflow = 'unset'; // Restore background scrolling
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [selectedImage]);

  return (
    <div className="gallery-container p-2 animate__animated animate__fadeInDown animate__slower">
      <div className="gallery-wrapper">
        
        {/* Grid Container */}
        <div className="gallery-grid">
        {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="image-container" onClick={() => openModal(image)}>
                {/* Loading placeholder */}
                {!loadedImages.has(image.id) && (
                  <div className="loading-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                
                {/* Image */}
                <img
                  src={image.src}
                  className={`gallery-image ${loadedImages.has(image.id) ? 'loaded' : 'loading'}`}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id)}
                />
                
                {/* Hover overlay */}
                <div className="hover-overlay">
                  <div className="hover-icon">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
     {/* Modal */}


     {(selectedImage.src !== "")  && createPortal(
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={selectedImage.src}
        className="modal-image"
      />
      <button
        className="modal-close"
        onClick={closeModal}
        aria-label="Close modal"
      >
        ×
      </button>
    </div>
  </div>,
  document.body // Renders directly to body, bypassing parent constraints
)}
    </div>
  );
};

export default ScrollableGridGallery;