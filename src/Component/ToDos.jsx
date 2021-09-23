import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { showToDos } from "../Redux/actions/Actions";
import { addToDos } from "../Redux/actions/addToDosAction";
import DisplayTodos from "./DisplayTodos";

const ToDos = (props) => {
  //   console.log("Properties:", props);
  const { addToDos, todoState, showToDos } = props;
  const [toDosObj, settoDosObj] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    settoDosObj({ ...toDosObj, [name]: value, id: Math.random() * 10000 });
  };
  //   console.log("ToDos Object is: " + JSON.stringify(toDosObj));

  return (
    <>
      <h4> Add ToDos Using POST Request</h4>

      <input
        type="text"
        name="text"
        placeholder="Add ToDos...."
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={() => {
          addToDos(toDosObj);
        }}
      >
        Add ToDos
      </button>
      <DisplayTodos />
    </>
  );
};

const mapStateToProps = (state) => ({
  todoState: state,
});

const mapDispatchToProps = (dispatch) => ({
  showToDos: () => dispatch(showToDos()),
  addToDos: (toDosObj) => dispatch(addToDos(toDosObj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
