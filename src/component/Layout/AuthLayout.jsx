import React from 'react'
import { JustifyLeft } from 'react-bootstrap-icons'
import { csaLogo } from '../../assets/image'
import NavbarList from '../Fragment/NavbarList'

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
                                <NavbarList title={'Home'} condition={'active'} />
                                <NavbarList title={'Features'} />
                                <NavbarList title={'Pricing'} />

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