import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function LainOuts() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default LainOuts
