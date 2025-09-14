import React, { useState, useEffect,useRef } from 'react';
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
      src: "https://lh3.googleusercontent.com/d/1Col1Xp3m6JhqVNt6a8a8_zL3pDaQ12vV",
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/d/1zHbst7X5BFzHkGiMWF29FIXomY0Qn0c4",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/d/1qfwXvfs0H3rOwizPKbotJhlrK9uEGw57",
    },
    {
      id: 7,
      src: "https://lh3.googleusercontent.com/d/1Fuy07dFcPNuBPBpxTSpreQRYbzhidGp9",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/d/1NI3YTk4vRbV4Xrl5p9De8e0ayL68JWTI",
    },
    {
        id: 2,
        src: "https://lh3.googleusercontent.com/d/1FXfsIOgqeJn11BnYMmkxgHgT2gOg0VEB",
      },
      {
        id: 4,
        src: "https://lh3.googleusercontent.com/d/14uo1KbYzNzvfydMWJLIjpS_QCDSkuvtA",
      },
      {
        id: 8,
        src: "https://lh3.googleusercontent.com/d/1p0u549FicjkeKqS6XXA7ddQfYUm7QckD",
      },
      {
        id: 9,
        src: "https://lh3.googleusercontent.com/d/1vJccEVOnucDsaDxa3DmUzkhw4dGywe6C",
      },
      // {
      //   id: 10,
      //   src: "https://lh3.googleusercontent.com/d/1NI3YTk4vRbV4Xrl5p9De8e0ayL68JWTI",
      // },

  ];

  const hasCheckedCachedImages = useRef(false);


  const emptyImage: ImageType ={
    id: 0,
    src: '',
  };

  const checkedImages = useRef(new Set<number>());

  const [images, setImages] = useState(pics);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState<ImageType>({
    id: 0,
    src: '',
  });

  const handleImageLoad = (imageId: number) => {
    if (!checkedImages.current.has(imageId)) {
      checkedImages.current.add(imageId);
      setLoadedImages(prev => new Set([...prev, imageId]));
    }
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

  useEffect(() => {
    if (hasCheckedCachedImages.current) return; // Only run once
    
    const timer = setTimeout(() => {
      const imgElements = document.querySelectorAll('.gallery-image');
      imgElements.forEach((img) => {
        const htmlImg = img as HTMLImageElement;
        if (htmlImg.complete && htmlImg.naturalHeight !== 0) {
          const matchingImage = images.find(image => image.src === htmlImg.src);
          if (matchingImage) {
            handleImageLoad(matchingImage.id);
          }
        }
      });
      hasCheckedCachedImages.current = true;
    }, 100);
  
    return () => clearTimeout(timer);
  }, [images]);

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
                    ref={(img) => {
                        // Only check once per image
                        if (img && img.complete && img.naturalHeight !== 0 && !checkedImages.current.has(image.id)) {
                        handleImageLoad(image.id);
                        }
                    }}
                    />
                
                {/* Hover overlay */}
                <div className="hover-overlay">
                  <div className="hover-icon">
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
        <i className="ph ph-x"></i>

      </button>
    </div>
  </div>,
  document.body // Renders directly to body, bypassing parent constraints
)}
    </div>
  );
};

export default ScrollableGridGallery;