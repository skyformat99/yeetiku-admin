import './index.html'
import 'babel-polyfill'
import dva from 'dva'
import createLoading from 'dva-loading'
import { message   } from 'antd'
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
  ...createLoading(),
  history: browserHistory,
  onError ( data ) {
    // if ( data && data.success ) {
    //   message.success(data.message)
    // }else{
    //   message.error(data.message)
    // }
  },
})

// 2. Model
app.model(require('./models/messager'))
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
