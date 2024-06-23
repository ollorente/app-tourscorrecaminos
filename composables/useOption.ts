import { HTTP } from "~~/utils/fakeDB"

export default () => {
  const CreateOneOption = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Options
      })

    return item
  }

  const GetAllOptions = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Options
      })

    return item
  }

  const GetOneOption = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Options
      })

    return item
  }

  const RemoveOneOption = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Options
      })

    return item
  }

  const UpdateOneOption = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Options
      })

    return item
  }

  return {
    CreateOneOption,
    GetAllOptions,
    GetOneOption,
    RemoveOneOption,
    UpdateOneOption,
  }
}