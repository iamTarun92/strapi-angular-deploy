export interface LoginRoot {
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
    loginForm: LoginForm
    bgImage: BgImage
  }
  
  export interface LoginForm {
    id: number
    inputs: Input[]
    links: Link[]
  }
  
  export interface Input {
    id: number
    label: string
    placeholder: string
    type: string
    icon: string
  }
  
  export interface Link {
    id: number
    href: string
    label: string
    target: any
    isExternal: boolean
    icon: any
  }
  
  export interface BgImage {
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    related: Related[]
  }
  
  export interface Formats {
    thumbnail: Thumbnail
    medium: Medium
    small: Small
    large: Large
  }
  
  export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
  }
  
  export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
  }
  
  export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
  }
  
  export interface Large {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
  }
  
  export interface Related {
    __type: string
    id: number
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Meta {}
  