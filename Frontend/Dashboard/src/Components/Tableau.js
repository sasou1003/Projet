import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.location}
                </td>
                <td>
                    {this.props.obj.personsInHouse}
                </td>
                <td>
                    {this.props.obj.houseSize}
                </td>
            </tr>
        );
    }
}

export default DataTable;