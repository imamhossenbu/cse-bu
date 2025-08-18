import React from 'react'
import Hero from '../Components/Shared/Hero'
import AdmissionTabs from '../Components/Admissions/AdmissionTab'
import { Helmet } from 'react-helmet'

const Admission = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Admission | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Admissions'}
                subtitle={'Join BU CSE—programs designed for tomorrow’s innovators.'}
                bgImage={'/assets/admission.jpg'}
                height='sm'
            />
            <AdmissionTabs />
        </div>
    )
}

export default Admission