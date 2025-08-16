import React from 'react'
import Hero from '../../Components/Shared/Hero'

const Alumni = () => {
    return (
        <div>
            <Hero
                title={'Our Graduates'}
                subtitle={'Journeys from BU CSE to industry, research, and startups.'}
                bgImage={'../src/assets/alumni.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Alumni