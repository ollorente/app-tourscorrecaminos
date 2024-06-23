import { HTTP } from "~~/utils/fakeDB"

export default () => {
  const CreateOneTermRelationship = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermRelationships
      })

    return item
  }

  const GetAllTermRelationships = async (options: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermRelationships
      })

    return item
  }

  const GetOneTermRelationship = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermRelationships
      })

    return item
  }

  const RemoveOneTermRelationship = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermRelationships
      })

    return item
  }

  const UpdateOneTermRelationship = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermRelationships
      })

    return item
  }

  return {
    CreateOneTermRelationship,
    GetAllTermRelationships,
    GetOneTermRelationship,
    RemoveOneTermRelationship,
    UpdateOneTermRelationship,
  }
}