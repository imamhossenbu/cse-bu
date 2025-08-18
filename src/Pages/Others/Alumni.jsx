import React from 'react'
import Hero from '../../Components/Shared/Hero'
import AlumniDirectory from '../../Components/Others/AlumniDirectory'

const Alumni = () => {
    return (
        <div>
            <Hero
                title={'Our Graduates'}
                subtitle={'Journeys from BU CSE to industry, research, and startups.'}
                bgImage={'/assets/alumni.jpg'}
                height='sm'
            />
            <AlumniDirectory />
        </div>
    )
}

export default Alumni