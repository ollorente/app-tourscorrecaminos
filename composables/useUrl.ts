import { HTTP } from "~~/utils/fakeDB"

export default () => {
  const CreateOneUrl = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.links
      })

    return item
  }

  const GetAllUrls = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.links
      })

    return item
  }

  const GetOneUrl = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.links
      })

    return item
  }

  const RemoveOneUrl = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.links
      })

    return item
  }

  const UpdateOneUrl = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.links
      })

    return item
  }

  return {
    CreateOneUrl,
    GetAllUrls,
    GetOneUrl,
    RemoveOneUrl,
    UpdateOneUrl,
  }
}