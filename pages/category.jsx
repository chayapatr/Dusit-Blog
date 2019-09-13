/* import { h, Fragment } from 'preact' */
import React, { Fragment } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import Navbar from 'components/navbar'
import Card from 'components/card'

import 'stylus/category.styl'

const TagLink = ({ href = '/', children }) => (
    <Link href={href}>
        <a className="tag-link">
            <h6 className="tag">
                {children}
            </h6>
            <div className="tag-underline"></div>
        </a>
    </Link>
)

const Category = ({ sortByLatest, displayTags }) => {
    let latest = {
        firstHalf: sortByLatest.slice(0, sortByLatest.length / 2),
        secondHalf: sortByLatest.slice(sortByLatest.length / 2, sortByLatest.length)
    }

    return (
        <Fragment>
            <Head>
                <title>Category</title>
            </Head>
            <Navbar alwaysSticky displayTags={displayTags} />
            <main id="category">
                <aside id="category-aside">
                    <h1 id="aside-title">Category</h1>
                    <h6 id="aside-detail">
                    </h6>
                    <div id="aside-container">
                        {displayTags[0].fields.tags.map((tag, index ) =>
                            <TagLink key={index} href={`/category/${tag}`}>{tag}</TagLink>
                        )}
                    </div>
                </aside>

                <div id="card-area">
                    {/* This will be on the right side and IS NOT visible on mobile */}
                    <div id="card">
                        { latest.firstHalf.map((blog, index) => (
                            <Card
                                key={index}
                                title={blog.fields.title}
                                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                                alt={blog.fields.thumbnail.fields.description}
                                tag={blog.fields.tags}
                            >
                                ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                                มาเถอะมาระเบิดความฝัน
                            </Card>
                        ))}
                    </div>

                    {/* This will be on the left side and IS visible on mobile */}
                    <div id="priority-card">
                        { latest.secondHalf.map((blog, index) => (
                            <Card
                                key={index}
                                title={blog.fields.title}
                                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                                alt={blog.fields.thumbnail.fields.description}
                                tag={blog.fields.tags}
                            >
                                ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                                มาเถอะมาระเบิดความฝัน
                            </Card>
                        ))}
                    </div>

                </div>
            </main>
        </Fragment>
    )
}

Category.getInitialProps = async ctx => {
    let { fetchLatest, fetchTags} = require("helpers/contentful")

    let latestData = await fetchLatest(),
        tagsData = await fetchTags()

    return {
        sortByLatest: latestData,
        displayTags: tagsData
    }
}

export default Category
