import React from 'react'
import { Outlet } from 'react-router'

const MainLayoutAuth = () => {
    return (
        <div>
            <div>
                Pos-Nit
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayoutAuth