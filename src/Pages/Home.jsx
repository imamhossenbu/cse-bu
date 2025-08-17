import React from 'react'
import Hero from '../Components/Shared/Hero'
import ChairmanMessage from '../Components/Home/ChairmanMessage'
import AboutTeaser from '../Components/Home/AboutTeaser'

const Home = () => {
    return (
        <div>

            <Hero
                title="Department of Computer Science & Engineering"
                subtitle="University of Barishal — advancing learning, research, and innovation in computing."
                bgImage="../src/assets/home.jpeg"
                height="md"
                overlayOpacity={0.5}
            />
            <ChairmanMessage />
            <AboutTeaser />
        </div>
    )
}

export default Home