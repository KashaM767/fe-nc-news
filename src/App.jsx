import './App.css'
import ArticleList from './ArticleList';
import Header from './Header'
import Home from './Home'
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
