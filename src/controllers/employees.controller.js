import { pool } from "../db.js"

// export const getEmployees = (req, res) => res.send('obteniendo empleados')
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }

}

// export const getEmployee = (req, res) => res.send('obteniendo empleado')
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    {
      rows.length <= 0 ? res.status(404).json({ message: 'Employee not found' }) : res.json(rows)
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }

}

// export const createEmployees = (req, res) => res.send('creando empleados')
export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])

    res.send({
      id: rows.insertId,
      name,
      salary
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

// export const deleteEmployees = (req, res) => res.send('eliminando empleados')
export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    {
      result.affectedRows <= 0 ? res.status(404).json({
        message: 'Employee not found'
      }) :
        res.sendStatus(204)
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

// export const updateEmployees = (req, res) => res.send('actualizando empleados')
export const updateEmployees = async (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body
  try {
    // En caso de actualizar todos los campos del elemento y se use PUT
    // const [result] = await pool.query('UPDATE employee SET name= ? , salary= ? WHERE id=?', [name, salary, id])

    // En caso de actualizar alguno de los campos del elemento y se use PATCH
    const [result] = await pool.query('UPDATE employee SET name= IFNULL(?, name) , salary= IFNULL(?, salary) WHERE id=?', [name, salary, id])

    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Employee not found' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}