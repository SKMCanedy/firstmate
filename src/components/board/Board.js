import React, { Component } from 'react';
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from 'react-redux';

import Column from "./column";
import { dndEndSameColumn, dndEndNewColumn, updateServerBoard } from "../../actions"
import Header from "./header";

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
            this.props.dispatch(dndEndNewColumn(result, start, finish)); // Draggable is in a different column/droppable
            this.props.dispatch(updateServerBoard());
        }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.reviewDragEnd}>
        <Header />
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
