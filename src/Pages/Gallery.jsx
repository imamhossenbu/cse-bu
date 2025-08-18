import React from 'react'
import Hero from '../Components/Shared/Hero'
import GalleryGrid from '../Components/Gallery/GalleryGrid'


const Gallery = () => {
    return (
        <div>
            <Hero
                title={'Photo Gallery'}
                subtitle={'From classrooms to hackathons—our journey in pictures.'}
                bgImage={'/assets/gallery.jpg'}
                height='sm'
            />
            <GalleryGrid />
        </div>
    )
}

export default Gallery