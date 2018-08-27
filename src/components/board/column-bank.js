//Process Bank Component. "Droppable" component that can accept draggable components (processes/tasks)

import React,{Component} from "react";
import styled from "styled-components";
import Task from "./task"
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

const Container = styled.div`
    margin: auto;
    width: 90%;
    height: 98%;
`;
const Title = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    
    @media (min-width: 600px) {
        font-size: 1.75rem;
    }
`;
const TaskList = styled.div`
    padding: 8px;
    border-radius: 10px;
    transition: background-color 0.2s ease;
    background-color: ${props=>(props.isDraggingOver ? "#3c5877" : "#8ea6be")};
    min-height: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    @media (min-width: 600px) {
        height: 90%;
      }
`;


export class ColumnBank extends Component {
    render(){
        const column=this.props.currentColumn;
        const currentColumn = this.props.columns[column];
        const columnTasks = currentColumn.taskIds;
        return(
            <Container>
                <Title>
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
  
  export default connect(mapStateToProps)(ColumnBank);