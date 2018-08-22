// import React from "react";
// import { Droppable } from "react-beautiful-dnd";
// // import { connect } from 'react-redux';

// // import "./staff-card.css";

// import ProcessCard from "./process-card";

// export default class StaffCard extends React.Component {
//     render(){
//         return(
//             <div className="staff-container">
//                 <h3>{this.props.column.title}</h3>
//                 <Droppable droppableId={this.props.column.id}>
//                     {(provided, snapshot)=>(
//                         <div 
//                             className="staff-card"
//                             innerRef={provided.innerRef} 
//                             {...provided.droppableProps}
//                             isDraggingOver={snapshot.isDraggingOver}
//                         >
//                             {this.props.tasks.map((task, index)=><ProcessCard key={task.id} task={task} index={index}/>)}
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </div>
//         )
//     }
// }

// // const mapStateToProps = state => ({
// //     // tasks: state.firstmate.tasks,
// //     // columns: state.firstmate.columns,
// //     // columnOrder: state.firstmate.columnOrder
// //   });

  
// //   export default connect(mapStateToProps)(StaffCard);