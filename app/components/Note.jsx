import React from 'react';

export default class Note extends React.Component {

    constructor(props) {
        super(props)

        this.checkEnter = this.checkEnter.bind(this)
        this.edit = this.edit.bind(this)
        this.finishEdit = this.finishEdit.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderTask = this.renderTask.bind(this)

        this.state = {
            editing: false
        }
    }

    render() {

        const editing = this.state.editing


        return (
            <div>
                {editing ? this.renderEdit() : this.renderTask()}
            </div>);
    }

    renderEdit() {
        return (
            <input type="text" autofocus={true} defaultValue={this.props.task} onblur={this.finishEdit} onKeyPress={this.checkEnter} />
        )
    }

    renderTask() {
        return ( <div onClick={this.edit}>{this.props.task}</div>)
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    finishEdit(e) {
        this.props.onEdit(e.target.value)

        this.setState({
            editing: false
        })
    }

    checkEnter(e) {
        if(e.key === 'Enter') {
            this.finishEdit(e)
        }
    }
}
