export interface ContactRoot {
    data: Data[]
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
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  