export interface SidebarMenuRoot {
    data: Data
    meta: Meta
  }
  
  export interface Data {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    navigation: Navigation
    footer:Footer
  }
  
  export interface Navigation {
    id: number
    links: Link[]
    leftButton: LeftButton
    rightButton: RightButton[]
    socialNetworks: SocialNetwork[]
  }
  
  export interface Link {
    id: number
    href: string
    label: string
    target: any
    isExternal: boolean
    icon: any
  }
  
  export interface LeftButton {
    id: number
    href: string
    label: string
    target: any
    isExternal: boolean
    icon: any
  }
  
  export interface RightButton {
    id: number
    href: string
    label: string
    target: string
    isExternal: boolean
    icon: string
  }
  
  export interface SocialNetwork {
    id: number
    url: string
    icon: string
  }
  export interface Footer {
    id: number
    links: any[]
    rightLinks: RightLink[]
  }
  
  export interface RightLink {
    id: number
    href: string
    label: string
    target: string
    isExternal: boolean
    icon: any
  }
  export interface Meta {}
  