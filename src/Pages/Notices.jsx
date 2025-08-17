import React from 'react'
import Hero from '../Components/Shared/Hero'
import NoticesEventsPage from '../Components/Notices/NoticesEvents'


const Notices = () => {
    return (
        <div>
            <Hero
                title={'Notices & Announcements'}
                subtitle={'Official updates, deadlines, and alerts from BU CSE.'}
                bgImage={'../src/assets/notice.jpg'}
                height='sm'
            />
            <NoticesEventsPage />
        </div>
    )
}

export default Notices