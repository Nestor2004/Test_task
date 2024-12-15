export async function getPostBySlug(slug) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    return await res.json();
}