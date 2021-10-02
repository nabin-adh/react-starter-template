import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

import { actionCreators } from "../store/Posts";
import Layout from "../components/Layout";

function Posts(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(actionCreators.requestPosts());
  }, []);

  if (posts.loading) return <Layout>Loading posts...</Layout>;
  return (
    <Layout>
      <h1>Post list</h1>
      <ListGroup>
        {posts.posts.map((p) => (
          <ListGroupItem key={p.id}>{p.title}</ListGroupItem>
        ))}
      </ListGroup>
    </Layout>
  );
}

export default Posts;
