
export interface ICarData {
  id: number
  attach: "large" | "executive" | "small"
  brand: string
  url: string | null
  urlFormat: "png" | "jpg" | "webp"

  createUrl(): void

}



export type TCars = ICarData[]