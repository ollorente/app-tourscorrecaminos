import { HTTP } from "~/utils/fakeDB"

export default () => {
  const CreateOneLink = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Links
      })

    return item
  }

  const GetAllLinks = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Links
      })

    return item
  }

  const GetOneLink = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Links
      })

    return item
  }

  const RemoveOneLink = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Links
      })

    return item
  }

  const UpdateOneLink = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Links
      })

    return item
  }

  return {
    CreateOneLink,
    GetAllLinks,
    GetOneLink,
    RemoveOneLink,
    UpdateOneLink,
  }
}