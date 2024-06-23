import { HTTP } from "~~/utils/fakeDB"

export default () => {
  const CreateOneComment = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Comments
      })

    return item
  }

  const GetAllComments = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Comments
      })

    return item
  }

  const GetOneComment = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Comments
      })

    return item
  }

  const RemoveOneComment = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Comments
      })

    return item
  }

  const UpdateOneComment = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Comments
      })

    return item
  }

  return {
    CreateOneComment,
    GetAllComments,
    GetOneComment,
    RemoveOneComment,
    UpdateOneComment,
  }
}