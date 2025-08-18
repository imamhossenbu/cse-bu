import React from 'react'
import Hero from '../../Components/Shared/Hero'
import ClubsDirectory from '../../Components/Others/ClubsDirectory'

const Clubs = () => {
    return (
        <div>
            <Hero
                title={'Clubs & Societies'}
                subtitle={'Learn, lead, and have fun—join BU CSE’s student communities.'}
                bgImage={'/assets/club.jpg'}
                height='sm'
            />
            <ClubsDirectory />
        </div>
    )
}

export default Clubs