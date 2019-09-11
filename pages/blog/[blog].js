import React, { Fragment, useState, useEffect } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { Title, Description, Tag } from 'components/head'

import { useRouter } from 'next/router'

import Error from 'components/error'
import Navbar from 'components/navbar'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import 'stylus/blog.styl'

const contentfulAPI = require('contentful').createClient({
    space: process.env.space_id,
    accessToken: process.env.access_token
})

const Blog = () => {
    const router = useRouter(),
        { blog } = router.query

    const [post, setPost] = useState(false)

    useEffect(() => {
        (async () => {
            const blogData = await fetchBlogData(blog)

            setPost(blogData[0])
        })()
    }, [blog])

    async function fetchBlogData(blog) {
        const entries = await contentfulAPI.getEntries({
            content_type: 'dusitHereModel1',
            'fields.title': blog,
        })
        if (entries.items) return entries.items
    }

    if (post === false) return null
    if (typeof post === 'undefined') return <Error />

    return (
        <Fragment>
            <Head>
                <title>{post.fields.title}</title>
                <Title>{post.fields.title}</Title>
                <Description>{post.fields.summary}</Description>
                <meta
                    property="article:published_time"
                    content={post.sys.createdAt}
                />
                <meta
                    property="article:modified_time"
                    content={post.sys.updatedAt}
                />
                <Tag tags={post.tags} />
            </Head>

            <Navbar alwaysSticky />
            <main id="blog">
                <article id="blog-article">
                    <section className="blog-section">
                        <img
                            id="blog-cover"
                            src={post.fields.thumbnail.fields.file.url}
                            alt={post.fields.thumbnail.fields.description}
                        />
                        <h1 id="blog-header">{post.fields.title}</h1>

                        {documentToReactComponents(post.fields.content)}

                        <aside id="tag-container">
                            {post.fields.tags.map((tag, index) => (
                                <Link key={index} href={`/tag/${tag}`}>
                                    <a className="tag-link">
                                        <h6 className="tag" key={index}>
                                            {tag}
                                        </h6>
                                    </a>
                                </Link>
                            ))}
                        </aside>
                    </section>
                </article>
            </main>
        </Fragment>
    )
}

export default Blog
