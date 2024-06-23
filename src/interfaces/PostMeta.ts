import { DATE, ID } from "~/utils/fakeDB"

export interface IPostMeta {
  id: string
  postId: string
  key: string
  value: string
}

export const PostMeta = (db: IPostMeta) => {
  return {
    id: String(db.id || ID),
    postId: String(db.postId),
    key: String(db.key || ""),
    value: String(db.value || ""),
  }
}
