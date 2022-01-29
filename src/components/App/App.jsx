import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import fetchData from "../../api";
import { SET_DATA } from "../../store/action-types";
import styles from './App.module.scss'

const getData = async () => {
  const data = await fetchData();
  return data;
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then((data) => dispatch({ type: SET_DATA, payload: data }));
  }, [dispatch]);

  console.log(styles)

  const { getState } = useStore();
  console.log(getState());

  return <div className={styles.app}>here</div>;
};

export default App;
