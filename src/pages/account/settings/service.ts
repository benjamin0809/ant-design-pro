/*
 * @Author: your name
 * @Date: 2021-11-22 20:31:42
 * @LastEditTime: 2021-11-24 23:57:59
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \umi-antd-pro\src\pages\account\settings\service.ts
 */
import { request } from 'umi';
import type { CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/accountSettingCurrentUser');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}

export async function addTag() {
  return request('/api/accountSettingCurrentUser', { data: { tag: { key: '6', label: '888888' } }, method: 'put' });
}
