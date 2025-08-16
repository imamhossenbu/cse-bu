import React from 'react'
import Hero from '../Components/Shared/Hero'

const Faculty = () => {
    return (
        <div>
            <Hero
                title={'Faculty Directory'}
                subtitle={'Academic leadership and the teams behind the scenes.'}
                bgImage={'../src/assets/faculty.jpg'}
                height='sm'
            />
        </div>
    )
}

export default Faculty