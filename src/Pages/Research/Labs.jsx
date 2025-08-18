import React from 'react'
import Hero from '../../Components/Shared/Hero'
import LabsDirectory from '../../Components/Research/LabsDirectory'
import { Helmet } from 'react-helmet'

const Labs = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Labs | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Labs Directory'}
                subtitle={'Explore BU CSE’s labs, focus areas, and faculty leads.'}
                bgImage={'/assets/lab.jpg'}
                height='sm'
            />
            <LabsDirectory />
        </div>
    )
}

export default Labs