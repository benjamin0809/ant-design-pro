/*
 * @Author: your name
 * @Date: 2021-11-24 21:47:16
 * @LastEditTime: 2021-11-24 21:54:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \umi-antd-pro\src\utils\storage.ts
 */

const set = (key: string, item: any) => localStorage.setItem(key, JSON.stringify(item))

const get = (key: string) =>  {
  const item = localStorage.getItem(key)
  if(typeof item === 'string') {
    return JSON.parse(item)
  }
  return null
}

const remove = (key: string) => localStorage.removeItem(key)


export default {
  set, get, remove
}
