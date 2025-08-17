import React from 'react'
import Hero from '../Components/Shared/Hero'
import AdmissionTabs from '../Components/Admissions/AdmissionTab'

const Admission = () => {
    return (
        <div>
            <Hero
                title={'Admissions'}
                subtitle={'Join BU CSE—programs designed for tomorrow’s innovators.'}
                bgImage={'../src/assets/admission.jpg'}
                height='sm'
            />
            <AdmissionTabs />
        </div>
    )
}

export default Admission