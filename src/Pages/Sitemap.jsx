import React from 'react'
import Hero from '../Components/Shared/Hero'
import { Helmet } from 'react-helmet'
import SitemapTree from '../Components/Sitemap/SitemapTree'

const Sitemap = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Sitemap | BU CSE
                </title>
            </Helmet>
            <Hero
                title={'Sitemap'}
                subtitle={'Browse all sections—academics, research, people, and more.'}
                bgImage={'/assets/sitemap.jpg'}
                height='sm'
            />
            <SitemapTree />
        </div>
    )
}

export default Sitemap