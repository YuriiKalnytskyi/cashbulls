import  example  from  '../../api/example/router'
import  auth  from  '../../api/auth/router'
import  item  from  '../../api/item/router'

export default {
  API: (app) => {
    app.use('/api/example', example);
    app.use('/api/auth', auth);
    app.use('/api/item', item);
  }
}
