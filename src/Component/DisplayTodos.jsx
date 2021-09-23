import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showToDos } from "../Redux/actions/Actions";

const DisplayTodos = () => {
  // const { todoState, showToDos } = props;
  // console.log("Todo State is: " + JSON.stringify(todoState.todo));

  // useEffect(() => {
  //   showToDos();
  // }, []);
  return (
    <>
      <h4> Display ToDos Using GET Request</h4>
      {/* {todoState.loading
        ? "Loading......................"
        : todoState.error
        ? todoState.error.status
        : todoState.todo.map((todoData) => {
            return (
              <div>
                <span key={todoData.id}>{todoData.text}</span>
              </div>
            );
          })} */}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todoState: state,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showToDos: () => dispatch(showToDos()),
//   };
// };

export default DisplayTodos;
