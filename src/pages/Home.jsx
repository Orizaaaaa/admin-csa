import React from 'react'
import AuthLayout from '../component/Layout/AuthLayout'

function Home() {
    return (
        <AuthLayout>
            <section className="home mx-auto">
                <div className="row">
                    <div className="col col-10">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-2">
                        <div className="button-action d-grid gap-1">
                            <button className='btn btn-danger' >DELETE</button>
                            <button className='btn btn-primary' >UPDATE</button>
                            <button className='btn btn-success' >CREATE</button>

                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    )
}

export default Home