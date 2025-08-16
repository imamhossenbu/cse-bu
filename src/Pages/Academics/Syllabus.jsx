import React from 'react'
import Hero from '../../Components/Shared/Hero'

const Syllabus = () => {
    return (
        <div>
            <Hero
                title={'Syllabus'}
                subtitle={'Official course outlines, credits, and learning outcomes.'}
                bgImage={'/src/assets/syllabus.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Syllabus