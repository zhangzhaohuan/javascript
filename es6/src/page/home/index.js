import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/map'>map和set数据结构</Link>
                    </li>
                    <li>
                        <Link to='/promise'>promise</Link>
                    </li>
                    <li>
                        <Link to='/reflect'>reflect</Link>
                    </li>

                </ul>
            </div>
        )
    }
}
