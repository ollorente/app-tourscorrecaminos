import { DATE, ID } from "~~/utils/fakeDB"

export interface IUser {
  id: string
  login: string
  pass: string
  nicename: string
  email: string
  url: string
  registered: string,
  activationKey: string
  status: number
  displayName: string
}

export const User = (db: IUser) => {
  return {
    id: String(db.id || ID),
    login: String(db.login || ""),
    pass: String(db.pass),
    nicename: String(db.nicename),
    email: String(db.email),
    url: String(db.url || ""),
    registered: db.registered,
    activationKey: String(db.activationKey || ""),
    status: Number(db.status || 0),
    displayName: String(db.displayName || ""),
  }
}
