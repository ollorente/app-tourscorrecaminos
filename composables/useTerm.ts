import { HTTP } from "~~/utils/fakeDB"

export default () => {
  const CreateOneTerm = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Terms
      })

    return item
  }

  const GetAllTerms = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Terms
      })

    return item
  }

  const GetOneTerm = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Terms
      })

    return item
  }

  const RemoveOneTerm = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Terms
      })

    return item
  }

  const UpdateOneTerm = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.Terms
      })

    return item
  }

  return {
    CreateOneTerm,
    GetAllTerms,
    GetOneTerm,
    RemoveOneTerm,
    UpdateOneTerm,
  }
}