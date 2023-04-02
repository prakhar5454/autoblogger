import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactus from "./components/Contactus";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authorizer from "./components/auth/Auth";
import User from "./components/user";
import UserProfile from "./components/user/Profile";
import ManageBlog from "./components/user/ManageBlog";
import AddBlog from "./components/blog/AddBlog";
import Blog from "./components/blog";
import BlogManager from "./components/blog/BlogManager";
import ViewBlog from "./components/blog/ViewBlog";
import ListBlog from "./components/blog/ListBlog";
import VideoManager from "./components/user/VideoManager";
import AddVideo from "./components/user/AddVideo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="login" element={<Login />} />
          <Route path="contact us" element={<Contactus />} />
          <Route path="register" element={<Register />} />

          <Route
            element={
              <Authorizer>
                <User />
              </Authorizer>
            }
            path="user"
          >
            <Route path="profile" element={<UserProfile />} />
            <Route path="manageblog" element={<ManageBlog />} />
            <Route
              path="addblog"
              element={
                <Authorizer>
                  <AddBlog />
                </Authorizer>
              }
            />
            <Route path="managevideo" element={<VideoManager />} />
            <Route path="addvideo" element={<AddVideo />} />
          </Route>

          <Route element={<Blog />} path="blog">
            <Route
              element={
                <Authorizer>
                  <AddBlog />
                </Authorizer>
              }
              path="addblog/:videoid"
            />
            <Route
              element={
                <Authorizer>
                  <BlogManager />
                </Authorizer>
              }
              path="blogmanager/:id"
            />
            <Route
              element={
                <Authorizer>
                  <ViewBlog />
                </Authorizer>
              }
              path="viewblog/:id"
            />
            <Route element={<ListBlog></ListBlog>} path="listblog"></Route>
            <Route element={<AddBlog></AddBlog>} path="addblog"></Route>
            <Route element={<ViewBlog></ViewBlog>} path="viewblog"></Route>
            <Route
              element={<BlogManager></BlogManager>}
              path="blogmanager"
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
