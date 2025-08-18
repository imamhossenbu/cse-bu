import React from 'react'
import Hero from '../../Components/Shared/Hero'
import PublicationsDirectory from '../../Components/Research/PublicationsDirectory'

const Publications = () => {
    return (
        <div>
            <Hero
                title={'Research Publications'}
                subtitle={'Accepted papers with links to PDFs, code, and data.'}
                bgImage={'/assets/publications.jpg'}
                height='sm'
            />
            <PublicationsDirectory />
        </div>
    )
}

export default Publications
