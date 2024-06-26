import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { PsychController } from '../controllers/PsychController'
import { authMiddlewareUser } from '../middlewares/authMiddlewares_User'
import { authMiddlewarePsych } from '../middlewares/authMiddlewares_Psych'
import { EvaluationController } from '../controllers/EvaluationController'
import { FormsController } from '../controllers/FormsController'
import { AppointmentController } from '../controllers/AppointmentController'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/userlogin', new UserController().login)
routes.get('/userprofile', authMiddlewareUser, new UserController().getProfile)
routes.put('/updateUser', authMiddlewareUser, new UserController().updateUser)
routes.delete('/deleteUser', authMiddlewareUser, new UserController().deleteUser)


routes.post('/psych', new PsychController().create)
routes.post('/psychlogin', new PsychController().login)
routes.get('/psychprofile', authMiddlewarePsych, new PsychController().getProfile)
routes.put('/updatePsych', authMiddlewarePsych, new PsychController().updatePsych)
routes.delete('/deletePsych', authMiddlewarePsych, new PsychController().deletePsych)


routes.post('/appointments', new AppointmentController().create)
routes.put('/appointments/:id/approve', new AppointmentController().approve)
routes.put('/appointments/:id/reject', new AppointmentController().reject)
routes.get('/psychologists/:psychId/appointments', new AppointmentController().getPsychAppointments)


routes.post('/evaluations', new EvaluationController().create)
routes.get('/psychologists/:psychologistId/evaluations', new EvaluationController().list)


routes.post('/forms', new FormsController().createForm)
routes.get('/forms', new FormsController().getForms)
routes.get('/forms/:id', new FormsController().getFormById)


export default routes;