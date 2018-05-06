import React, { Component } from 'react';

export default class History extends Component {
    render() {
        const items = this.props.historyItems;

        return (
            <div className='col-6'>
                <div className='card border border-primary mb-3'>
                <div className='card-header alert-primary'>Search History</div>
                    <div className='container'>
                        <table className='table table-striped mt-4'>
                            <tbody>
                                {items.map(item => {
                                    return (
                                        <tr key={item.timestamp}>
                                            <td>{item.city}</td>
                                            <td className='text-right py-0'>{item.date}
                                                <p className='py-0'>{item.time}</p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        );
    }
}