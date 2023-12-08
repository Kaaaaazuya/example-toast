import { toast } from 'react-toastify'

export const useToast = () => {
  //任意のエラーメッセージを表示できるように引数を持たせる
  const error = (msg: string) => {
    toast.warning(msg, {
      position: 'bottom-right', //position
      autoClose: 3000, //default 5000
      hideProgressBar: true,
      closeOnClick: true,
      progress: undefined,
      theme: 'light', //light,dark,clored
    })
  }
  const success = (msg: string) => {
    toast.success(msg, {
      position: 'bottom-right', //position
      autoClose: 3000, //default 5000
      hideProgressBar: true,
      closeOnClick: true,
      progress: undefined,
      theme: 'light', //light,dark,clored
    })
  }
  return { error, success }
}
