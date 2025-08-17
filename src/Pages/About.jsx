import React from 'react'
import Hero from '../Components/Shared/Hero'
import AboutTeaser from '../Components/Home/AboutTeaser'
import Vision from '../Components/About/Vision'
import Mission from '../Components/About/Mission'
import FocusAreas from '../Components/About/FocusAreas'
import CTAAbout from '../Components/About/CTAAbout'

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

            <AboutTeaser />
            <Vision />
            <Mission />
            <FocusAreas />
            <CTAAbout />

        </div>
    )
}

export default About