import Link from "next/link";


const getPost = async ()=>{

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts",{
        cache:"force-cache" // SSG
    })
    return posts.json()
}

export default async function Posts(){
    const allPosts =  await getPost()

    return(
        <ul>
            {allPosts.map((post:any)=>(
                <div key={post.id} className="blogs">
                <Link target="_blank" href={`/blog/${post.id}`}>{post.title}</Link>
              </div>
            ))}
        </ul>
    )


}