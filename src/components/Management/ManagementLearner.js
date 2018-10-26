import React, { Component } from 'react';

class ManagementLearner extends Component {
    render() {
        return (
            <div className="management">
                <table className="table table-hover">
                    <thead className="management-thead">
                        <tr>
                            <th scope="col" className="lead" style={{ width: "250px" }} >Name</th>
                            <th scope="col" className="lead" style={{ width: "80px"}}>Cost</th>
                            <th scope="col" className="lead" style={{ width: "100px" }}>NOS</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>Category</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>Date Create</th>
                            <th scope="col" className="lead" style={{ width: "150px" }}>Last Update</th>
                            <th scope="col" className="lead text-center" style={{ width: "200px" }}><i className="fas fa-plus fa-lg text-center"></i></th>
                        </tr>
                    </thead>
                    <tbody className="management-tbody">
                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>
                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>

                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>

                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>

                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>

                        <tr>
                            <td scope="row">Docker - magic tool</td>
                            <td>350</td>
                            <td>1000</td>
                            <td>Programming</td>
                            <td>1/1/2018</td>
                            <td>2/1/2018</td>
                            <td className="text-center"> <i className="fas fa-pen fa-lg pr-3"></i> <i className="far fa-trash-alt fa-lg "></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ManagementLearner;