import React, { useState } from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { Gif, SearchStore } from "../../store/search/search.types";
import { searchGifs } from "../../store/search/search.actions";

interface MapState extends SearchStore {}

interface MapDispatch {
  searchGifs: typeof searchGifs;
}

const mapStateToProps = (store: SearchStore) => {
  return {
    data: store.data,
    error: store.error,
    loading: store.loading,
  };
};
const mapDispatchToProps = { searchGifs };

const App: React.FC<MapState & { dispatch: CallableFunction }> = ({
  data,
  dispatch,
}) => {
  const [searchStr, setSearchStr] = useState("");

  const onClick = (event: React.MouseEvent) => dispatch(searchGifs(searchStr));
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchStr(event.target.value);

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <h1 className={styles.header}>GIPHY</h1>
        <input
          onChange={onChange}
          type="text"
          className={styles.input}
          placeholder="Поищи мемных гифок тут :)"
        />
        <button onClick={onClick}>GO</button>
        {data?.map(
          (
            {
              title,
              images: {
                original: { url, width, height },
              },
            }: Gif,
            index
          ) => (
            <div key={index}>
              <img
                className={styles.gif}
                src={url}
                alt=""
                width={width}
                height={height}
              />
              <div>{title}</div>
            </div>
          )
        )}
      </div>
      <span className={styles.author}>Gadzhiev Kirill, 2021</span>
    </div>
  );
};

export default connect(mapStateToProps)(App);
