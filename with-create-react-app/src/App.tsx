import cssx from "typedcssx";
const css = cssx.create({
  color: {
    color: "darkcyan",
  },
});

function App() {
  return (
    <p className={css.color}>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

export default App;
