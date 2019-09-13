import React, { Fragment } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { Title, Description, Tag, SEOImage } from 'components/head'

import Error from 'components/error'
import Navbar from 'components/navbar'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import 'stylus/blog.styl'

const Blog = ({ post, displayTags }) => {
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

            <Navbar alwaysSticky displayTags={displayTags} />
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
                                <Link key={index} href={`/category/${tag}`}>
                                    <a className="tag-link">
                                        <h6 className="tag" key={index}>
                                            {tag}
                                        </h6>
                                    </a>
                                </Link>
                            ))}
                        </aside>
                        <time id="publish-date">
                            Publish:
                            {new Date(post.sys.createdAt).toLocaleString()}
                        </time>

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
    let { fetchBlogData, fetchTags } = require('helpers/contentful')

    let blogData = await fetchBlogData(ctx.query.blog),
        tagsData = await fetchTags()

    return {
        post: blogData[0],
        displayTags: tagsData,
    }
}

export default Blog
