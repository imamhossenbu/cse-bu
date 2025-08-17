import React from 'react'
import Hero from '../../Components/Shared/Hero'
import AcademicCalendarList from '../../Components/Academics/Calendar/AcademicCalendarList'

const AcademicCalendar = () => {
    return (
        <div>
            <Hero
                title={'Academic Calendar'}
                subtitle={'Key dates for semesters, exams, and holidays at BU CSE.'}
                bgImage={'../src/assets/calendar.jpg'}
                height='sm'
            />
            <AcademicCalendarList />
        </div>
    )
}

export default AcademicCalendar