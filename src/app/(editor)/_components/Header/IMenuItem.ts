export interface IMenuItem {
  id?: string
  name: string
  url?: string
  icon?: React.ReactNode
  target?: "_self" | "_blank"
  external?: boolean
  children?: IMenuItem[]
  comingSoon?: boolean
  new?: boolean
}
