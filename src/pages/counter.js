import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

import { actionCreators } from "../store/Counter";
import Layout from "../components/Layout";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncrementClick = (event) => {
    event.preventDefault();
    console.log("increment");
    dispatch(actionCreators.increment());
  };

  const handleDecrementClick = (event) => {
    event.preventDefault();
    console.log("decrement");
    dispatch(actionCreators.decrement());
  };
  return (
    <Layout>
      <h1>Counter</h1>
      <p>Current count: {counter.count}</p>
      <p>
        <Button className="mx-1" onClick={handleIncrementClick}>
          Increment
        </Button>
        <Button className="mx-1" onClick={handleDecrementClick}>
          Decrement
        </Button>
      </p>
    </Layout>
  );
}

export default Counter;
