import React, { Component } from 'react';
import { getOdi } from '../data/teamrankings'
import { Table } from 'react-bootstrap'
class Odi extends Component {
    state = {
        odi: getOdi(),
    }
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container">
                    <center><h1>ICC ODI Rankings</h1></center>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th>Points</th>
                                <th>Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.odi.map(match =>
                                <tr key={match.Position} >
                                    <td>{match.Position}</td>
                                    <td>{match.Team}</td>
                                    <td>{match.Matches}</td>
                                    <td>{match.Points}</td>
                                    <td>{match.Rating}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

            </React.Fragment>

        );
    }
}

export default Odi;