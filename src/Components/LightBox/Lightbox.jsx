// import React from "react";
// import Lightbox from 'react-spring-lightbox';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const LightBox = ({ photos, viewerIsOpen, onClose }) => {

//     console.log('photos =>',photos)

//     if (!photos) {
//         // Handle the case when photos is undefined.
//         return null;
//     }

//     return (
//         <Lightbox
//             // images={[{ src: photos.src, alt: 'Lightbox Image' }]}
//             images={photos?.map(photo => ({ src: photo.img, alt: photo.title }))}
//             currentIndex={0}
//             isOpen={viewerIsOpen}
//             onClose={onClose}
//             onPrev={gotoPrevious}
//             onNext={gotoNext}
//             renderPrevButton={({ canPrev, onPrev }) => (
//                 <button onClick={gotoPrevious} disabled={!canPrev} className="gallarybox_prevButton" >
//                     <FaChevronLeft />
//                 </button>
//             )}
//             renderNextButton={({ canNext, onNext }) => (
//                 <button onClick={gotoNext} disabled={!canNext} className="gallarybox_nextButton" >
//                     <FaChevronRight />
//                 </button>
//             )}
//             className="cool-class"
//             style={{ background: "#000000b3" }}
//             singleClickToZoom={true}
//             pageTransitionConfig={{ // Custom react-spring config for open/close animation
//                 from: { opacity: 0, transform: 'scale(0.5)' },
//                 enter: { opacity: 1, transform: 'scale(1)' },
//                 leave: { opacity: 0, transform: 'scale(0.5)' },
//             }}
//         />
//     );
// };

// export default LightBox;

import React, { useState } from "react";
import Lightbox from 'react-spring-lightbox';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const LightBox = ({ photos, viewerIsOpen, onClose, currentIndex, setCurrentIndex }) => {
    const gotoPrevious = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    const gotoNext = () => setCurrentIndex((currentIndex + 1) % photos.length);

    if (!photos) {
        // Handle the case when photos is undefined.
        return null;
    }

    return (
        <div className="lightBoxWrapper">
            {
                viewerIsOpen &&
                <span onClick={onClose} className="closeBtn"><IoIosCloseCircle/></span>
            }
            <Lightbox
                images={photos.map(photo => ({ src: photo.image_url, alt: photo?.title }))}
                currentIndex={currentIndex}
                isOpen={viewerIsOpen}
                onClose={onClose}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                renderPrevButton={({ canPrev, onPrev }) => (
                    <button onClick={gotoPrevious} disabled={!canPrev} className="gallarybox_prevButton lightBoxBtns">
                        <FaChevronLeft />
                    </button>
                )}
                renderNextButton={({ canNext, onNext }) => (
                    <button onClick={gotoNext} disabled={!canNext} className="gallarybox_nextButton lightBoxBtns">
                        <FaChevronRight />
                    </button>
                )}
                className="cool-class"
                style={{ background: "#000000b3" }}
                singleClickToZoom={true}
                pageTransitionConfig={{
                    from: { opacity: 0, transform: 'scale(0.5)' },
                    enter: { opacity: 1, transform: 'scale(1)' },
                    leave: { opacity: 0, transform: 'scale(0.5)' },
                }}
            />
        </div>
    );
};

export default LightBox;

