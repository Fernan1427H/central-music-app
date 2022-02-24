import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AboutPage" element={<Article />} />
        <Route path="/ContactPage" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
