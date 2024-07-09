import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { AppBar } from './Components/AppBar'
import "./App.css"

function App() {

  return (
    <>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blogs/:id" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App