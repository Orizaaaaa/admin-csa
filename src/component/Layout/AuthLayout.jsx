import React from 'react'
import { JustifyLeft } from 'react-bootstrap-icons'
import { csaLogo } from '../../assets/image'

function AuthLayout({ children }) {
    return (
        <>
            <section className="navbar-content d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg position-fixed  mt-3">
                    <div className="container-fluid px-3">
                        <a className="navbar-brand" href="#"><img src={csaLogo} alt="" /></a>
                        <span className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <JustifyLeft />
                        </span>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                            <button className='btn' >Logout</button>
                        </div>
                    </div>
                </nav>
            </section>

            <div className="page-content ">
                {children}
            </div>

        </>

    )
}

export default AuthLayout