import React, { memo, useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  // useMemo allows to memoize(store) any kind of data which you want to store just like useCallback  
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(DemoList);
