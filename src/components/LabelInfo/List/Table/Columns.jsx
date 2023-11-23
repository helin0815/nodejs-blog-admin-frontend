import React from 'react'
import {Tag} from 'antd'
import {commonsStatusText, commonsStatusTagColor} from '../../../../utils/form-search'

export const labelInfoColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 80
    },
    {
        title: '标签名',
        dataIndex: 'user_info',
        key: 'user_info',
        render: user => <div> {user ? user.username : '匿名'} </div>
    },
    {
        title: '状态1',
        dataIndex: 'email',
        key: 'email',
        render: email => <div> {parseInt(email, 10) === 0 ? '匿名' : email} </div>
    },
    {
        title: '状态2',
        dataIndex: 'status',
        key: 'status',
        render: status => (
            <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
                {status === 1 ? '正常' : '隐藏'}
            </Tag>
        )
    }
]
