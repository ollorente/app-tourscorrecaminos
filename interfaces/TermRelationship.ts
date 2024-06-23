import { ID } from "~~/utils/fakeDB"

export interface ITermRelationship {
  id: string
  termTaxonomyId: string
  termOrder: number
}

export const TermRelationship = (db: ITermRelationship) => {
  return {
    id: String(db.id || ID),
    termTaxonomyId: String(db.termTaxonomyId),
    termOrder: Number(db.termOrder || 0),
  }
}
