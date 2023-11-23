import { useMutation, useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取分类列表
export const useLabelInfo = (params = {}) =>
    useQuery(['labelInfoList', params], () =>
        postRequest({
            url: '/v1/labelInfo',
            method: 'GET',
            params
        })
    )
export const createLabelInfo = (data = {}) =>
    postRequest({
        url: '/v1/labelInfo',
        method: 'POST',
        data
    })
export const deleteLabelInfo = ({id, ...params} = {}) =>
    postRequest({
        url: `/v1/labelInfo/${id}`,
        method: 'DELETE'
    })

export const updateLabelInfo = ({id, ...data}) =>
    postRequest({
        url: `/v1/labelInfo/${id}`,
        method: "PUT",
        data
    })
export const useLabelInfoDetail = (id = {}) =>
    useQuery(['labelInfoDetail', id], () =>
        postRequest({
            url: `/v1/labelInfo/${id}`
        })
    )
