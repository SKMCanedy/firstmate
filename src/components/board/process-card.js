import React from "react";
import { Draggable } from "react-beautiful-dnd";
// import { connect } from 'react-redux';

import "./process-card.css"

export default class ProcessCard extends React.Component {
    render(){
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot)=>(
                    <div
                        className="process-container"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef} 
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </div>
                )}
        </Draggable>
        )
    } 
}

// const mapStateToProps = state => ({
//     tasks: state.firstmate.tasks,
//     columns: state.firstmate.columns,
//     columnOrder: state.firstmate.columnOrder
//   });
  
  
//   export default connect(mapStateToProps)(ProcessCard);

        // <div className="process-card">
        //     <div className="process-desc">I am a process card. I can be in the process bank or a staff card.</div>
        //     <button className="process-delete">&#10006;</button>
        // </div>