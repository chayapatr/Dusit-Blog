/* React */
import React, { Fragment } from 'react'

/* Next */
import Head from 'next/head'
import Link from 'next/link'

/* Component */
import NavigationBar from '../components/navigationBar'
import LandingMain from '../components/landingMain'
import LandingMainSelector from '../components/landingMainSelector'

/* CSS */
import '../static/css/init.css'
import '../static/css/landing.css'

/* View */
const Landing = () => {
    return(
        <Fragment>

            <Head>
                <title>Dusit Blog</title>
            </Head>

            <NavigationBar />
            <main id="landing-page">

                <section id="landing-main">

                    <LandingMain name="Hello World" detail="Koisuru Fortune Cookie" src="/static/blog/init/img/anime-girls.jpg" />

                    <aside id="landing-main-selector-aside">
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                        <LandingMainSelector name="Hello World" src="/static/blog/init/img/anime-girls.jpg" />
                    </aside>

                </section>

            </main>

        </Fragment>
    )
}

export default Landing