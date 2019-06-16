/* React */
import React, { Fragment } from 'react'

/* Next */
import Head from 'next/head'
import { withAmp } from 'next/amp'

/* Static */
import initStyle from '../static/css/init.css'
import blogStyle from '../static/css/blog.css'

/* Markdown */
import content from '../content/init.md'

/* Component */
const Home = () => {

    /* Defination */
    let { html , 
        attributes:{ 
            title, 
            date,
            thumbnail
        } 
    } = content;
    /* View */
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={"test"} />
                <meta name="author" content={"test"} />
                <meta name="keywords" content={"test"} />
                <link rel="icon" href={"test"} />
                <meta httpEquiv="content-language" content="en" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={"test"} />
                <meta property="og:site_name" content={title} />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta property="og:image" content={"test"} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content={title} />

                <meta property="article:author" content="aomkirby123" />
                <meta property="article:published_time" content={date} />
                <meta property="article:modified_time" content={date} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content="Introducing Maidreamin API, a RESTful API for getting data from Maidreamin MBK Bangkok" />
                <meta name="twitter:site" content={"test"} />
                <meta name="twitter:creator" content={"test"} />
                <meta name="twitter:image" content={"test"} />

                <style amp-custom="">{initStyle.replace(/\n/g, '' )} {blogStyle.replace(/\n/g, '' ) }</style>
            </Head>

            <main id="main-blog">
                <article id="main-article">

                    <header>
                        <h1 id="blog-heading">{title}</h1>
                    </header>
                    <time id="blog-date" dateTime={date}>{ new Date(`${date}`).toLocaleDateString()  }</time>

                    <amp-img
                        id='blog-thumbnail' 
                        layout='responsive'
                        src={thumbnail} 
                        alt={title}
                        width={640} 
                        height={360}
                    />

                    <section dangerouslySetInnerHTML={{ __html: html }} />

                </article>
            </main>

        </Fragment>
    )
}

/* Export Component */
export default withAmp(Home)