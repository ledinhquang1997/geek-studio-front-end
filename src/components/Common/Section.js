import React, { Component } from 'react';
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    render() {
        const lastUpdate = new Date(this.props.lastUpdate);
        return (
            <React.Fragment>
                {/* {this.state.redirect && <Redirect to={{pathname:"/management/section/edit/"+this.props.id}}/>} */}
                <div className="col-3">
                    <div className="section-card rounded">
                        <div className="section-card__header lead text-black">{this.props.id}</div>
                        <div className="section-card__content mb-2">
                            <h4 className="text-center section-card__description">{this.props.ordinalNumber}.{this.props.description}</h4>
                            <p className="text-center">Last update: {lastUpdate.toLocaleDateString() + ' ' + lastUpdate.getHours() + ':' + lastUpdate.getMinutes()}</p>
                        </div>
                        <div className="card-footer section-card__footer d-flex justify-content-between">
                            <i className="fas fa-pen fa-lg" onClick={() => this.props.onEditClick(this.props.id)}></i>
                            <i className="far fa-trash-alt fa-lg " onClick={()=>this.props.handleDelete(this.props.id,this.props.description)}></i>
                            <i className="fas fa-eye fa-lg" onClick={this.props.onPreviewClick}></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section;