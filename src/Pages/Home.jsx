import React from 'react'
import Hero from '../Components/Shared/Hero'
import ChairmanMessage from '../Components/Home/ChairmanMessage'
import AboutTeaser from '../Components/Home/AboutTeaser'
import HomeNoticesEvents from '../Components/Home/HomeNoticesEvents'
import NoticesMarque from '../Components/NoticesMarque'
import FacultySpotlight from '../Components/Home/FacultySpotlight'
import ResearchHighlights from '../Components/Home/ResearchHighlights'
import DeptStats from '../Components/Home/DeptStats'
import CTAApply from '../Components/Home/CTAApply'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BU CSE</title>
            </Helmet>


            <Hero
                title="Department of Computer Science & Engineering"
                subtitle="University of Barishal — advancing learning, research, and innovation in computing."
                bgImage="/assets/home.jpeg"
                height="md"
                overlayOpacity={0.5}
            />
            <ChairmanMessage />
            <AboutTeaser />
            <HomeNoticesEvents />
            <FacultySpotlight />
            <ResearchHighlights />
            <DeptStats />
            <CTAApply />
        </div>
    )
}

export default Home