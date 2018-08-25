import React,{Component} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { deleteTask } from "../../actions";

const Container = styled.div`
    border: 1px solid red;
    border-radius: 15px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

const DeleteButton = styled.button`
    float: right;
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
                        {currentTask.content}
                        <DeleteButton onClick={()=>this.callDeleteTask(currentTask.id)}>X</DeleteButton>
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


// render(){
//     return(
//         <Draggable draggableId={this.props.task.id} index={this.props.index}>
//             {(provided, snapshot)=>(
//                 <Container
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     innerRef={provided.innerRef}
//                     isDragging={snapshot.isDragging}
//                 >
//                     {this.props.task.content}
//                 </Container>
//             )}
//         </Draggable>
//     )
// }
