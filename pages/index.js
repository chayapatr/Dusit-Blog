/* React */
import React, { Fragment } from 'react'

/* Next */
import Head from 'next/head'
import { withAmp } from 'next/amp'

/* Static */
import '../static/css/init.css'
import '../static/css/blog.css'

/* Markdown */
import content from '../content/init.md'

/* Component */
const Home = () => {

    /* Defination */
    let { html , 
        attributes:{ 
            title, 
            cats, 
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
                <meta name="description" content={""} />
                <meta name="author" content={""} />
                <meta name="keywords" content={""} />
                <link rel="icon" href={""} />
                <meta name="revisit-after" content="7 days" />
                <meta httpEquiv="content-language" content="en" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={""} />
                <meta property="og:site_name" content={title} />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />

                <meta property="og:image" content={""} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content={title} />

                <meta property="article:author" content="aomkirby123" />
                <meta property="article:published_time" content={date} />
                <meta property="article:modified_time" content={date} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content="Introducing Maidreamin API, a RESTful API for getting data from Maidreamin MBK Bangkok" />
                <meta name="twitter:site" content={""} />
                <meta name="twitter:creator" content={""} />
                <meta name="twitter:image" content={""} />
            </Head>
            <main id="main-blog">
                <article id="main-article">

                    <header>
                        <h1 id="blog-heading">{title}</h1>
                    </header>
                    <time id="blog-date" dateTime={date}>{ new Date(`${date}`).toLocaleDateString()  }</time>

                    <img id='blog-thumbnail' src={thumbnail} alt={title} />

                    <section dangerouslySetInnerHTML={{ __html: html }} />

                </article>
            </main>
            
        </Fragment>
    )
}

/* Export Component */
let ExportComponent
if(process.env.node_env === "development"){ 
    ExportComponent = Home
} else {
    ExportComponent = withAmp(Home, { hybrid: true })
}

export default ExportComponent