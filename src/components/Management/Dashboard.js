import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { ManagementActions } from '../../actions';
import {connect} from 'react-redux';
import { ManagementConstants } from '../../constants';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
    animationEnabled: true,

    title: {
        text: "Quantity student - per month"
    },
    data: [
        {
            type: "line",
            dataPoints: [
                { x: new Date("06-01-2018"), y: 100 },
                { x: new Date("07-01-2018"), y: 123 },
                { x: new Date("08-01-2018"), y: 98 },
                { x: new Date("09-01-2018"), y: 130 },

            ]
        }
    ]
}
const optionBarChart = {
    animationEnabled: true,

    title: {
        text: "Number of students with course"
    },
    axisX: {
        interval: 1
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Number of Students"
    },
    data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
            { y: 3, label: "Master Electron" },
            { y: 7, label: "C# Core" },
            { y: 5, label: "Conquer Node JS" },
            { y: 9, label: "CSS wonderful" },
            { y: 7, label: "HTML is not programming lang" },
            { y: 7, label: "Java Core" },
            { y: 9, label: "Vue JS in real word" },
            { y: 8, label: "Website with PHP" },
            { y: 11, label: "TypeScript course" },
            { y: 15, label: "Marketing Leader" },
            { y: 12, label: "Market Leader" },
            { y: 15, label: "Docker - magic tool" },
            { y: 25, label: "Linux" },
            { y: 28, label: "ReactJS is easy" },
           
        ]
    }]
}
const optionPieChart = {
    animationEnabled: true,

    title: {
        text: "Interest of students devided into categories"
    },
    legend: {
        maxWidth: 350,
        itemWidth: 120
    },
    data: [
        {
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [
                { y: 323, indexLabel: "Programming" },
                { y: 203, indexLabel: "Engineering" },
                { y: 127, indexLabel: "Bussiness" },
                { y: 345, indexLabel: "Marketing" },

            ]
        }
    ]
}
class Dashboard extends Component {
    
    componentWillMount() {
        this.props.changeManagementSection(ManagementConstants.DASHBOARD,ManagementConstants.DASHBOARD)
    }
    
    render() {
        return (
            <div className="management">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div style={{ width: '90%', margin: 'auto' }}>
                                <CanvasJSChart options={optionPieChart}
                                /* onRef = {ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{ width: '90%', margin: 'auto' }}>
                                <CanvasJSChart options={options}
                                /* onRef = {ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                        <hr/>
                        <div className="col-12">
                            <div style={{ width: '90%', margin: 'auto', marginTop:'50px',marginBottom:'50px' }}>
                                <CanvasJSChart options={optionBarChart}
                                /* onRef = {ref => this.chart = ref} */
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeManagementSection: (managementType, managementAction) => {
            dispatch(ManagementActions.changeManagementSection(managementType, managementAction))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)