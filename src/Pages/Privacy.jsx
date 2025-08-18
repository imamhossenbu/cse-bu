import React from 'react'
import Hero from '../Components/Shared/Hero'

const Privacy = () => {
    return (
        <div>
            <Hero
                title={'Privacy Policy'}
                subtitle={'How we collect, use, and protect your information at BU CSE.'}
                bgImage={'/assets/privacy.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Privacy