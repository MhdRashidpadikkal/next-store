export const fetchAllProducts = async () => {
    const response = await fetch("https://next-store-db.onrender.com/api/products?populate=image");
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.data;
}

export const fetchAllProductsBySlug = async (slug: string) => {
    const response = await fetch(`https://next-store-db.onrender.com/api/products?populate=image&filters[slug][$eq]=${slug}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products by slug');
    }
    const data = await response.json();
    return data.data;
}