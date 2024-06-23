import { DATE, ID } from "~~/utils/fakeDB"

export interface IPost {
  id: string
  author: string
  date: string
  dateGMT: string
  content: string
  title: string
  excerpt: string
  status: string
  commentStatus: string
  pingStatus: string
  password: string
  name: string
  toPing: string
  pinged: string
  modified: string
  modifiedGMT: string
  contentFiltered: string
  parent: string
  guid: string
  order: number
  type: string
  mimeType: string
  commentsCount: number
}

export const Post = (db: IPost) => {
  return {
    id: String(db.id || ID),
    author: String(db.author),
    date: db.date || "0000-00-00T00:00:00.000z",
    dateGMT: db.dateGMT || "0000-00-00T00:00:00.000z",
    content: String(db.content || ""),
    title: String(db.title || ""),
    excerpt: String(db.excerpt || ""),
    status: String(db.status || ""),
    commentStatus: String(db.commentStatus || ""),
    pingStatus: String(db.pingStatus || ""),
    password: String(db.password || ""),
    name: String(db.name || ""),
    toPing: String(db.toPing || ""),
    pinged: String(db.pinged || ""),
    modified: db.modified || "0000-00-00T00:00:00.000z",
    modifiedGMT: db.modifiedGMT || "0000-00-00T00:00:00.000z",
    contentFiltered: String(db.contentFiltered || ""),
    parent: String(db.parent || ""),
    guid: String(db.guid || ""),
    order: Number(db.order || 0),
    type: String(db.type || ""),
    mimeType: String(db.mimeType || ""),
    commentsCount: Number(db.commentsCount || 0),
  }
}
