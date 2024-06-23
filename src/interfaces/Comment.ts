import { DATE, ID } from "~/utils/fakeDB"

export interface IComment {
  id: string
  postId: string
  author: string
  authorEmail: string
  authorUrl: string
  authorIP: string
  date: string
  dateGMT: string
  content: string
  karma: number
  approved: string
  agent: string
  type: string
  parent: string
  userId: string
}

export const Comment = (db: IComment) => {
  return {
    id: String(db.id || ID),
    postId: String(db.postId),
    author: String(db.author || ""),
    authorEmail: String(db.authorEmail || ""),
    authorUrl: String(db.authorUrl || ""),
    authorIP: String(db.authorIP || "0.0.0.0"),
    date: db.date || "0000-00-00T00:00:00.000z",
    dateGMT: db.dateGMT || "0000-00-00T00:00:00.000z",
    content: String(db.content || ""),
    karma: Number(db.karma || 0),
    approved: String(db.approved || ""),
    agent: String(db.agent || ""),
    type: String(db.type || ""),
    parent: String(db.parent),
    userId: String(db.userId),
  }
}
