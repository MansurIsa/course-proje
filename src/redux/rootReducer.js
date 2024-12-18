import { combineReducers } from 'redux';
import { ClassesReducer} from './slices/classesSlice';
import {ContactReducer} from './slices/contactSlice';
import { WorksReducer } from './slices/worksSlice';
import { ServicesReducer } from './slices/servicesSlice';
import { LoginReducer } from './slices/loginSlice';
import { SidebarReducer } from './slices/sidebarSlice';

const rootReducer = combineReducers({
  sidebar: SidebarReducer,
  login: LoginReducer,
  classes: ClassesReducer,
  contact: ContactReducer,
  work: WorksReducer,
  service: ServicesReducer,
});

export default rootReducer;