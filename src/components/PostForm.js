import React, {Component} from 'react'
import {connect} from 'react-redux';
import {createPost} from "../actions/postActions";
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.createPost(post)
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label> <br/>
                        <input type="text" name="title" onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Body : </label> <br/>
                        <textarea name="body" onChange={this.onChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    post: state.posts.item,
});

export default connect(mapStateToProps, {createPost})(PostForm);