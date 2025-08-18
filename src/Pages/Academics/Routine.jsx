import React from 'react'
import Hero from '../../Components/Shared/Hero'
import RoutineViewer from '../../Components/Academics/Routine/RoutineViewer'
import { Helmet } from 'react-helmet'

const Routine = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Routine | BU CSE
                </title>
            </Helmet>
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