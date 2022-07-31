import axios from 'axios'
import cors from 'cors'
import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()
app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
)

app.get('/', async (req: Request, res: Response) => {
  try {
    const { data } = await axios(
      'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e',
    )
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

app.use((req: Request, res: Response) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
