export interface UserRoot {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    job: string
    role: Role
    picture: Picture
    reviews: Review[]
    bookmarks: Bookmark[]
    socialNetworks: SocialNetwork[]
    profile: Profile
  }
  
  export interface Role {
    id: number
    name: string
    description: string
    type: string
    createdAt: string
    updatedAt: string
  }
  
  export interface Picture {
    id: number
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
  }
  
  export interface Formats {
    thumbnail: Thumbnail
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
  
  export interface Review {
    id: number
    content: string
    createdAt: string
    updatedAt: string
    locale: string
    author: Author
    localizations: any[]
  }
  
  export interface Author {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    job: string
  }
  
  export interface Bookmark {
    id: number
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    author: Author2
  }
  
  export interface Author2 {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    job: string
  }
  
  export interface SocialNetwork {
    id: number
    url: string
    icon: string
  }
  
  export interface Profile {
    id: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    header: Header
    pictures: Picture2[]
    bgImage: BgImage
  }
  
  export interface Header {
    id: number
    theme: string
    label: string
    title: string
  }
  
  export interface Picture2 {
    id: number
    icon: string
    gallery: Gallery[]
  }
  
  export interface Gallery {
    id: number
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats2
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
  }
  
  export interface Formats2 {
    thumbnail: Thumbnail2
    large: Large
    medium: Medium
    small: Small
  }
  
  export interface Thumbnail2 {
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
  
  export interface BgImage {
    id: number
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats3
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
  
  export interface Formats3 {
    thumbnail: Thumbnail3
    medium: Medium2
    small: Small2
    large: Large2
  }
  
  export interface Thumbnail3 {
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
  
  export interface Medium2 {
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
  
  export interface Small2 {
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
  
  export interface Large2 {
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
  