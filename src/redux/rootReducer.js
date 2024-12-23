import { combineReducers } from 'redux';
import { ClassesReducer} from './slices/classesSlice';
import { WorksReducer } from './slices/worksSlice';
import { ServicesReducer } from './slices/servicesSlice';
import { LoginReducer } from './slices/loginSlice';
import { SidebarReducer } from './slices/sidebarSlice';
import { HomeworkReducer } from './slices/homeworkSlice';

const rootReducer = combineReducers({
  sidebar: SidebarReducer,
  login: LoginReducer,
  classes: ClassesReducer,
  homework: HomeworkReducer,
  work: WorksReducer,
  service: ServicesReducer,
});

export default rootReducer;