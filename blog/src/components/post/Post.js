import Card from "react-bootstrap/Card";
import "./Post.scss";
import CommentsList from "../commentsList/CommentsList";
import PostHeader from "../postHeader/PostHeader";

const Post = ({ data: { userId = 0, id = 0, title = "", body = "" } }) => {
  //data è la props di post, la sua struttura è tra {}
  return (
    <Card className="border-radius-none">
      <Card.Header className="bg-white text-bold border-bottom-0">
        <PostHeader userId={userId}></PostHeader>
      </Card.Header>
      <Card.Body className="py-1 pb-2">
        <div className="row">
          <div className="col-2 col-md-1"></div>
          <div className="col-10 col-md-11">
            <Card.Title className="post-title">S{title}</Card.Title>
            <Card.Text className="post.body">{body}</Card.Text>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white">
        <CommentsList postId={id}></CommentsList>
      </Card.Footer>
    </Card>
  );
};

export default Post;

//<CommentsList postId={id}></CommentsList>  tramite id carico commenti
