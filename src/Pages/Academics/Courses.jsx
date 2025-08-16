import React from 'react'
import Hero from '../../Components/Shared/Hero'

const Courses = () => {
    return (
        <div>
            <Hero
                title={'Program Curriculum'}
                subtitle={'Structured learning paths from foundations to advanced topics.'}
                bgImage={'../src/assets/courses.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Courses