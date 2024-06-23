import { HTTP } from "~/utils/fakeDB"

export default () => {
  const CreateOneUser = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.users
      })

    return item
  }

  const GetAllUsers = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.users
      })

    return item
  }

  const GetOneUser = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.users
      })

    return item
  }

  const RemoveOneUser = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.users
      })

    return item
  }

  const UpdateOneUser = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.users
      })

    return item
  }

  return {
    CreateOneUser,
    GetAllUsers,
    GetOneUser,
    RemoveOneUser,
    UpdateOneUser,
  }
}