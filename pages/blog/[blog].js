import React, { Fragment } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { Title, Description, Tag, SEOImage } from 'components/head'

import Error from 'components/error'
import Navbar from 'components/navbar'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import 'stylus/blog.styl'

const Blog = ({ post }) => {
    let options = {
        renderNode: {
            'embedded-asset-block': node => (
                <img
                    className="blog-image"
                    src={`https:${node.data.target.fields.file.url}`}
                    alt={post.fields.thumbnail.fields.description}
                />
            ),
        },
    }

    if (typeof post === 'undefined') return <Error />

    return (
        <Fragment>
            <Title>{post.fields.title}</Title>
            <Description>{post.fields.summary}</Description>
            <Tag tags={post.tags} />
            <SEOImage
                href={`https:${post.fields.thumbnail.fields.file.url}`}
                alt={post.fields.thumbnail.fields.description}
            />
            <Head>
                <title>{post.fields.title}</title>
                <meta
                    property="article:published_time"
                    content={post.sys.createdAt}
                />
                <meta
                    property="article:modified_time"
                    content={post.sys.updatedAt}
                />
            </Head>

            <Navbar alwaysSticky />
            <main id="blog">
                <article id="blog-article">
                    <section id="blog-section">
                        <img
                            id="blog-cover"
                            src={`https:${post.fields.thumbnail.fields.file.url}`}
                            alt={post.fields.thumbnail.fields.description}
                        />
                        <h1 id="blog-header">{post.fields.title}</h1>
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

                        <section id="blog-content">
                            {documentToReactComponents(
                                post.fields.content,
                                options
                            )}
                        </section>
                    </section>
                </article>
            </main>
        </Fragment>
    )
}

Blog.getInitialProps = async ctx => {
    const contentfulAPI = require('contentful').createClient({
        space: process.env.space_id,
        accessToken: process.env.access_token,
    })

    async function fetchBlogData(blog) {
        const entries = await contentfulAPI.getEntries({
            content_type: 'dusitHereModel1',
            'fields.title': blog,
        })
        if (entries.items) return entries.items
    }

    const blogData = await fetchBlogData(ctx.query.blog)
    return {
        post: blogData[0],
    }
}

export default Blog
