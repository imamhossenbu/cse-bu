import React from 'react'
import Hero from '../Components/Shared/Hero'
import AboutTeaser from '../Components/Home/AboutTeaser'
import Vision from '../Components/About/Vision'
import Mission from '../Components/About/Mission'
import FocusAreas from '../Components/About/FocusAreas'
import CTAAbout from '../Components/About/CTAAbout'
import FAQ from '../Components/About/FAQ'
import Testimonials from '../Components/About/Testimonials'

const About = () => {
    return (
        <div>
            <Hero
                title={'Vision & Mission'}
                subtitle={'Excellence in teaching, impactful research, and service to society.'}
                bgImage={'/assets/about.jpg'}
                overlayOpacity={0.5}
                height='sm'
            />

            <AboutTeaser />
            <Vision />
            <Mission />
            <FocusAreas />
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <FAQ />
            </section>
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <Testimonials />
            </section>
            <CTAAbout />

        </div>
    )
}

export default About