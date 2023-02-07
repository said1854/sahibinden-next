import { useRouter } from "next/router";
const Post = () => {
  const router = useRouter();
  const { title } = router.query;

  return <p>Post: {title}</p>;
};

export default Post;
