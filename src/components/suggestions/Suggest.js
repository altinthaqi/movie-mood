import React from "react";
import styled from "styled-components";

function Suggest({ submitHandler }) {
  const formHandler = (e) => {
    e.preventDefault();

    if (
      e.target.movieimage.value === "" ||
      e.target.movietitle.value === "" ||
      e.target.moviedescription.value === "" ||
      e.target.yourname.value === ""
    ) {
      alert("Fill ALL inputs please!");
    } else {
      const formValues = {
        id: Math.random() * 1000,
        img: e.target.movieimage.value,
        title: e.target.movietitle.value,
        description: e.target.moviedescription.value,
        name: e.target.yourname.value,
      };
      submitHandler(formValues);

      e.target.reset();
    }
  };

  return (
    <Form onSubmit={formHandler}>
      <h2>Suggest Movie:</h2>
      <input type="text" name="yourname" placeholder="Name..." />
      <input type="text" name="movietitle" placeholder="Title..." />
      <input type="text" name="movieimage" placeholder="Image URL..." />
      <textarea
        name="moviedescription"
        cols="30"
        rows="10"
        placeholder="Description..."
      />
      <button type="submit">add</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 50px 0px 30px 0px;
  max-width: 400px;
  width: 80%;
  background-color: ${(props) => props.theme.body};

  h2 {
    color: ${(props) => props.theme.text};
    font-family: "Cinzel", serif;
    margin: 20px 0px;
    align-self: center;
  }

  input,
  textarea {
    padding: 7px;
    margin: 10px 0px;
    border: 1px solid #cccc;
    resize: none;
    outline: none;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};

    &:focus {
    }
  }

  button {
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    padding: 7px 10px;
    margin: 20px auto;
    transition: all 0.5s;
    font-weight: 500;
    cursor: pointer;
    width: 40%;

    &:hover {
      transition: all 0.5s;
      background: none;
      color: ${(props) => props.theme.body};
      background-color: ${(props) => props.theme.text};
    }
  }
`;

export default Suggest;
