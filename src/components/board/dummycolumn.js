// import React,{Component} from "react";
// import styled from "styled-components";
// import Task from "./task"
// import { Droppable } from "react-beautiful-dnd";
// import { connect } from 'react-redux';

// import { openModal, updateServerBoard } from "../../actions"

// const PageDiv = styled.div`
//     height: 100%;
//     width: 100%
//     display: flex;
//     flex-direction: row;
// `;

// const Title = styled.h3`
//     padding: 8px;
//     text-align: center;
// `;

// const BankContainer = styled.div`
//     margin: 8px;
//     border: 2px solid blue;
//     border-radius: 2px;
//     height: 100vh;
//     width: 30vw;
// `;

// const BankTaskList = styled.div`
//     padding: 8px;
//     transition: background-color 0.2s ease;
//     background-color: ${props=>(props.isDraggingOver ? "purple" : "white")};
//     display: flex;
//     min-height: 8rem;
// `;

// const Container = styled.div`
//     margin: 8px;
//     border: 1px solid lightgrey;
//     border-radius: 2px;
//     width: 30vw;
// `;

// const TaskList = styled.div`
//     padding: 8px;
//     transition: background-color 0.2s ease;
//     background-color: ${props=>(props.isDraggingOver ? "blue" : "white")};
//     flex-grow: 1;
//     min-height: 8rem;
// `;

// const DeleteButton = styled.button`
//     float: right;
//     width: 2rem;
//     height: 2rem;
//     text-align: center;
// `

// export class Column extends Component {
//     callDeleteColumn=(columnId)=>{
//         const columnObject=this.props.columns[columnId]
//         //checks for processes. If has them, will alert that it cannot be deleted
//         if (columnObject.taskIds.length > 0){
//             this.props.dispatch(openModal("hasTasksWarning"));
//             return;
//         }

//         this.props.dispatch(openModal("deleteConfirmation", columnId));//prompts modal to confirm before deletion
//         this.props.dispatch(updateServerBoard());
//     }

//     determineColStyles = () =>{
//         const column=this.props.currentColumn
//         const currentColumn = this.props.columns[column];
//         const columnTasks = currentColumn.taskIds

//         if (currentColumn.id === "column1"){ //if process bank, then should be a specialized container with no delete option and larger size
//             return (
//                 <BankContainer>
//                     <Title>
//                         {currentColumn.title}
//                     </Title>
//                     <Droppable droppableId={currentColumn.id}>
//                         {(provided, snapshot)=>(
//                             <TaskList 
//                                 innerRef={provided.innerRef} 
//                                 {...provided.droppableProps}
//                                 isDraggingOver={snapshot.isDraggingOver}
//                             >
//                                 {columnTasks.map((task, index)=>{
//                                     const uniqueKey = "tastKey"+task;
//                                     return(
//                                         <Task key={uniqueKey} currentTask={task} index={index}/>
//                                     )
//                                 })}
//                                 {provided.placeholder}
//                             </TaskList>
//                         )}
//                     </Droppable>
//                 </BankContainer> 
//             )
//         }

//         //Styles for column/staff cards 
//         return (
//             <Container>
//                 <Title>
//                     <DeleteButton onClick={()=>this.callDeleteColumn(currentColumn.id)}>X</DeleteButton>
//                     {currentColumn.title}
//                 </Title>
//                 <Droppable droppableId={currentColumn.id}>
//                     {(provided, snapshot)=>(
//                         <TaskList 
//                             innerRef={provided.innerRef} 
//                             {...provided.droppableProps}
//                             isDraggingOver={snapshot.isDraggingOver}
//                         >
//                             {columnTasks.map((task, index)=>{
//                                 const uniqueKey = "tastKey"+task;
//                                 return(
//                                     <Task key={uniqueKey} currentTask={task} index={index}/>
//                                 )
//                             })}
//                             {provided.placeholder}
//                         </TaskList>
//                     )}
//                 </Droppable>   
//             </Container> 
//         )
//     }
//     render(){
//         return(
//             <div>
//                 {this.determineColStyles()}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     tasks: state.firstmate.tasks,
//     columns: state.firstmate.columns,
//     columnOrder: state.firstmate.columnOrder
//   });
  
//   export default connect(mapStateToProps)(Column);
