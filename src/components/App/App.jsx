import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import fetchData from "../../api";
import { SET_DATA } from "../../store/action-types";
import styles from "./App.module.scss";
import Header from "../header/header";

const getData = async () => {
  const data = await fetchData();
  return data;
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then((data) => dispatch({ type: SET_DATA, payload: data }));
  }, [dispatch]);

  const { getState } = useStore();
  // console.log(Object?.keys(getState().data));

  return <div className={styles.app}>
    <Header/>
  </div>;
};

export default App;
