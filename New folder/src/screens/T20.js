import React, { Component } from 'react';
import { getT20 } from '../data/teamrankings'
import { Table } from 'react-bootstrap'
class T20 extends Component {
    state = {
        t20: getT20(),
    }
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="container">
                    <center><h1>ICC T20 Rankings</h1></center>
                    <Table striped bordered hover>
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
                            {this.state.t20.map(match =>
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

export default T20;