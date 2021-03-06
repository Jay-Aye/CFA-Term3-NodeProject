import React from 'react'
import { NavLink } from 'react-router-dom'


class OfficeNav extends React.Component {
  render() {
    return (
      <nav>
        <ul className='nav'>
          <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
          <li><NavLink to='/jobs'  activeClassName='active'>Job List</NavLink></li>
          <li><NavLink to='/jobs/new'  activeClassName='active'>Create Job</NavLink></li>
          <li><NavLink to='/users'  activeClassName='active'>User List</NavLink></li>
          <li><NavLink to='/users/new'  activeClassName='active'>Create User</NavLink></li>
          <li><NavLink to='/customers'  activeClassName='active'>Customer List</NavLink></li>
        </ul>
      </nav>
    );
  }
}
export default OfficeNav
