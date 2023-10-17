import React from 'react'
import AuthLayout from '../component/Layout/AuthLayout'
import { ajax } from '../assets/image'

function Home() {
    return (
        <AuthLayout>
            <section className="home">

                <div className="card mb-3" >
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col-xl-4">
                            <img src={ajax} />
                        </div>
                        <div className="col-xl-8">
                            <div className="card-body">

                                <h5>Belajar Ajax</h5>
                                <h6>id : 1</h6>
                                <p>5 Materi</p>
                                <hr />

                                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 gap-2">
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                    <div className="col ">
                                        <span>Apa itu html </span>
                                        <span >  : Link Youtube</span>
                                    </div>
                                </div>

                                <div className="button-action d-flex">
                                    <button className='btn btn-danger me-3' >DELETE</button>
                                    <button className='btn btn-primary' >UPDATE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-action d-grid gap-1 mt-5">
                    <button className='btn btn-success' >CREATE</button>
                </div>


            </section>
        </AuthLayout >
    )
}

export default Home