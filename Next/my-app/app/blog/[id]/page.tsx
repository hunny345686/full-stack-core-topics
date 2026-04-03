

export const revalidate = 10 //Revalidate every 60 sec
async function getPost(slug: string) {
    console.log(slug)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    return res.json();
  }


export default async function Posts({ params }: any) {
    const {id} = await params
    const post = await getPost(id);

    return (
        <div className="blogs">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
}