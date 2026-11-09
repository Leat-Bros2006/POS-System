import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import MainLayout from './layout/MainLayout'
import MainLayoutAuth from './layout/MainLayoutAuth'
import EmployeePage from './pages/employee/EmployeePage'
import CategoryPage from './pages/category/CategoryPage'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='employee' element={<EmployeePage />} />
                        <Route path='product/category' element={<CategoryPage />} />
                        <Route path='customer/product' element={<CategoryPage />} />
                        <Route path='*' element={<h1>404 Route Not Found!</h1>} />
                    </Route>

                    <Route path='/login' element={<MainLayoutAuth />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App