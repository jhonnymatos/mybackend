import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { PsychController } from '../controllers/PsychController'
import { authMiddleware } from '../middlewares/authMiddlewares_User'
import { EvaluationController } from '../controllers/EvaluationController'
import { FormsController } from '../controllers/FormsController'
//import {AppointmentController} from '../controllers/AppointmentController'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/userlogin', new UserController().login)

routes.post('/psych', new PsychController().create)
routes.post('/psychlogin', new PsychController().login)

routes.post('/evaluations', new EvaluationController().create)
routes.get('/psychologists/:psychologistId/evaluations', new EvaluationController().list)

routes.post('/forms', new FormsController().createForm)
routes.get('/forms', new FormsController().getForms)
routes.get('/forms/:id', new FormsController().getFormById)
routes.get('/forms/filter/:filter/:value', new FormsController().getFormsByFilter)

/*routes.post('/appointment', new AppointmentController().createAppointment)
routes.get('/appointment', new AppointmentController().getAppointment)
routes.get('/appointment/:id', new AppointmentController().getAppointment)
routes.patch('/appointment/:id', new AppointmentController().updateAppointmentStatus)*/

routes.use(authMiddleware)
routes.get('/userprofile', new UserController().getProfile)
routes.get('/psychprofile', new PsychController().getProfile)

/*routes.put('/user/:id', new UserController().updateUser)
routes.delete('/user/:id', new UserController().deleteUser)
routes.get('/user/:id', new UserController().getUserById)
routes.get('/user', new UserController().getAllUsers)
routes.get('/user/email/:email', new UserController().findUserByEmail)

routes.put('/psych/:id', new PsychController().updatePsych)
routes.delete('/psych/:id', new PsychController().deletePsych)
routes.get('/psych/:id', new PsychController().getPsychById)
routes.get('/psychs', new PsychController().getAllPsychs)
routes.get('/psych/email/:email', new PsychController().findPsychByEmail)*/

export default routes;