import app from 'firebase/app';
import {appConfig} from '../config/config.js'


class Firebase {
  constructor() {
    app.initializeApp(appConfig.config);
  }
}
 
export default Firebase;