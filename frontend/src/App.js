import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import UserProvider from "./context/UserProvider";
import Main from "./components/main";
import Register from "./components/main/Register";
import Contactus from "./components/main/Contactus";
import Login from "./components/main/Login";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Toaster position="top-right" />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/main/login" />} />
            <Route path="main" element={<Main />} >
              <Route path="login" element={<Login />} />
              <Route path="contact us" element={<Contactus />} />
              <Route path="register" element={<Register />} />
            </Route>

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
                path="addblog/:id"
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
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
