import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SystemActions } from '../../../actions';
class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            totalMoney:0
        }
    }

    componentWillMount() {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var total =0;
        cart.forEach(item=>{
            total+=item.course.cost
        })
        this.setState({
            item: cart,
            totalMoney:total
        });
    }

    handleDeleteItem = (index) => {
        var cart = JSON.parse(localStorage.getItem("cart"))
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.props.changeCartQuantity(JSON.parse(localStorage.getItem("cart")).length);
        var total =0;
        cart.forEach(item=>{
            total+=item.course.cost
        })
        this.setState({
            item: cart,
            totalMoney:total
        });
    }

    renderInstructorNames = (instructors) => {
        var instructorsList = "";
        instructors.forEach((value, index) => {
            if (index === instructors.length - 1)
                instructorsList += value.name;
            else if (index === instructors.length - 2)
                instructorsList += value.name + " & ";
            else
                instructorsList += value.name + ", ";
        });
        return instructorsList;
    }

    renderItems = () => {
        var cart = JSON.parse(localStorage.getItem("cart"))
        return cart.map((item, index) => {
            return (<tr key={index}>
                <td>
                    <div className="row">
                        <div className="col-sm-4 hidden-xs"><img style={{ width: "95%" }} src={item.course.image} alt="..." /></div>
                        <div className="col-sm-8">
                            <h4 className="nomargin">{item.course.name}</h4>
                            <p>{this.renderInstructorNames(item.course.instructors)}</p>
                        </div>
                    </div>
                </td>
                <td>${item.course.cost}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteItem(index)}><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>)
        })
    }
   
   
    render() {
        return (
            <div style={{ minHeight: "100vh" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="panel-title rounded">
                                <h2 className="text-center cart-title">Unlimited courses with <strong className="strong">Geek Studio</strong></h2>
                                <p className="text-center lead">You can take your money back within a month</p>
                            </div>
                            <table id="cart" class="table table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th style={{ width: "50%" }}>Product</th>
                                        <th style={{ width: "10%" }}>Price</th>
                                        <th style={{ width: "10%" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderItems()}
                                </tbody>
                            </table>

                        </div>
                        <div className="col-4">
                            <div className="panel-summary rounded">
                                <h2 className="text-center text-white pb-0">Summary</h2>
                                <hr style={{ background: "white" }} />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="lead text-left text-white"> <i className="fas fa-dollar-sign" style={{ color: "yellow" }}></i> &nbsp; &nbsp;Item Subtotal</p>
                                        </div>
                                        <div className="col-5">
                                            <p className="lead text-right text-white"><strong>{this.state.totalMoney} USD</strong></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="lead text-left text-white"> <i className="fas fa-dollar-sign" style={{ color: "yellow" }}></i> &nbsp; &nbsp;Tax</p>
                                        </div>
                                        <div className="col-5">
                                            <p className="lead text-right text-white"><strong>0 USD</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ background: "white" }} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="lead text-left text-white"> <i className="fas fa-dollar-sign" style={{ color: "yellow" }}></i> &nbsp; &nbsp;Total</p>
                                        </div>
                                        <div className="col-5">
                                            <p className="lead text-right text-white"><strong>{this.state.totalMoney} USD</strong></p>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning mb-3" style={{ width: '100%' }}>
                                        Check out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        alertOn: (type, content) => {
            dispatch(SystemActions.alertOn(type, content))
        },
        changeCartQuantity: (number) => {
            dispatch(SystemActions.changeCartNumber(number))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)