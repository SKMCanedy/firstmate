// import React, { Component } from 'react';
// import styled from "styled-components";
// import { DragDropContext } from "react-beautiful-dnd";
// import { connect } from 'react-redux';
// import axios from "axios";

// import Column from "./column";
// import { dndEndSameColumn, dndEndNewColumn, updateServerBoard, loadBoard } from "../../actions"
// import Header from "./header";

// const BankContainer = styled.div`
//   border: 2px solid purple;
//   width: 40%;
//   display: inline-block;
// `
// const StaffContainer = styled.div`
//   border: 2px solid green;
//   width: 40%
//   display: inline-block;
// `
// const Container = styled.div`
//   display: inline-block

// `

// export class Board extends Component {

//   componentDidMount(){
//     console.log("Board mounted!!")
//     const authInfo = { "Authorization": `Bearer ${localStorage.getItem("token")}` }
//     //load main board -- in future iterations this section will be configured to load a board of the user's choosing
//     axios.get("http://localhost:8080/api/board/5b7ce32657a288a4134d45a0", {headers: authInfo})
//             .then((res) => {
//               //load board from server
//               this.props.dispatch(loadBoard(res.data))
//             })
//             .catch(err => {
//                 console.log(err.response)
//                 return ("Error loading data")
//             });
//   }

//   reviewDragEnd = result => {
//         const { destination, source } = result;
//         //if user didn't change a draggable, then leave as is
//         if (!destination){
//             return;
//         }

//         //if user moved a draggable but put it back into its original spot
//         if (destination.droppableId === source.draggableId && destination.index === source.index){
//             return;
//         }
        
//         const start = this.props.columns[source.droppableId];
//         const finish = this.props.columns[destination.droppableId]

        
//         if (start === finish){
//             this.props.dispatch(dndEndSameColumn(result, start)) // Draggable stays in the same column/droppable
//             this.props.dispatch(updateServerBoard());
//         } else {
//             this.props.dispatch(dndEndNewColumn(result, start, finish)); // Draggable is in a different column/droppable
//             this.props.dispatch(updateServerBoard());
//         }
//   }

//   loadBank=()=>{
//     const bankColumn = this.props.columnOrder.map((columnId)=>{
//       if (columnId === "column1"){
//         const columnKey = "columnKey"+columnId
//         return (
//           <Container>
//             <Column key={columnKey} currentColumn={columnId} />
//           </Container>
//         );    
//       }
//       return "";  
//     })
//     return bankColumn;
//   }
  
//   loadColumns=()=>{
//     const staffColumn = this.props.columnOrder.map((columnId)=>{
//       const columnKey = "columnKey"+columnId
//       if (columnId === "column1"){
//           return "";
//       }
//       return(
//         <Container>
//           <Column key={columnKey} currentColumn={columnId} />;
//         </Container>
//       )
//     })
//     return staffColumn;
//   }

//   render() {
//     return (
//       <DragDropContext onDragEnd={this.reviewDragEnd}>
//         <Header />
//           <BankContainer>
//             {this.loadBank()}
//           </BankContainer>
//           <StaffContainer>
//             {this.loadColumns()}
//           </StaffContainer>
//       </DragDropContext>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   tasks: state.firstmate.tasks,
//   columns: state.firstmate.columns,
//   columnOrder: state.firstmate.columnOrder
// });

// export default connect(mapStateToProps)(Board);

// // display: flex;
// // flex-wrap: wrap;
// // justify-content: space-evenly;
// // align-content: flex-start;


// // display: flex;
// // flex-wrap: wrap;
// // justify-content: space-evenly;
// // align-content: flex-start;