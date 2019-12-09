import React, {useEffect, useState} from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import {withRouter} from 'react-router';


function PostDetail(props) {
  const [data, setData] = useState({hits: []});

  useEffect(() => {
    const fetchData = async () => {
      const { id } = props.match.params;

      const data = await fetch(
        `http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts/${id}`,
      );

      const result = await data.json();
      setData(result);
    };
    fetchData();
  }, []);
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

