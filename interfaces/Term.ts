import { ID } from "~~/utils/fakeDB"

export interface ITerm {
  id: string
  name: string
  slug: string
  termGroup: string
}

export const Term = (db: ITerm) => {
  return {
    id: String(db.id || ID),
    name: String(db.name || ""),
    slug: String(db.slug || ""),
    termGroup: String(db.termGroup),
  }
}
