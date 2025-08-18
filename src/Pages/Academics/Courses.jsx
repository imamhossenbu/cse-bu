import React from 'react'
import Hero from '../../Components/Shared/Hero'
import CourseCatalog from '../../Components/Academics/Courses/CourseCatalog'


const Courses = () => {
    return (
        <div>
            <Hero
                title={'Program Curriculum'}
                subtitle={'Structured learning paths from foundations to advanced topics.'}
                bgImage={'/assets/courses.jpg'}
                height='sm'
            />
            <CourseCatalog />
        </div>
    )
}

export default Courses