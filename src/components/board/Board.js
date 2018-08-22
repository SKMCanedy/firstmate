import React, { Component } from 'react';
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from 'react-redux';

import Column from "./column";
import { dndEndSameColumn, dndEndNewColumn } from "../../actions"

const Container = styled.div`
  display: flex;
`

class Board extends Component {

  reviewDragEnd = result => {
        const { destination, source } = result;
        //if user didn't change a draggable, then leave as is
        if (!destination){
            return;
        }

        //if user moved a draggable but put it back into its original spot
        if (destination.droppableId === source.draggableId && destination.index === source.index){
            return;
        }
        
        const start = this.props.columns[source.droppableId];
        const finish = this.props.columns[destination.droppableId]

        
        if (start === finish){
            this.props.dispatch(dndEndSameColumn(result, start)) // Draggable stays in the same column/droppable
        } else {
            this.props.dispatch(dndEndNewColumn(result, start, finish)) // Draggable is in a different column/droppable
        }
  }

  // onDragEnd = result => {
  //   const { destination, source, draggableId } = result;
  //   //if user didn't change it, then leave as is
  //   if (!destination){
  //     return;
  //   }

  //   //if user moved it but put it back into its original spot
  //   if (destination.droppableId === source.draggableId && destination.index === source.index){
  //     return;
  //   }

  //   //getting column & tasks (avoiding mutating state so creates a new array)
  //   const start = this.props.columns[source.droppableId];
  //   const finish = this.props.columns[destination.droppableId]

  //   // If draggable stays in the same column/droppable
  //   if (start === finish){
  //     const newTaskIds = Array.from(start.taskIds);

  //     //modifies the newTaskIds array - saying we want to remove 1 item
  //     newTaskIds.splice(source.index, 1)
  //     newTaskIds.splice(destination.index, 0, draggableId)

  //     const newColumn = {
  //       ...start,
  //       taskIds: newTaskIds
  //     }

  //     const newState = {
  //       ...this.state,
  //       columns: {
  //         ...this.state.columns,
  //         [newColumn.id]: newColumn
  //       }
  //     }

    //   this.setState(newState);
    //   return;
    // }

    // //if draggable moves to a different droppable
    // const startTaskIds = Array.from(start.taskIds);
    // startTaskIds.splice(source.index, 1);
    
    // const newStart = {
    //   ...start,
    //   taskIds: startTaskIds
    // };

    // const finishTaskIds = Array.from(finish.taskIds);
    // finishTaskIds.splice(destination.index, 0, draggableId);

    // const newFinish = {
    //   ...finish,
    //   taskIds: finishTaskIds
    // };

    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newStart.id]: newStart,
    //     [newFinish.id]: newFinish
    //   }
    // }

  //   this.setState(newState)
  // };

  render() {
    return (
      <DragDropContext onDragEnd={this.reviewDragEnd}>
        <Container>
            {this.props.columnOrder.map((columnId)=>{
              const column = this.props.columns[columnId];
              let tasks = column.taskIds.map(taskId=>this.props.tasks[taskId]);
              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </Container>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.firstmate.tasks,
  columns: state.firstmate.columns,
  columnOrder: state.firstmate.columnOrder
});

export default connect(mapStateToProps)(Board);
