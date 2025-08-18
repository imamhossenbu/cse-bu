import React from 'react'
import Hero from '../Components/Shared/Hero'
import NoticesEventsPage from '../Components/Notices/NoticesEvents'
import { Helmet } from 'react-helmet'


const Notices = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Notices | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Notices & Announcements'}
                subtitle={'Official updates, deadlines, and alerts from BU CSE.'}
                bgImage={'/assets/notice.jpg'}
                height='sm'
            />
            <NoticesEventsPage />
        </div>
    )
}

export default Notices