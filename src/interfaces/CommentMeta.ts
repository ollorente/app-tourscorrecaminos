import { DATE, ID } from "~/utils/fakeDB"

export interface ICommentMeta {
  id: string
  commentId: string
  key: string
  value: string
}

export const CommentMeta = (db: ICommentMeta) => {
  return {
    id: String(db.id || ID),
    commentId: String(db.commentId),
    key: String(db.key || ""),
    value: String(db.value || ""),
  }
}
