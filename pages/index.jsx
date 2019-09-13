/* import { h, Fragment } from 'preact' */
import React, { Fragment } from 'react'

import Head from 'next/head'

import Slider from 'components/slider'
import Navbar from 'components/navbar'
import Heading from 'components/heading'
import Panel from 'components/panel'
import Card from 'components/card'

import 'stylus/landing.styl'

const Landing = ({ sortByLatest, sortByPopular, displayTop, displayTags }) => {
    let latest = {
            firstHalf: sortByLatest.slice(0, sortByLatest.length / 2),
            secondHalf: sortByLatest.slice(
                sortByLatest.length / 2,
                sortByLatest.length
            ),
        },
        popular = {
            firstHalf: sortByPopular.slice(0, sortByPopular.length / 2),
            secondHalf: sortByPopular.slice(
                sortByPopular.length / 2,
                sortByPopular.length
            ),
        }

    return (
        <Fragment>
            <Head>
                <title>Dusit Here</title>
            </Head>

            <div id="landing">
                <Slider displayTop={displayTop} />
            </div>

            <Navbar displayTags={displayTags} />

            <main id="landing">
                <Panel popular={popular} />

                <div id="card-area">
                    <div id="card">
                        {latest.firstHalf.map((blog, index) => (
                            <Card
                                key={index}
                                title={blog.fields.title}
                                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                                alt={blog.fields.thumbnail.fields.description}
                                tag={blog.fields.tags}
                            >
                                {blog.fields.summary}
                            </Card>
                        ))}
                    </div>

                    <Heading adaptable={true}>Latest</Heading>

                    {/* This will be on the left side and IS visible on mobile */}
                    <div id="priority-card">
                        {latest.secondHalf.map((blog, index) => (
                            <Card
                                key={index}
                                title={blog.fields.title}
                                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                                alt={blog.fields.thumbnail.fields.description}
                                tag={blog.fields.tags}
                            >
                                {blog.fields.summary}
                            </Card>
                        ))}
                    </div>
                </div>

                <Heading>Category</Heading>
            </main>
        </Fragment>
    )
}

Landing.getInitialProps = async ctx => {
    const contentfulAPI = require('contentful').createClient({
        space: process.env.space_id,
        accessToken: process.env.access_token,
    })

    async function fetchDisplayTop() {
        const entries = await contentfulAPI.getEntries({
            content_type: 'displayBlog',
            'fields.title': 'Blogs which appear on top of the landing page',
            limit: 5,
        })
        if (entries.items) return entries.items
    }

    async function fetchLatest() {
        const entries = await contentfulAPI.getEntries({
            content_type: 'dusitHereModel1',
            order: 'sys.createdAt',
            limit: 6,
        })
        if (entries.items) return entries.items
    }

    async function fetchPopular() {
        const entries = await contentfulAPI.getEntries({
            content_type: 'dusitHereModel1',
            order: 'sys.revision',
            limit: 6,
        })
        if (entries.items) return entries.items
    }

    async function fetchTags() {
        const entries = await contentfulAPI.getEntries({
            content_type: 'displayTag',
            limit: 6,
        })
        if (entries.items) return entries.items
    }

    let displayTopData = await fetchDisplayTop(),
        latestData = await fetchLatest(),
        popularBlog = await fetchPopular(),
        tagsData = await fetchTags()

    return {
        displayTop: displayTopData[0].fields.blogs,
        sortByLatest: latestData,
        sortByPopular: popularBlog,
        displayTags: tagsData,
    }
}

export default Landing
