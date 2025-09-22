import React, { useState, useEffect,useRef } from 'react';
import { createPortal } from 'react-dom';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
// yet-another-react-lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// react-photo-album
import { Photo, ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import photos from "./Photo";

const ScrollableGridGallery = () => {
  // Sample images with different aspect ratios
  //data pic untuk gallery

  // interface ImageType {
  //   id: number;
  //   src: string;
  // }

  const hasCheckedCachedImages = useRef(false);
  const checkedImages = useRef(new Set<string>());
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (src: string) => {
    if (!checkedImages.current.has(src)) {
      checkedImages.current.add(src);
      setLoadedImages(prev => new Set([...prev, src]));
    }
  };
  type SelectablePhoto = Photo & {
    selected?: boolean;
  };
  
  const [allphotos, setPhotos] = useState<SelectablePhoto[]>(() =>
    photos.map((photo: Photo) => ({
      ...photo,
      href: photo.src,
      label: "Open image in a lightbox",
    })),
  );
  
  useEffect(() => {
    if (hasCheckedCachedImages.current) return; // Only run once
    
    const timer = setTimeout(() => {
      const imgElements = document.querySelectorAll('.gallery-image');
      imgElements.forEach((img) => {
        const htmlImg = img as HTMLImageElement;
        if (htmlImg.complete && htmlImg.naturalHeight !== 0) {
          const matchingImage = photos.find(image => image.src === htmlImg.src);
          if (matchingImage) {
            handleImageLoad(matchingImage.src);
          }
        }
      });
      hasCheckedCachedImages.current = true;
    }, 100);
  
    return () => clearTimeout(timer);
  }, [photos]);


  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();

  return <ColumnsPhotoAlbum photos={photos} />;




//   const emptyImage: ImageType ={
//     id: 0,
//     src: '',
//   };


//   const [images, setImages] = useState(pics);
//   const [loadedImages, setLoadedImages] = useState(new Set());
//   const [selectedImage, setSelectedImage] = useState<ImageType>({
//     id: 0,
//     src: '',
//   });



//   const handleImageError = (imageId: number) => {
//     console.log(`Image ${imageId} failed to load`);
//   };

//   const openModal = (image :ImageType) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden'; // Prevent background scrolling
//   };

//   const closeModal = () => {
//     setSelectedImage(emptyImage);
//     document.body.style.overflow = 'unset'; // Restore background scrolling
//   };

//   // Close modal with Escape key
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape' && selectedImage) {
//         closeModal();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'unset'; // Cleanup on unmount
//     };
//   }, [selectedImage]);


//   return (
//     <div className="gallery-container p-2 animate__animated animate__fadeInDown animate__slower">
//       <div className="gallery-wrapper">
        
//         {/* Grid Container */}
//         <div className="gallery-grid">
//         {images.map((image) => (
//             <div key={image.id} className="gallery-item">
//               <div className="image-container" onClick={() => openModal(image)}>
//                 {/* Loading placeholder */}
//                 {!loadedImages.has(image.id) && (
//                   <div className="loading-placeholder">
//                     <div className="loading-spinner"></div>
//                   </div>
//                 )}
                
//                 {/* Image */}
//                 <img
//                     src={image.src}
//                     className={`gallery-image ${loadedImages.has(image.id) ? 'loaded' : 'loading'}`}
//                     onLoad={() => handleImageLoad(image.id)}
//                     onError={() => handleImageError(image.id)}
//                     ref={(img) => {
//                         // Only check once per image
//                         if (img && img.complete && img.naturalHeight !== 0 && !checkedImages.current.has(image.id)) {
//                         handleImageLoad(image.id);
//                         }
//                     }}
//                     />
                
//                 {/* Hover overlay */}
//                 <div className="hover-overlay">
//                   <div className="hover-icon">
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//      {/* Modal */}


//      {(selectedImage.src !== "")  && createPortal(
//   <div className="modal-overlay" onClick={closeModal}>
//     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//       <img
//         src={selectedImage.src}
//         className="modal-image"
//       />
//       <button
//         className="modal-close"
//         onClick={closeModal}
//         aria-label="Close modal"
//       >
//         <i className="ph ph-x"></i>

//       </button>
//     </div>
//   </div>,
//   document.body // Renders directly to body, bypassing parent constraints
// )}
//     </div>
//   );
};

export default ScrollableGridGallery;