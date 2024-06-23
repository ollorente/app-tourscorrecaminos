import { DATE, ID } from "~~/utils/fakeDB"

export interface ITermMeta {
  id: string
  termId: string
  metaKey: string
  metaValue: string
  createdAt: string
  updatedAt: string
}

export const TermMeta = (db: ITermMeta) => {
  return {
    id: String(db.id || ID),
    termId: String(db.termId),
    metaKey: String(db.metaKey || ""),
    metaValue: String(db.metaValue || ""),
    createdAt: db.createdAt || DATE,
    updatedAt: db.updatedAt || DATE,
  }
}
