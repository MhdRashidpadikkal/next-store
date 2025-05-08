export const fetchAllProducts = async () => {
    const response = await fetch("http://localhost:1337/api/products?populate=image");
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.data;
}

export const fetchAllProductsBySlug = async (slug: string) => {
    const response = await fetch(`http://localhost:1337/api/products?populate=image&filters[slug][$eq]=${slug}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products by slug');
    }
    const data = await response.json();
    return data.data;
}