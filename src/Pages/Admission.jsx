import React from 'react'
import Hero from '../Components/Shared/Hero'

const Admission = () => {
    return (
        <div>
            <Hero
                title={'Admissions'}
                subtitle={'Join BU CSE—programs designed for tomorrow’s innovators.'}
                bgImage={'../src/assets/admission.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Admission