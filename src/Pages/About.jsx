import React from 'react'
import Hero from '../Components/Shared/Hero'

const About = () => {
    return (
        <div>
            <Hero
                title={'Vision & Mission'}
                subtitle={'Excellence in teaching, impactful research, and service to society.'}
                bgImage={'../src/assets/about.jpg'}
                overlayOpacity={0.5}
                height='sm'
            />

        </div>
    )
}

export default About