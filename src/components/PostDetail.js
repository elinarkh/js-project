import React, {useEffect, useState} from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import {withRouter} from 'react-router';


function PostDetail(props) {
  const [data, setData] = useState({hits: []});
  const { id } = props.match.params;
  const { getPost } = props;

  useEffect(() => {
    getPost({
      id, setData
    });

    // const fetchData = async () => {
    //   const data = await fetch(
    //     `${API_URL}/posts/${id}`,
    //   );
    //
    //   const result = await data.json();
    //   setData(result);
    // };
    // fetchData();
  }, [PostDetail, id]);

  return (
    <Container className={"d-flex flex-column"}>
      <img style={{height: 600}} src={data.image}/>
      <h1>{data.title}</h1>
      <div>{data.description}</div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  post: state.post
});

const mapDispatchToProps = {
  getPost: postActions.getPost,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail));

