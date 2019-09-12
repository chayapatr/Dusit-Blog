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

const CategoryTag = ({ tagData, displayTags }) => {
    let tag = {
        firstHalf: tagData.slice(0, tagData.length / 2),
        secondHalf: tagData.slice(tagData.length / 2, tagData.length)
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

                    <div id="card">
                        { tag ? tag.firstHalf.map((blog, index) => (
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
                        )) : null}
                    </div>

                    <div id="priority-card">
                        { tag ? tag.secondHalf.map((blog, index) => (
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
                        )) : null}
                    </div>

                </div>
            </main>
        </Fragment>
    )
}

CategoryTag.getInitialProps = async ctx => {
    const contentfulAPI = require('contentful').createClient({
        space: process.env.space_id,
        accessToken: process.env.access_token,
    })

    async function fetchTag(tag) {
        const entries = await contentfulAPI.getEntries({
            content_type: 'dusitHereModel1',
            "fields.tags[in]": tag,
            order: "sys.updatedAt",
            limit: 12
        })
        if (entries.items) return entries.items
    }

    async function fetchTags() {
        const entries = await contentfulAPI.getEntries({
            content_type: 'displayTag',
            limit: 6
        })
        if (entries.items) return entries.items
    }

    let tagData = await fetchTag(ctx.query.tag),
        tagsData = await fetchTags()

    return {
        tagData: tagData,
        displayTags: tagsData
    }
}

export default CategoryTag