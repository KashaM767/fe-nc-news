import './App.css'
import ArticleList from './ArticleList';
import Header from './Header'
import Home from './Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Article from './Article';
import CommentsList from './CommentsList';




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />

          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<CommentsList />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
