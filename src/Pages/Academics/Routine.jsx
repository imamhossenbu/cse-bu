import React from 'react'
import Hero from '../../Components/Shared/Hero'
import RoutineViewer from '../../Components/Academics/Routine/RoutineViewer'

const Routine = () => {
    return (
        <div>
            <Hero
                title={'Class Routine'}
                subtitle={'Find Your Daily Class Schedule'}
                height='sm'
                bgImage={'/assets/syllabus.jpg'}
            />
            <RoutineViewer />
        </div>
    )
}

export default Routine