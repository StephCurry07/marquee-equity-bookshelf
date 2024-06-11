import "./App.css";
import BookLibrary from "./components/bookLibrary";
import { Route, Routes } from "react-router-dom";
import MyShelf from "./components/MyShelf";
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Personal Bookshelf</h1>
      </header>
      <Routes>
        <Route path="/MyShelf" element={<MyShelf />} />
        <Route path="/" element={<BookLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
