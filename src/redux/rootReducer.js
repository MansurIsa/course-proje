import { combineReducers } from 'redux';
import  {HomeReducer} from './slices/homeSlice';
import {AboutReducer} from './slices/aboutSlice';
import {BlogsReducer} from './slices/blogsSlice';
import {ContactReducer} from './slices/contactSlice';
import { WorksReducer } from './slices/worksSlice';
import { ServicesReducer } from './slices/servicesSlice';

const rootReducer = combineReducers({
  home: HomeReducer,
  about: AboutReducer,
  blog: BlogsReducer,
  contact: ContactReducer,
  work: WorksReducer,
  service: ServicesReducer,
});

export default rootReducer;