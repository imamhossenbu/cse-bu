import React from 'react'
import Hero from '../Components/Shared/Hero'
import { Helmet } from 'react-helmet'
import TermsOfUse from '../Components/Legal/TermsOfUse'

const Terms = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Terms | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Terms & Conditions'}
                subtitle={'Your responsibilities and our commitments online.'}
                bgImage={'/assets/terms.jpg'}
                height='sm'
            />
            <TermsOfUse
                effectiveDate="2025-08-10"
                contactEmail="cse@bu.ac.bd"
                address="Department of CSE, University of Barishal, Barishal-8200, Bangladesh"
            />
        </div>
    )
}

export default Terms