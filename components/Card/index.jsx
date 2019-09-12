/* import { h, Fragment } from 'preact' */
import React, { Fragment } from 'react'

import Link from 'next/link'

import './card.styl'

const Card = props => {
    let {
        title,
        children = '',
        src,
        alt = 'Image cover',
        tag,
    } = props

    return (
        <Link href={`/blog/${title}`}>
            <a className="link">
                <article className="card">
                    <img className="cover" src={src} alt={alt} />
                    <h5 className="title">{title}</h5>
                    <p className="detail">{children}</p>
                    <div className="tag-container">
                        {tag ? (
                            <Link href={`/tag/${tag}`}>
                                <a className="tag">{tag}</a>
                            </Link>
                        ) : (
                            <Fragment />
                        )}
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default Card
