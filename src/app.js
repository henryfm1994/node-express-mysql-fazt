import express from "express"
import employeesRoutes from "./routes/employes.routes.js";
import dbRoutes from "./routes/db.routes.js"

const app = express()

// Para interpretar los json q vienen en el request
app.use(express.json())

app.use('/api', dbRoutes)
app.use('/api', employeesRoutes)

// En caso de q no exista la ruta
app.use((req, res, next) => {
  res.status(404).json({
    message: 'EndPoint not found'
  })
})

export default app;