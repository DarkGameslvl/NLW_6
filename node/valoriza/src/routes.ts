import { Router } from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticate } from './middlewares/ensureAuthenticate'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)
router.get(
  '/users/compliments/send',
  ensureAuthenticate,
  listUserSendComplimentController.handle
)
router.get(
  '/users/compliments/receive',
  ensureAuthenticate,
  listUserReceiveComplimentController.handle
)
router.get('/tags', ensureAuthenticate, listTagsController.handle)
router.get('/users', ensureAuthenticate, listUsersController.handle)
