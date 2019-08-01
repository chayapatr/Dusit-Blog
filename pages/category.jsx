import { h, Fragment } from 'preact'

import Link from 'next/link'

import Navbar from 'components/Navbar'
import Card from 'components/Card'

import 'stylus/category.styl'

const TagLink = ({ href = "/", children }) => (
    <Link href={`/tag/${href}`}>
        <a className="category-tag-link">
            {children}
        </a>
    </Link>
)

const Category = () => {
    return(
        <Fragment>
            <Navbar alwaysSticky />
            <main id="category-main">
                <aside id="category-aside">
                    <h1 id="category-title">Category</h1>
                    <h6 id="category-aside-detail">
                        ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
                        มาเถอะมาระเบิดความฝัน
                    </h6>
                    <div id="category-aside-container">
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                        <TagLink href="/hello">Hello</TagLink>
                    </div>
                </aside>
                <div id="category-main-card-area">
                    {/* This will be on the right side and IS NOT visible on mobile */}
                    <div id="landing-main-card-container">
                        <Card title="Bangkok Ipsum" src="/static/mockup/3.jpg" alt="Yae Sakura" tag="Game">
                        ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
                        มาเถอะมาระเบิดความฝัน
                        </Card>
                        <Card title="Bangkok Ipsum" src="/static/mockup/1.jpg" alt="Yae Sakura" tag="Game">
                        ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
                        มาเถอะมาระเบิดความฝัน
                        </Card>
                    </div>

                    {/* This will be on the left side and IS visible on mobile */}
                    <div id="landing-main-card-priority-container">
                        <Card title="Bangkok Ipsum" src="/static/mockup/5.jpg" alt="Yae Sakura" tag="Game">
                        ต้องถึงที่ปลายทางที่มีวันเกิดนี้มีความรักฉันจะเจอ 
                        มาเถอะมาระเบิดความฝัน
                        </Card>
                        <Card title="สวัสดีครับแอดมิน" src="/static/mockup/4.jpg" alt="Yae Sakura" tag="Facebook blog">
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