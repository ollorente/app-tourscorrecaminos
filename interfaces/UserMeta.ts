import { ID } from "~~/utils/fakeDB"

export interface IUserMeta {
  id: string
  userId: string
  key: string
  value: string
}

export const UserMeta = (db: IUserMeta) => {
  return {
    id: String(db.id || ID),
    userId: String(db.userId),
    key: String(db.key || ""),
    value: String(db.value || ""),
  }
}
