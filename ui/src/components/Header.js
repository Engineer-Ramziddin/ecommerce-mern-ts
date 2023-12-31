import React from 'react'
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Header = () => {
    return (<>
            <header className="header-top-strip py-3 text-white">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p>Hotline: <a href="tel: +998905554444">+998905554444</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white" to={"about"}>Dev mern</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" id="basic-addon2">
                                    <BsSearch/>
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                        </div>
                    </div>
                </div>
            </header>
        </>)
}

export default Header