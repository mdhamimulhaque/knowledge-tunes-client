import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Secondary from '../Layout/Secondary';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Author from '../Pages/Author/Author';
import Category from '../Pages/Category/Category';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PostDetails from '../Pages/PostDetails/PostDetails';
import Registration from '../Pages/Registration/Registration';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <Category />
            },
            {
                path: '/post/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`),
                element: <PostDetails />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            }

        ]
    },
    {
        path: '/author',
        element: <Secondary />,
        children: [
            {
                path: '/author',
                element: <Author />
            },
            {
                path: '/author/login',
                element: <Login />
            },
            {
                path: '/author/registration',
                element: <Registration />
            }
        ]
    },
])

export default routes;