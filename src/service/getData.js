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

export const getGiftCategory = () => axios.get('/BookGift/Gift.ashx?method=GetGiftCategory')

export const getGifts = (categoryId) => axios.get('/BookGift/Gift.ashx?method=GetGifts', {
  params: {
    categoryId
  }
})
