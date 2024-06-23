export const ID = new Date()

export const DATE = ID.toISOString()

export const HTTP = async () => {
  return await fetch("https://ollorente.github.io/tourscorrecaminos/v1.json")
    .then(res => res.json())
}