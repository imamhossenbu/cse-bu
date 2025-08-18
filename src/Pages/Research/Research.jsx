import React from 'react'
import Hero from '../../Components/Shared/Hero'
import ResearchOverview from '../../Components/Research/ResearchOverview'

const Research = () => {
    return (
        <div>
            <Hero
                title={'Research'}
                subtitle={'From theory to real-world impact in computing.'}
                bgImage={'/assets/research.jpg'}
                height='sm'
            />
            <ResearchOverview />
        </div>
    )
}

export default Research