import React,{Component} from "react";
import styled from "styled-components";
import Task from "./task"
import { Droppable } from "react-beautiful-dnd";
import { connect } from 'react-redux';

import { openModal } from "../../actions"

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 30%;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props=>(props.isDraggingOver ? "blue" : "white")};
    flex-grow: 1;
    min-height: 8rem;
`;

const DeleteButton = styled.button`
    float: right;
    width: 2rem;
    height: 2rem;
    text-align: center;
`

export class Column extends Component {
    callDeleteColumn=(columnId)=>{
        const columnObject=this.props.columns[columnId]
        console.log(columnObject.taskIds.length)
        //checks for processes. If has them, will alert that it cannot be deleted
        if (columnObject.taskIds.length > 0){
            this.props.dispatch(openModal("hasTasksWarning"));
            return;
        }
        this.props.dispatch(openModal("deleteConfirmation"));//prompts modal to confirm before deletion
    }
    render(){
        const column=this.props.currentColumn
        const currentColumn = this.props.columns[column];
        const columnTasks = currentColumn.taskIds
        
        return(
            <Container>
                <Title>
                    <DeleteButton onClick={()=>this.callDeleteColumn(currentColumn.id)}>X</DeleteButton>
                    {currentColumn.title}
                </Title>
                <Droppable droppableId={currentColumn.id}>
                    {(provided, snapshot)=>(
                        <TaskList 
                            innerRef={provided.innerRef} 
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {columnTasks.map((task, index)=>{
                                const uniqueKey = "tastKey"+task;
                                return(
                                    <Task key={uniqueKey} currentTask={task} index={index}/>
                                )
                            })}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.firstmate.tasks,
    columns: state.firstmate.columns,
    columnOrder: state.firstmate.columnOrder
  });
  
  export default connect(mapStateToProps)(Column);

//   render(){
//     return(
//         <Container>
//             <Title>{this.props.column.title}</Title>
//             <Droppable droppableId={this.props.column.id}>
//                 {(provided, snapshot)=>(
//                     <TaskList 
//                         innerRef={provided.innerRef} 
//                         {...provided.droppableProps}
//                         isDraggingOver={snapshot.isDraggingOver}
//                     >
//                         {this.props.tasks.map((task, index)=><Task key={task.id} task={task} index={index}/>)}
//                         {provided.placeholder}
//                     </TaskList>
//                 )}
//             </Droppable>
//         </Container>
//     )
// }