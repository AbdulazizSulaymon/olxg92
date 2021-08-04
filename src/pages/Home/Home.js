import "./Home.css"
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const categories = [
    {
        to: "detskiy-mir",
        backgroundColor: "#ffce32",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        title: "Детский мир"
    },
    {
        to: "nedvijimost",
        backgroundColor: "#3a77ff",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        title: "Недвижимость"
    },
]

const Home = () => {
    return (
        <Fade>
            <div className="container py-5">
                <h1 className="text-center">Главные категории</h1>
                <div className="categories">
                    {categories.map(v =>
                        <Link to={v.to} className="category">
                            <div className="circle" style={{ backgroundColor: v.backgroundColor }}>
                                <img src={v.img} alt="" />
                            </div>
                            <p>{v.title}</p>
                        </Link>
                    )}
                </div>
            </div>
        </Fade>
    )
}

export default Home
