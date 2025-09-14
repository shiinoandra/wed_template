import React, { useState, useEffect } from 'react';

const ScrollableGridGallery = () => {
  // Sample images with different aspect ratios
  const sampleImages = [
    { id: 1, src: '/api/placeholder/400/300', alt: 'Landscape image' },
    { id: 2, src: '/api/placeholder/300/400', alt: 'Portrait image' },
    { id: 3, src: '/api/placeholder/400/400', alt: 'Square image' },
    { id: 4, src: '/api/placeholder/500/300', alt: 'Wide landscape' },
    { id: 5, src: '/api/placeholder/300/500', alt: 'Tall portrait' },
    { id: 6, src: '/api/placeholder/350/350', alt: 'Square image 2' },
    { id: 7, src: '/api/placeholder/450/300', alt: 'Wide image' },
    { id: 8, src: '/api/placeholder/300/450', alt: 'Tall image' },
    { id: 9, src: '/api/placeholder/400/250', alt: 'Banner style' },
    { id: 10, src: '/api/placeholder/250/400', alt: 'Narrow portrait' },
    { id: 11, src: '/api/placeholder/380/380', alt: 'Square image 3' },
    { id: 12, src: '/api/placeholder/420/280', alt: 'Landscape 2' },
  ];

  const [images, setImages] = useState(sampleImages);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleImageError = (imageId: number) => {
    console.log(`Image ${imageId} failed to load`);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <h1 className="gallery-title">
          Scrollable Grid Gallery
        </h1>
        
        {/* Grid Container */}
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="image-container">
                {/* Loading placeholder */}
                {!loadedImages.has(image.id) && (
                  <div className="loading-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
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

        {/* Load More Button */}
        <div className="load-more-container">
          <button
            onClick={() => {
              const newImages = sampleImages.map((img, index) => ({
                ...img,
                id: images.length + index + 1,
              }));
              setImages(prev => [...prev, ...newImages]);
            }}
            className="load-more-button"
          >
            Load More Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableGridGallery;