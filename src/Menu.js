import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

import React from 'react'
function Menu() {
  return (
    <nav className={styles.container}>
      <NavLink to="." end>
        Добавить задачу
      </NavLink>
      <NavLink to="end">Завершённые</NavLink>
      <NavLink to="works">Незавершённые</NavLink>
    </nav>
  )
}

export default Menu
