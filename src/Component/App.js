import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import styles from "../Styles/home.module.css";
function App() {
  return (
    <div className="App">
      <h1 className={styles.heading}>Todolist</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
