import React from 'react'
import Hero from '../Components/Shared/Hero'
import { Helmet } from 'react-helmet'
import PrivacyPolicy from '../Components/Legal/PrivacyPolicy'

const Privacy = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Privacy | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Privacy Policy'}
                subtitle={'How we collect, use, and protect your information at BU CSE.'}
                bgImage={'/assets/privacy.jpg'}
                height='sm'
            />
            <PrivacyPolicy
                lastUpdated="2025-08-10"
                contactEmail="cse@bu.ac.bd"
                address="Department of CSE, University of Barishal, Barishal-8200, Bangladesh"
            />
        </div>
    )
}

export default Privacy