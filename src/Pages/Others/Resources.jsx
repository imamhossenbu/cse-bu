import React from 'react'
import Hero from '../../Components/Shared/Hero'
import ResourcesHub from '../../Components/Others/ResourceHub'
import { Helmet } from 'react-helmet'

const Resources = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Resources | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Resources'}
                subtitle={'Forms, guides, and tools for BU CSE students and staff.'}
                bgImage={'/assets/resourse.jpg'}
                height='sm'
            />
            <ResourcesHub />
        </div>
    )
}

export default Resources