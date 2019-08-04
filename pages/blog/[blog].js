import React, { Fragment } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { Title, Description, Tag } from 'components/head'

import { useRouter } from 'next/router'

import Error from 'components/error'
import Navbar from 'components/navbar'

import 'stylus/blog.styl'

const Blog = () => {
    const router = useRouter(),
        { blog } = router.query

    const blogContent = {
        title: 'แอบมองเธออยู่บนนั้น',
        tags: ['Game', 'Osu!', 'Yeah boi!'],
        cover: {
            src: '/static/mockup/1.jpg',
            alt: 'Mockup image',
        },
        seo: {
            title: 'แอบมองเธออยู่บนนั้น', // 60 - 70 Characters
            description:
                'ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ มาเถอะมาระเบิดความฝันสักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา พูดความจริงออกไปเลยผ่านเข้ามา',
            publish: '2019-07-03T16:30:00+07:00', // Year-Month-Day-T-Hour:Minute:Second+07:00 (GMT+7)
            modifiy: '2019-07-03T16:30:00+07:00', // Leave blank if there is no edit
        },
        contents: [
            `ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
            มาเถอะมาระเบิดความฝันสักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา พูดความจริงออกไปเลยผ่านเข้ามา`,
            'ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ มาเถอะมาระเบิดความฝัน',
        ],
    }

    const { title, tags, seo, cover, contents } = blogContent

    let error = false

    if (error) return <Error />

    return (
        <Fragment>
            <Head>
                <title>{title}</title>

                <Title>{seo.title ? seo.title : title}</Title>
                <Description>
                    {seo.description ? seo.description : contents[0]}
                </Description>

                <meta property="article:published_time" content={seo.publish} />
                {seo.modify ? (
                    <meta
                        property="article:modified_time"
                        content={seo.modify}
                    />
                ) : null}

                <Tag tags={tags} />
            </Head>

            <Navbar alwaysSticky />
            <main id="blog">
                <article id="blog-article">
                    <section className="blog-section">
                        <img id="blog-cover" src={cover.src} alt={cover.alt} />
                        <h1 id="blog-header">{title}</h1>

                        <p>Params: {blog}</p>

                        {contents.map((content, index) => (
                            <p key={index}>{content}</p>
                        ))}

                        <aside id="tag-container">
                            {tags.map((tag, index) => (
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
