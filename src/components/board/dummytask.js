// import React,{Component} from "react";
// import { connect } from 'react-redux';
// import styled from "styled-components";
// import { Draggable } from "react-beautiful-dnd";

// import { deleteTask } from "../../actions";

// const BankTask  = styled.div`
//     border: 1px solid red;
//     border-radius: 15px;
//     padding: 8px;
//     margin-bottom: 8px;
//     background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
// `;
// const Container = styled.div`
//     border: 1px solid red;
//     border-radius: 15px;
//     padding: 8px;
//     margin-bottom: 8px;
//     background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
// `;

// const DeleteButton = styled.button`
//     float: right;
// `

// export class Task extends Component{
    
//     callDeleteTask=(taskId)=>{
//         this.props.dispatch(deleteTask(taskId))
//     }

//     determineTaskStyles = () => {
//         const taskKey = this.props.currentTask
//         const currentTask = this.props.tasks[taskKey];
//         const bankTasks = this.props.columns.column1.taskIds

//         //Styles for tasks in process bank
//         if(bankTasks.includes(currentTask.id)){
//             return(
//                 <Draggable draggableId={currentTask.id} index={this.props.index}>
//                     {(provided, snapshot)=>(
//                         <BankTask
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             innerRef={provided.innerRef}
//                             isDragging={snapshot.isDragging}
//                         >
//                             {currentTask.content}
//                             <DeleteButton onClick={()=>this.callDeleteTask(currentTask.id)}>X</DeleteButton>
//                         </BankTask>
//                     )}
//                 </Draggable>
//             )
//         }

//         //Styles for tasks in Staff columns
//         return(
//             <Draggable draggableId={currentTask.id} index={this.props.index}>
//                 {(provided, snapshot)=>(
//                     <Container
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         innerRef={provided.innerRef}
//                         isDragging={snapshot.isDragging}
//                     >
//                         {currentTask.content}
//                         <DeleteButton onClick={()=>this.callDeleteTask(currentTask.id)}>X</DeleteButton>
//                     </Container>
//                 )}
//             </Draggable>
//         )
//     }

//     render(){
//         return(
//             <div>
//                 {this.determineTaskStyles()}
//             </div>
//         )  
//     }
// }

// const mapStateToProps = state => ({
//     tasks: state.firstmate.tasks,
//     columns: state.firstmate.columns,
//     columnOrder: state.firstmate.columnOrder
//   });
  
//   export default connect(mapStateToProps)(Task);


// //   const taskKey = this.props.currentTask
// //         const currentTask = this.props.tasks[taskKey];

// //         return(
// //             <Draggable draggableId={currentTask.id} index={this.props.index}>
// //                 {(provided, snapshot)=>(
// //                     <Container
// //                         {...provided.draggableProps}
// //                         {...provided.dragHandleProps}
// //                         innerRef={provided.innerRef}
// //                         isDragging={snapshot.isDragging}
// //                     >
// //                         {currentTask.content}
// //                         <DeleteButton onClick={()=>this.callDeleteTask(currentTask.id)}>X</DeleteButton>
// //                     </Container>
// //                 )}
// //             </Draggable>
// //         )