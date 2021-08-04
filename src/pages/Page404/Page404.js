import "./Page404.css"
import React from 'react'
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="page404">
            <div className="container py-5">
                <Link className="btn btn-dark" to="/">Home</Link>
            </div>
        </div>
    )
}

export default Page404
