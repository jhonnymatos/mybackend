import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { PsychController } from '../controllers/PsychController'
import { authMiddleware } from '../middlewares/authMiddlewares_User'
import { EvaluationController } from '../controllers/EvaluationController'
import { FormsController } from '../controllers/FormsController'
import { AppointmentController } from '../controllers/AppointmentController'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/userlogin', new UserController().login)

routes.post('/psych', new PsychController().create)
routes.post('/psychlogin', new PsychController().login)

routes.post('/appointments', new AppointmentController().create)
routes.put('/appointments/:id/approve', new AppointmentController().approve)
routes.put('/appointments/:id/reject', new AppointmentController().reject)
routes.get('/psychologists/:psychId/appointments', new AppointmentController().getPsychAppointments)

routes.post('/evaluations', new EvaluationController().create)
routes.get('/psychologists/:psychologistId/evaluations', new EvaluationController().list)

routes.post('/forms', new FormsController().createForm)
routes.get('/forms', new FormsController().getForms)
routes.get('/forms/:id', new FormsController().getFormById)

routes.use(authMiddleware)
routes.get('/userprofile', new UserController().getProfile)
routes.get('/psychprofile', new PsychController().getProfile)


export default routes;