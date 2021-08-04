import "./Category.css"
import React from 'react'
import { Link, useParams } from "react-router-dom";
import datas from "../../data"

const Category = () => {
    const { category } = useParams();
    const data = datas[category];

    console.log(data);

    return (
        <div className="container py-5">
            <h1 className="mb-4">Category {category}</h1>
            <div className="products">
                {data?.map(v =>
                    <Link to={`${category}`} className="mb-3 rounded overflow-hidden shadow d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={v.img} style={{ height: "200px", width: "200px", objectFit: "cover" }} alt="" />

                            <div className="h-100 d-flex flex-column justify-content-between p-3">
                                <h4>{v.title}</h4>
                                <span>{v.location}</span>
                            </div>
                        </div>

                        <h4 className="m-3">{v.price}</h4>
                    </Link>
                )}

            </div>
        </div>
    )
}

export default Category
