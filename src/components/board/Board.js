//Main Component for the protected section of the App aka "Board"

import React, { Component } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import axios from "axios";

import Column from "./column";
import ColumnBank from "./column-bank"
import { dndEndSameColumn, dndEndNewColumn, updateServerBoard, loadBoard } from "../../actions"
import Header from "./header";
import { API_MAIN_BOARD_URL } from "../../config";


// equivalent to css *
const All = styled.div`
  background-image: linear-gradient(#2b3e55, #7798bb);
  color: #fff0d2;
  height: 100vh;
  overflow: auto;
  font-family: 'Headland One', serif;
`

const BoardContainer = styled.div`
  position:relative;
`

const BankContainer = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 600px) {
    width: 35%;
    position: absolute;
    height: 100%;
    margin-left: 3%;

  }
  @media (min-width: 1230px) {
    width: 25%;
  }
`
const StaffContainer = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 200vh;
  @media (min-width: 600px) {
    width: 62%;
    margin-left: 38%;
    
  }
  @media (min-width: 1230px) {
    width: 72%;
    margin-left: 28%;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StaffTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  @media (min-width: 600px) {
      font-size: 1.75rem;
  }
`;

export class Board extends Component {

  componentDidMount(){
    console.log("Board mounted!!")
    const authInfo = { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    //load main board -- in future iterations this section will be configured to load a board of the user's choosing
    axios.get(API_MAIN_BOARD_URL, {headers: authInfo})
            .then((res) => {
              //load board from server
              this.props.dispatch(loadBoard(res.data))
            })
            .catch(err => {
                console.log(err.response)
                return ("Error loading data")
            });
  }

  reviewDragEnd = result => {
        const { destination, source } = result;
        //if user didn't change a draggable, then leave as is
        if (!destination){
            return;
        }

        //if user moved a draggable but put it back into its original spot
        if (destination.droppableId === source.draggableId && destination.index === source.index){
            return;
        }
        
        const start = this.props.columns[source.droppableId];
        const finish = this.props.columns[destination.droppableId]

        
        if (start === finish){
            this.props.dispatch(dndEndSameColumn(result, start)) // Draggable stays in the same column/droppable
            this.props.dispatch(updateServerBoard());
        } else {
            this.props.dispatch(dndEndNewColumn(result, start, finish)); // Draggable is in a different column/droppable
            this.props.dispatch(updateServerBoard());
        }
  }

  //looks for column1 which is the process bank so it can load it into it's own component
  loadBank=()=>{
    const bankColumn = this.props.columnOrder.map((columnId)=>{
      if (columnId === "column1"){
        const columnKey = "columnKey"+columnId
        return (
            <ColumnBank key={columnKey} currentColumn={columnId} />
        );    
      };
      return "";  
    })

    return bankColumn;
  }

  //loads all staff member cards
  loadColumns=()=>{
    const staffColumn = this.props.columnOrder.map((columnId)=>{
        const columnKey = "columnKey"+columnId
        if (columnId === "column1"){
            return "";
        }
        
        return(
            <Column key={columnKey} currentColumn={columnId} />
        )
    })

    return staffColumn;
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.reviewDragEnd}>
        <All>
            <Header />
            <BoardContainer>
                <BankContainer>
                    {this.loadBank()}
                </BankContainer>
                <StaffContainer>
                    <StaffTitle>
                        Staff Members
                    </StaffTitle>
                    <Container>
                        {this.loadColumns()}
                    </Container>
                </StaffContainer>
            </BoardContainer>
        </All>
      </DragDropContext>
    );
  }
}



const mapStateToProps = state => ({
  tasks: state.firstmate.tasks,
  columns: state.firstmate.columns,
  columnOrder: state.firstmate.columnOrder
});

export default connect(mapStateToProps)(Board);