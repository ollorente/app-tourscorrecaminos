import { DATE, ID } from "~/utils/fakeDB"

export interface IOption {
  id: string
  name: string
  value: string
  autoload: string
}

export const Option = (db: IOption) => {
  return {
    id: String(db.id || ID),
    name: String(db.name || ""),
    value: String(db.value || ""),
    autoload: String(db.autoload || ""),
  }
}
