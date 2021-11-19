import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'chillbroskie',
    userImg: 'https://i.ibb.co/gzhkXnH/Ml-ZRk-II1-400x400.jpg',
    img: 'https://i.ibb.co/gzhkXnH/Ml-ZRk-II1-400x400.jpg',
    caption: 'looking good!',
  },
  {
    id: '123',
    username: 'chillbroskie',
    userImg: 'https://i.ibb.co/gzhkXnH/Ml-ZRk-II1-400x400.jpg',
    img: 'https://i.ibb.co/gzhkXnH/Ml-ZRk-II1-400x400.jpg',
    caption: 'looking good!',
  },
];

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post  key={post.id} id={post.id} 
          username={post.username} userImg={post.userImg} 
          img={post.img} 
          caption={post.caption} 
        />
      ))}
    </div>
  )
}

export default Posts
