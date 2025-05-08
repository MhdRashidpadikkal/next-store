export interface Product {
    id: number,
    documentId: string,
    name: string,
    price: number,
    description: string,
    image: {
        url: string
    },
    category: string,
    badge?: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    slug: string
}