import React, { Fragment } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'

import Error from 'components/error'
import Navbar from 'components/navbar'

import 'stylus/blog.styl'

const Blog = () => {
    const router = useRouter(),
        { blog } = router.query

    const blogContent = {
        title: "แอบมองเธออยู่บนนั้น",
        tags: [
            "Game", 
            "Osu!", 
            "Yeah boi!"
        ],
        cover: {
            src: "/static/mockup/1.jpg",
            alt: "Mockup image"
        },
        contents: [
            `ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
            มาเถอะมาระเบิดความฝันสักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา พูดความจริงออกไปเลยผ่านเข้ามา`,
            "ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ มาเถอะมาระเบิดความฝัน"
        ]
    }

    const { 
        title,
        tags,
        cover,
        contents
    } = blogContent

    let error = false

    if(error) return <Error />

    return(
        <Fragment>
            <Navbar alwaysSticky />
            <main id="blog">
                <article id="blog-article">
                    <img id="blog-cover" src={cover.src} alt={cover.alt} />
                    <h1 id="blog-header">
                        { title }
                    </h1>

                    <p>Params: { blog }</p>

                    {contents.map((content, index) => <p key={index}>{content}</p>)}

                    <aside id="tag-container">
                        {tags.map((tag, index) => 
                            <Link href={`/tag/${tag}`}>
                                <a className="tag-link">
                                    <h6 className="tag" key={index}>{tag}</h6>
                                </a>
                            </Link>
                        )}
                    </aside>

                </article>
            </main>
        </Fragment>
    )
}

export default Blog