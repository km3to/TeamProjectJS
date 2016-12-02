import React, {Component} from 'react'

class CreatePostView extends Component{
    render(){
        return(
            <form className="create-post-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Create Book</h1>
                <label>
                    <div>Title:</div>
                    <input type="text" name="title" required
                           ref={e => this.titleField = e} />
                </label>
                <label>
                    <div>Author:</div>
                    <input type="text" name="author" required
                           ref={e => this.authorField = e} />
                </label>
                <label>
                    <div>Body:</div>
                    <textarea name="body" rows="10"
                              ref={e => this.bodyField = e} />
                </label>
                <div>
                    <input type="submit" value="Create" />
                </div>
            </form>
        )
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(this.titleField.value,this.authorField.value,this.bodyField.value)
    }
}

export default CreatePostView;