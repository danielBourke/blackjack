import React, { useState, useEffect, useCallback } from "react";
import { cardsArray } from "../../app/assets/cardArray";
import Stats from "../../Components/Stats";
import Hand from "../../Components/Hand";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT_BALANCE, UPDATE_BALANCE } from "./BlackJackConstants";

const BlackJack = () => {
  const { balance, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [deck, setDeck] = useState(cardsArray);
  const [total, setTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [aces, setAces] = useState(0);
  const [dealersAces, setDealersAces] = useState(0);
  const [dealt, setDelt] = useState(false);
  const [totalPool, setTotalPool] = useState(0);
  const [hand, setHand] = useState([]);
  const [dealersHand, setDealersHand] = useState([]);

  const HitCard = () => {
    setHand((hand) => [...hand, deck[deck.length - 1]]);

    if (deck[deck.length - 1].value === "A") {
      setAces(aces + 1);
    }
    setTotal((prevTotal) => prevTotal + deck[deck.length - 1].worth);
    setDeck(deck.filter((card) => card.id !== deck[deck.length - 1].id));
  };

  const shuffle = useCallback(() => {
    let count = cardsArray.length;
    let localDec = [];
    while (count) {
      localDec.push(cardsArray.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }

    setDeck(localDec);
  }, []);

  useEffect(() => {
    shuffle();
  }, [shuffle]);

  useEffect(() => {
    const checkLocalTotal = () => {
      if (aces === 0 && total > 21) {
        window.alert(`You lost ${totalPool}`);
        setTotalPool(0);
        setHand([]);
        setDealersHand([]);
        setDelt(false);
        setTotal(0);
        setDealerTotal(0);
        setDealersAces(0);
        setAces(0);
      }
      if (aces === 1) {
        if (total + 1 && total + 11 > 21) {
          window.alert(`You lost ${totalPool}`);
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
        }
      }
      if (aces === 2) {
        if (total + 2 && total + 21 > 21) {
          window.alert(`You lost ${totalPool}`);
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
        }
      }
      if (aces === 3) {
        if (total + 3 && total + 21 > 21) {
          window.alert(`You lost ${totalPool}`);
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
        }
      }
      if (aces === 4) {
        if (total + 4 && total + 21 > 21) {
          window.alert(`You lost ${totalPool}`);
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
        }
      }
    };
    checkLocalTotal();
    return () => {};
  }, [total, aces, totalPool]);

  useEffect(() => {
    const checkLocaldealerTotal = () => {
      const amountTobeCredited = totalPool * 3;
      if (dealersAces === 0 && dealerTotal > 21) {
        dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
        setTotalPool(0);
        setHand([]);
        setDealersHand([]);
        setDelt(false);
        setTotal(0);
        setDealerTotal(0);
        setDealersAces(0);
        setAces(0);
        window.alert(`You have won: ${amountTobeCredited}`);
      }
      if (dealersAces === 1) {
        if (dealerTotal + 1 && dealerTotal + 11 > 21) {
          dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
          window.alert(`You have won: ${amountTobeCredited}`);
        }
      }
      if (dealersAces === 2) {
        if (dealerTotal + 2 && dealerTotal + 21 > 21) {
          dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
          window.alert(`You have won: ${amountTobeCredited}`);
        }
      }
      if (dealersAces === 3) {
        if (dealerTotal + 3 && dealerTotal + 21 > 21) {
          dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
          window.alert(`You have won: ${amountTobeCredited}`);
        }
      }
      if (dealersAces === 4) {
        if (dealerTotal + 4 && dealerTotal + 21 > 21) {
          dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
          setTotalPool(0);
          setHand([]);
          setDealersHand([]);
          setDelt(false);
          setTotal(0);
          setDealerTotal(0);
          setDealersAces(0);
          setAces(0);
          window.alert(`You have won: ${amountTobeCredited}`);
        }
      }
    };
    checkLocaldealerTotal();
    return () => {};
  }, [dealerTotal, dealersAces, dispatch, totalPool, dealersHand]);

  const Deal = () => {
    setDelt(true);
    setHand((hand) => [...hand, deck[deck.length - 1]]);
    setHand((hand) => [...hand, deck[deck.length - 2]]);
    setDealersHand((dealersHand) => [...dealersHand, deck[deck.length - 3]]);
    setDealersHand((dealersHand) => [...dealersHand, deck[deck.length - 4]]);

    if (deck[deck.length - 1].value === "A") {
      setAces(aces + 1);
    }
    if (deck[deck.length - 2].value === "A") {
      setAces(aces + 1);
    }
    if (deck[deck.length - 3].value === "A") {
      setDealersAces(dealersAces + 1);
    }
    if (deck[deck.length - 3].value === "A") {
      setDealersAces(dealersAces + 1);
    }
    setTotal((prevTotal) => prevTotal + deck[deck.length - 1].worth);
    setTotal((prevTotal) => prevTotal + deck[deck.length - 2].worth);
    setDealerTotal((prevTotal) => prevTotal + deck[deck.length - 3].worth);
    setDealerTotal((prevTotal) => prevTotal + deck[deck.length - 4].worth);
    setDeck(
      deck.filter(
        (card) =>
          card.id !== deck[deck.length - 1].id &&
          card.id !== deck[deck.length - 2].id &&
          card.id !== deck[deck.length - 3].id &&
          card.id !== deck[deck.length - 4].id
      )
    );
  };

  const stick = () => {
    const amountTobeCredited = totalPool * 3;

    if (dealerTotal + dealersAces < 17) {
      setDealersHand((dealersHand) => [...dealersHand, deck[deck.length - 1]]);
      setDealerTotal((prevTotal) => prevTotal + deck[deck.length - 1].worth);
      setDeck(deck.filter((card) => card.id !== deck[deck.length - 1].id));

      if (deck[deck.length - 1].value === "A") {
        setDealersAces(dealersAces + 1);
      }
    }

    if (dealersHand[0].value === "A" && dealersHand[1].worth === 10) {
      window.alert(`The dealer has black jack`);
      setTotalPool(0);
      setHand([]);
      setDealersHand([]);
      setDelt(false);
      setTotal(0);
      setDealerTotal(0);
      setDealersAces(0);
      setAces(0);
    }

    if (dealersHand[0].value === "A" && dealersHand[1].worth === 10) {
      window.alert(`The user has black jack`);
      dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
      setTotalPool(0);
      setHand([]);
      setDealersHand([]);
      setDelt(false);
      setTotal(0);
      setDealerTotal(0);
      setDealersAces(0);
      setAces(0);
    }

    if (
      dealerTotal + dealersAces > 17 &&
      dealerTotal + dealersAces > total + aces
    ) {
      setTotalPool(0);
      setHand([]);
      setDealersHand([]);
      setDelt(false);
      setTotal(0);
      setDealerTotal(0);
      setDealersAces(0);
      setAces(0);
      window.alert(`You lost ${totalPool}`);
    }
    if (
      dealerTotal + dealersAces > 17 &&
      dealerTotal + dealersAces < total + aces
    ) {
      dispatch({ type: UPDATE_BALANCE, payload: amountTobeCredited });
      setTotalPool(0);
      setHand([]);
      setDealersHand([]);
      setDelt(false);
      setTotal(0);
      setDealerTotal(0);
      setDealersAces(0);
      setAces(0);
      window.alert(`You have won: ${amountTobeCredited}`);
    }
  };

  const handleAddBet = (amount) => {
    setTotalPool((pool) => pool + amount);
    dispatch({ type: DECREMENT_BALANCE, payload: amount });
  };
  return (
    <div>
              <div style={{minWidth: "100vw", justifyContent: "space-around", display: "flex"}}>

      {dealt !== true && (
        <>
          <h4>Add funds and start a game</h4>
          <button onClick={Deal}>Deal Cards</button>

          <button disabled={balance < 1} onClick={() => handleAddBet(1)}>
           Add $1
          </button>

          <button disabled={balance < 5} onClick={() => handleAddBet(5)}>
          Add $5
          </button>

          <button disabled={balance < 50} onClick={() => handleAddBet(50)}>
          Add $50
          </button>

          <button disabled={balance < 500} onClick={() => handleAddBet(500)}>
          Add $500
          </button>
          </>
     
      )}

      {dealt === true && <button onClick={stick}><h2>Stick</h2></button>}
      {dealt === true && <button onClick={HitCard}><h2>Hit</h2></button>}
      </div>
      <Stats totalBet={totalPool} />
      <div>
        {dealt && currentUser && <h1>{currentUser.name}'s hand</h1>}
        <Hand hand={hand} />
      </div>
      <div>
        {dealt && <h1>Dealers hand</h1>}

        <Hand hand={dealersHand} />
      </div>
    </div>
  );
};

export default BlackJack;
