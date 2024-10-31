import elter from "elter";
const styles = elter.create({
  color: {
    color: "darkcyan",
  },
});

function App() {
  return (
    <p className={styles.color}>
      Edit <code>src/App.js</code> and save to reload.
      <br />
      CRA + elter
    </p>
  );
}

export default App;
