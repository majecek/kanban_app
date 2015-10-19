import React from 'react';
import Note from './Note';
import uuid from 'node-uuid';
import Notes from './Notes';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.itemEdited  = this.itemEdited.bind(this)
    }

    render() {

        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addItem}>+</button>
                <Notes items={notes} onEdit={this.itemEdited}/>
            </div>
        );
    }

    addItem() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        })
        console.log('add Item');
    }

    itemEdited(noteID, task) {
        console.log('item edited', noteID, task)
    }
}
