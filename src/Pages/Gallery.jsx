import React from 'react'
import Hero from '../Components/Shared/Hero'

const Gallery = () => {
    return (
        <div>
            <Hero
                title={'Photo Gallery'}
                subtitle={'From classrooms to hackathons—our journey in pictures.'}
                bgImage={'../src/assets/gallery.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Gallery