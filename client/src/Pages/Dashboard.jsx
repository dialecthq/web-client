import React from 'react'
import User from '../Containers/userContainer'

const Dashboard = () => {
    const user = User.useContainer()
    return (
        <div>
            <p>Hello @{user.user.username}</p>
        </div>
    )
}

export default Dashboard