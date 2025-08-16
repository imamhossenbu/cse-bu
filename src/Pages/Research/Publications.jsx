import React from 'react'
import Hero from '../../Components/Shared/Hero'

const Publications = () => {
    return (
        <div>
            <Hero
                title={'Research Publications'}
                subtitle={'Accepted papers with links to PDFs, code, and data.'}
                bgImage={'../src/assets/publications.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Publications
