import { useState } from "react";
import { css, html } from "react-strict-dom";

const styles = css.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
  },
  h1: {
    padding: 8,
    position: "relative",
  },
  button: {
    borderRadius: 16,
    backgroundColor: "blue",
    padding: 10,
    textAlign: "center",
    width: 180,
    userSelect: "none",
    color: "white",
    position: "relative",
    fontWeight: "bold",
  },
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    if (count == 10) {
      alert("Hello world!");

      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <html.div style={styles.container}>
      <html.h1 style={styles.h1}>{count}</html.h1>
      <html.div style={styles.button} onClick={handleOnClick}>
        Count up
      </html.div>
    </html.div>
  );
}
