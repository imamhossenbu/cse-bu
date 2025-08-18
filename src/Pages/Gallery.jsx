import React from 'react'
import Hero from '../Components/Shared/Hero'
import GalleryGrid from '../Components/Gallery/GalleryGrid'
import { Helmet } from 'react-helmet'


const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Gallery | BU CSE
                </title>
            </Helmet>
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