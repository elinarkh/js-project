import React, {useState , useEffect} from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";


function PostDetail(props) {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
//        console.log(this.props.post)
    const fetchData = async () => {
        const data = await fetch(
            `http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts/${1}`,
        );

        const result = await data.json();
        setData(result);
    };
    fetchData();
    }, []);
        return (
            <div className="post-detail">
                <div>
                    <div className="post-block">
                        <div>{ data.title }</div>
                        <div>{ data.description }</div>
                        <div className="post-image" style={{ backgroundImage: `url(${data.image })` }}/>
                    </div>
                </div>
            </div>

        )
}
const mapStateToProps = (state) => ({
    post: state.post
})

const mapDispatchToProps = {
    getPost: postActions.getPost,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail);

