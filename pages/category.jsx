/* import { h, Fragment } from 'preact' */
import React, { Fragment } from 'react'

import Link from 'next/link'
import Head from 'next/head'

import Navbar from 'components/navbar'
import Card from 'components/Card'

import 'stylus/category.styl'

const TagLink = ({ href = '/', children }) => (
    <Link href={`/tag/${href}`}>
        <a className="tag-link">
            <h6 className="tag">
                {children}
            </h6>
            <div className="tag-underline"></div>
        </a>
    </Link>
)

const Category = () => {
    return (
        <Fragment>
            <Head>
                <title>Category</title>
            </Head>
            <Navbar alwaysSticky />
            <main id="category">
                <aside id="category-aside">
                    <h1 id="aside-title">Category</h1>
                    <h6 id="aside-detail">
                        ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                        มาเถอะมาระเบิดความฝัน
                    </h6>
                    <div id="aside-container">
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                    </div>
                </aside>
                <div id="card-area">
                    {/* This will be on the right side and IS NOT visible on mobile */}
                    <div id="card">
                        <Card
                            title="Bangkok Ipsum"
                            src="/static/mockup/3.jpg"
                            alt="Yae Sakura"
                            tag="Game"
                        >
                            ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                            มาเถอะมาระเบิดความฝัน
                        </Card>
                        <Card
                            title="Bangkok Ipsum"
                            src="/static/mockup/1.jpg"
                            alt="Yae Sakura"
                            tag="Game"
                        >
                            ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                            มาเถอะมาระเบิดความฝัน
                        </Card>
                    </div>

                    {/* This will be on the left side and IS visible on mobile */}
                    <div id="priority-card">
                        <Card
                            title="Bangkok Ipsum"
                            src="/static/mockup/5.jpg"
                            alt="Yae Sakura"
                            tag="Game"
                        >
                            ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ
                            มาเถอะมาระเบิดความฝัน
                        </Card>
                        <Card
                            title="สวัสดีครับแอดมิน"
                            src="/static/mockup/4.jpg"
                            alt="Yae Sakura"
                            tag="Facebook blog"
                        >
                            สักเท่าไหร่คงจะยังนึกเรื่องนี้ขึ้นมา
                            พูดความจริงออกไปเลยผ่านเข้ามา
                        </Card>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Category
