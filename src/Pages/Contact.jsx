import React from 'react'
import Hero from '../Components/Shared/Hero'
import ContactInfoCards from '../Components/Contact/ContactInfoCards'
import DepartmentMap from '../Components/Contact/DepartmentMap'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Contact | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Contact Us'}
                subtitle={'Reach the Department of CSE, University of Barishal—office, email, and phone.'}
                bgImage={'/assets/contact.jpg'}
                height='sm'
            />
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <ContactInfoCards />
            </section>

            <DepartmentMap place="Department of Computer Science and Engineering, University of Barishal" />



        </div>
    )
}

export default Contact