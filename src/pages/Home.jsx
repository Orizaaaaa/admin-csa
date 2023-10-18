import React from 'react'
import AuthLayout from '../component/Layout/AuthLayout'
import { ajax } from '../assets/image'

function Home() {
    return (
        <AuthLayout>
            <section className="home">
                <div className="formCreate w-75 mx-auto mb-5 text-white">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Title Course
                            </label>
                            <input

                                className="form-control w-75"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <p class="mt-3">Image Course</p>
                        <div class="input-group mb-3 w-50     ">
                            <input type="file" class="form-control" id="inputGroupFile02" />
                            <label class="input-group-text " for="inputGroupFile02" />
                        </div>



                        <div className="button-action d-grid gap-1 mt-5">
                            <button className='btn btn-success' >CREATE</button>
                        </div>
                    </form>

                </div>

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
                                    <button className='btn btn-success me-3'>UPDATE COURSE</button>
                                    <button className='btn btn-primary' data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" >CREATE MATERI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <>


                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModallabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModallabel">
                                        Update
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Title Materi
                                        </label>
                                        <input
                                            className="form-control w-75 shadow-none "
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="basic-url" className="form-label">Link Vidio From Youtube</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon3">https://www.youtube.com/embed/</span>
                                            <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>



            </section>
        </AuthLayout >
    )
}

export default Home