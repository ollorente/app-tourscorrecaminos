import { Post } from "~~/interfaces/Post"
import { HTTP } from "~~/utils/fakeDB"
import Paginator from "~~/utils/paginator"

export default () => {
  const CreateOnePost = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.posts
      })

    return item
  }

  const GetAllPosts = async (options: any) => {
    const P = Paginator(options.limit, options.page)

    const item = await HTTP()
      .then(async (response) => {
        return response.posts
          .filter((e: any) => e.status === "publish")
          .filter((e: any) => e.type === "post")
          .sort(function (a: any, b: any) {
            if (a.order > b.order) {
              return 1;
            }
            if (a.order < b.order) {
              return -1;
            }
            return 0;
          })
          .slice(P.page, P.limit)
          .map(Post)
      })

    return item
  }

  const GetOnePost = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response.posts.find((e: any) => e.id === id)
        return item
      })

    return item
  }

  const RemoveOnePost = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.posts
      })

    return item
  }

  const UpdateOnePost = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.posts
      })

    return item
  }

  return {
    CreateOnePost,
    GetAllPosts,
    GetOnePost,
    RemoveOnePost,
    UpdateOnePost,
  }
}