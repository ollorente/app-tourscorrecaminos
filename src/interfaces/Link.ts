import { DATE, ID } from "~/utils/fakeDB"

export interface ILink {
  id: string
  url: string
  name: string
  image: string
  target: string
  description: string
  visible: string
  owner: string
  rating: number
  updated: string
  rel: string
  notes: string
  rss: string
}

export const Link = (db: ILink) => {
  return {
    id: String(db.id || ID),
    url: String(db.url || ""),
    name: String(db.name || ""),
    image: String(db.image || ""),
    target: String(db.target || ""),
    description: String(db.description || ""),
    visible: String(db.visible || ""),
    owner: String(db.owner),
    rating: Number(db.rating || 0),
    updated: db.updated || "0000-00-00T00:00:00.000z",
    rel: String(db.rel || ""),
    notes: String(db.notes || ""),
    rss: String(db.rss || ""),
  }
}
