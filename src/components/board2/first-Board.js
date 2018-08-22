// import React from "react";
// import { connect } from 'react-redux';
// import { DragDropContext } from "react-beautiful-dnd";

// // import ProcessBank from "./process-bank";
// import StaffCard from "./staff-card";
// import Header from "./header";
// import { dndEndSameColumn, dndEndNewColumn } from "../../actions"

// import "./Board.css"

// class Board extends React.Component { 
//     reviewDragEnd = result => {
//         const { destination, source } = result;
//         //if user didn't change a draggable, then leave as is
//         if (!destination){
//             return;
//         }

//         //if user moved a draggable but put it back into its original spot
//         if (destination.droppableId === source.draggableId && destination.index === source.index){
//             return;
//         }
        
//         const start = this.state.columns[source.droppableId];
//         const finish = this.state.columns[destination.droppableId]

        
//         if (start === finish){
//             this.state.dispatch(dndEndSameColumn(result, start)) // Draggable stays in the same column/droppable
//         } else {
//             this.state.dispatch(dndEndNewColumn(result, start, finish)) // Draggable is in a different column/droppable
//         }
//     }

//     render() {
//         return(
//             <DragDropContext onDragEnd={this.reviewDragEnd}>
//                 <div>
//                     <Header />
//                     {this.props.columnOrder.map((columnId)=>{
//                         const column = this.props.columns[columnId];
//                         let tasks = column.taskIds.map(taskId=>this.props.tasks[taskId]);
//                         return <StaffCard key={column.id} column={column} tasks={tasks} />;
//                     })}                
//                 </div>
//             </DragDropContext>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     tasks: state.firstmate.tasks,
//     columns: state.firstmate.columns,
//     columnOrder: state.firstmate.columnOrder
//   });
  
//   export default connect(mapStateToProps)(Board);

//                   /* <div className="bank-container">
//                     <ProcessBank />
//                 </div>
//                 <div className="staff-container">
//                     <StaffCard />
//                     <StaffCard />
//                     <StaffCard />
//                     <StaffCard />
//                 </div> */