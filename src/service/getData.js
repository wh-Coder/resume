/**
 * Created by Administrator on 2017-04-10.
 */
import axios from 'axios'

export const userAccount = userid => axios.get('/handle/userAccountHandler.ashx', {
  params: {
    method: 'GetCollection',
    PageSize: 10,
    pageIndex: 0,
    userid
  }
})

