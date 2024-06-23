import { TermTaxonomy } from "~/interfaces/TermTaxonomy"
import { HTTP } from "~/utils/fakeDB"
import Paginator from "~/utils/paginator"

export default () => {
  const CreateOneTermTaxonomy = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermTaxonomies
      })

    return item
  }

  const GetAllTermTaxonomies = async (options: any) => {
    const P = Paginator(options.limit, options.page)

    const items = await HTTP()
      .then(async (response) => {
        return response.termTaxonomies
          .filter((e: any) => e.taxonomy === "category")
          .sort(function (a: any, b: any) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })
          .slice(P.page, P.limit)
          .map(TermTaxonomy)
      })

    return items
  }

  const GetOneTermTaxonomy = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermTaxonomies
      })

    return item
  }

  const RemoveOneTermTaxonomy = async (id: string) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermTaxonomies
      })

    return item
  }

  const UpdateOneTermTaxonomy = async (id: string, data: any) => {
    const item = await HTTP()
      .then(async (response) => {
        return response.TermTaxonomies
      })

    return item
  }

  return {
    CreateOneTermTaxonomy,
    GetAllTermTaxonomies,
    GetOneTermTaxonomy,
    RemoveOneTermTaxonomy,
    UpdateOneTermTaxonomy,
  }
}