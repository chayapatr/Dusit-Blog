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
                    <figure className="cover">
                        <img className="image-data" src={src} alt={alt} />
                    </figure>
                    <h5 className="title">{title}</h5>
                    <p className="detail">{children}</p>
                    <div className="tag-container">
                        {tag.map((tagName, index) => (
                            <Link key={index} href={`/category/${tagName}`}>
                                <a className="tag">{tagName}</a>
                            </Link>
                        ))}
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default Card
