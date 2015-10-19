import React from 'react';
import Note from './Note';

export default class Notes extends React.Component {

    render() {
        const notes = this.props.items;

        return (
            <div>
                <ul>{notes.map(this.renderNote)}</ul>
            </div>
        );
    }

    renderNote(note) {
        return (
            <li key={`note${note.id}`}>
                <Note task={note.task} onEdit={this.props.onEdit.bind(null, note.id)} />
            </li>
        );
    }
}
