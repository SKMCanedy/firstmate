import React,{Component} from "react";
import styled from "styled-components";
import Task from "./task"
import { Droppable } from "react-beautiful-dnd";
import { connect } from 'react-redux';

import { openModal, updateServerBoard } from "../../actions"
import deleteIcon from "../../images/delete-cream.png"

const Container = styled.div`
    margin: 1rem;
    border: 1px solid #fff0d2;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    width: 17rem;
    overflow: hidden;
`;
const Title = styled.div`
    text-align: left;
    font-size: 1rem;
    min-height: 3.5rem;
    position: relative
    text-align: center;
    & div {
        display: inline-block;
        margin-left: 1.5rem;
        max-width: 10rem;
    }
    @media (min-width: 500px) {
        font-size: 1.25rem;
    }
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props=>(props.isDraggingOver ? "#3c5877" : "#8ea6be")};
    flex-grow: 1;
    min-height: 8rem;
    height: 100%
    
`;

const DeleteButton = styled.button`
    border: none;
    display: inline-block;
    float: right;
    background-color: rgba(0, 0, 0, 0);
    margin-top: .25rem;
    &:hover {
        background-color: #7596b9;
        border-radius: 5px;
    }

    & img {
        width: 1.25rem;
        height: 1.25rem;
    }
`

export class Column extends Component {
    callDeleteColumn=(columnId)=>{
        const columnObject=this.props.columns[columnId]
        //checks for processes. If has them, will alert that it cannot be deleted
        if (columnObject.taskIds.length > 0){
            this.props.dispatch(openModal("hasTasksWarning"));
            return;
        }

        this.props.dispatch(openModal("deleteConfirmation", columnId));//prompts modal to confirm before deletion
        this.props.dispatch(updateServerBoard());
    }

    render(){
        const column=this.props.currentColumn
        const currentColumn = this.props.columns[column];
        const columnTasks = currentColumn.taskIds
        
        return(
            <Container>
                <Title>
                    <DeleteButton onClick={()=>this.callDeleteColumn(currentColumn.id)}><img src={deleteIcon} alt="delete icon" /></DeleteButton>
                    <div><h3>{currentColumn.title}</h3></div>
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