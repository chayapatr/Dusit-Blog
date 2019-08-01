/* import { h, Fragment } from 'preact' */
import React, { Fragment } from 'react'

import Slider from 'components/slider'
import Navbar from 'components/navbar'
import Heading from 'components/heading'
import Panel from 'components/panel'
import Card from 'components/Card'

import 'stylus/landing.styl'

const Landing = () => {
    return (
        <Fragment>
            <div id="landing">
                <Slider />
            </div>

            <Navbar />

            <main id="landing">
                <Panel />

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

                    <Heading adaptable={true}>Lastest</Heading>

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

                <Heading>Category</Heading>
            </main>
        </Fragment>
    )
}

export default Landing
