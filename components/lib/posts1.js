
export async function getPost(slug,posts) {
    
    const post = posts.find((post) => post.slug === slug);
    return post || null;
  }