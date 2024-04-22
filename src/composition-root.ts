import 'reflect-metadata'
import {Container} from 'inversify'
import { UploadController } from './controllers/uploadController'

export const container = new Container()

container.bind(UploadController).to(UploadController)