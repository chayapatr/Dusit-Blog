import { h, Fragment } from 'preact'

import Link from 'next/link'

import './card.css'

const Card = ({ title, children = "", src, alt = "Image cover", tag, href = "" }) => {
  return(
    <Link href={href}>
      <a className="card-link">
        <article className="card">
          <img className="card-cover" src={src} alt={alt} />
          <h5 className="card-title">{title}</h5>
          <p className="card-detail">
            { children }
          </p>
          <div className="card-tag-container">
            {tag ?
            <Link href={`/tag/${tag}`}>
              <a className="card-tag">{tag}</a>
            </Link>
            : <Fragment></Fragment>}
          </div>
        </article>
      </a>
    </Link>
  )
}

export default Card