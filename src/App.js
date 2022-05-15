import Header from "./components/header/header";
import History from "./components/histroy/history";
import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: "99.3vw", overflow: "hidden" }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
          <Route
            path="/support"
            element={<h1>Support will be available soon</h1>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
