import './App.css'
import ArticleList from './ArticleList';
import Header from './Header'
import Home from './Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Article from './Article';
import TopicsList from './TopicsList';




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:slug/articles" element={<ArticleList />}
          />
          <Route path="/articles/:article_id" element={<Article />} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
