export interface LandingPageRoot {
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
  hero: Hero
  team: Team
  about: About
}

export interface Hero {
  id: number
  title: string
  image: Image
  socialNetworks: SocialNetwork[]
}

export interface Image {
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
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium: Medium
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

export interface SocialNetwork {
  id: number
  url: string
  icon: string
}

export interface Team {
  id: number
  theme: string
  header: Header
  cards: Card[]
}

export interface Header {
  id: number
  theme: string
  label: any
  title: string
}

export interface Card {
  id: number
  title: string
  text: string
  description: string
  image: Image2
  socialNetworks: SocialNetwork2[]
}

export interface Image2 {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
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

export interface SocialNetwork2 {
  id: number
  url: string
  icon: string
}

export interface About {
  id: number
  header: Header2
  cards: Card2[]
}

export interface Header2 {
  id: number
  theme: string
  label: string
  title: string
}

export interface Card2 {
  id: number
  title: any
  text: string
  description: string
  image: Image3
  socialNetworks: any[]
}

export interface Image3 {
  data: Data3
}

export interface Data3 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
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

export interface Meta {}
