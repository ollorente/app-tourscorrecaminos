import { ID } from "~/utils/fakeDB"

export interface ITermTaxonomy {
  id: string
  termId: string
  taxonomy: string
  description: string
  parent: string
  count: number
}

export const TermTaxonomy = (db: ITermTaxonomy) => {
  return {
    id: String(db.id || ID),
    termId: String(db.termId),
    taxonomy: String(db.taxonomy || ""),
    description: String(db.description || ""),
    parent: String(db.parent),
    count: Number(db.count || 0),
  }
}
