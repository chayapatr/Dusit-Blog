export const contentfulAPI = require('contentful').createClient({
    space: process.env.space_id,
    accessToken: process.env.access_token,
})

export async function fetchDisplayTop() {
    const entries = await contentfulAPI.getEntries({
        content_type: 'displayBlog',
        'fields.title': 'Blogs which appear on top of the landing page',
        limit: 5,
    })
    if (entries.items) return entries.items
}

export async function fetchLatest() {
    const entries = await contentfulAPI.getEntries({
        content_type: 'dusitHereModel1',
        order: 'sys.createdAt',
        limit: 6,
    })
    if (entries.items) return entries.items
}

export async function fetchPopular() {
    const entries = await contentfulAPI.getEntries({
        content_type: 'dusitHereModel1',
        order: 'sys.revision',
        limit: 6,
    })
    if (entries.items) return entries.items
}

export async function fetchTags() {
    const entries = await contentfulAPI.getEntries({
        content_type: 'displayTag',
        limit: 6,
    })
    if (entries.items) return entries.items
}

export async function fetchByTag(tag, limit = 12) {
    const entries = await contentfulAPI.getEntries({
        content_type: 'dusitHereModel1',
        "fields.tags[in]": tag,
        order: "sys.updatedAt",
        limit: limit
    })
    if (entries.items) return entries.items
}

export async function fetchBlogData(blog) {
    const entries = await contentfulAPI.getEntries({
        content_type: 'dusitHereModel1',
        'fields.title': blog,
    })
    if (entries.items) return entries.items
}