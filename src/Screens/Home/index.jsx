import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { START_GAME } from "./HomeConstants";
import { useHistory } from 'react-router';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [agreeToTerms, SetAgreeToTerms] = useState(false);
  const [name, setName] = useState("");
  const handleChange = (event) => {
    SetAgreeToTerms(event.target.checked);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleStartGame =  ()  => {
      const user = {
          name,
          agreeToTerms
      }

      console.log(user)
      dispatch({type: START_GAME, payload: user})
      history.push("/game")
  }

  return (
    <>
      <h1>Home screen</h1>
      <input
        onChange={handleChangeName}
        value={name}
        placeholder="Please enter your name"
      />
      <input
        id="terms"
        onChange={handleChange}
        type="checkbox"
        value={agreeToTerms}
      />
      <label> By checking this box you agree to our terms</label>
      <button disabled={name ==="" || agreeToTerms === false} onClick={()=>handleStartGame()}>Play blackjack</button>
    </>
  );
};

export default HomeScreen;
