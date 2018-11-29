import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/postActions";
import PropTypes from 'prop-types';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    render() {
        if (Object.keys(this.props.post).length > 0) {
            this.props.posts.unshift(this.props.post)
        }
        const postItems = this.props.posts.map(post => (
            <div key={[post.id]+Math.floor(Math.random()*100)}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
    return ({
        posts: state.posts.items,
        post: state.posts.item,
    })
};

export default connect(mapStateToProps, {fetchPosts})(Posts)