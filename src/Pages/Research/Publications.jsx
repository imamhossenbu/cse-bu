import React from 'react'
import Hero from '../../Components/Shared/Hero'
import PublicationsDirectory from '../../Components/Research/PublicationsDirectory'
import { Helmet } from 'react-helmet'

const Publications = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Publications | BU CSE
                </title>
            </Helmet>
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
