import React from 'react'
import Hero from '../../Components/Shared/Hero'
import ProjectsDirectory from '../../Components/Research/ProjectsDirectory'

const Projects = () => {
    return (
        <div>
            <Hero
                title={'Research Projects'}
                subtitle={'Ongoing and completed work across AI, Systems, and Software.'}
                bgImage={'/assets/project.jpg'}
                height='sm'
            />
            <ProjectsDirectory />
        </div>
    )
}

export default Projects