/* import { h, Fragment } from 'preact' */
import React, { Fragment } from './node_modules/react'

import Link from './node_modules/next/link'

import './card.styl'

const Card = props => {
    let {
        title,
        children = '',
        src,
        alt = 'Image cover',
        tag,
        href = '',
    } = props

    return (
        <Link href={href}>
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
