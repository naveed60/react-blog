function Blog(props) {
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <ul>
        <li>ID: {post.id}</li>
        <li>Title: {post.title}</li>
        <li>Content: {post.content}</li>
      </ul>
    </div>
  ));

  return <div>{content}</div>;
}

export default Blog;
