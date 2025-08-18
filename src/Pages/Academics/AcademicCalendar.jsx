import React from 'react'
import Hero from '../../Components/Shared/Hero'
import AcademicCalendarList from '../../Components/Academics/Calendar/AcademicCalendarList'
import { Helmet } from 'react-helmet'

const AcademicCalendar = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Academic Calendar | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Academic Calendar'}
                subtitle={'Key dates for semesters, exams, and holidays at BU CSE.'}
                bgImage={'/assets/calendar.jpg'}
                height='sm'
            />
            <AcademicCalendarList />
        </div>
    )
}

export default AcademicCalendar