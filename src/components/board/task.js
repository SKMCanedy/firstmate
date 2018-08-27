import React,{Component} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { deleteTask } from "../../actions";
import deleteIcon from "../../images/delete-cream.png"

const Container = styled.div`
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "#e7cd7e" : "#5b3a33")};
    color: ${props => (props.isDragging ? "black" : "#fff0d2")};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled.div`
    display: inline-block;
    max-width: 70%;
`

const DeleteButton = styled.button`
    display: inline-block;
    float: right;
    background-color: rgba(0, 0, 0, 0);
    border: none;

    &:hover {
        background-color: #946440;
        border-radius: 5px;
    }

    & img {
        height: 1rem;
        width: 1rem;
    }
`

export class Task extends Component{
    
    callDeleteTask=(taskId)=>{
        this.props.dispatch(deleteTask(taskId))
    }

    render(){
        const taskKey = this.props.currentTask
        const currentTask = this.props.tasks[taskKey];

        return(
            <Draggable draggableId={currentTask.id} index={this.props.index}>
                {(provided, snapshot)=>(
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <ContentContainer>
                            {currentTask.content}
                        </ContentContainer>
                        <DeleteButton onClick={()=>this.callDeleteTask(currentTask.id)}><img src={deleteIcon} alt="delete icon"></img></DeleteButton>
                    </Container>
                )}
            </Draggable>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.firstmate.tasks,
    columns: state.firstmate.columns,
    columnOrder: state.firstmate.columnOrder
  });
  
  export default connect(mapStateToProps)(Task);