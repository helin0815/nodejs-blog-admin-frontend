import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'

import { useNavigate } from 'react-router'
import { createLabelInfo } from '../../../request/api/labelInfo'

export default function LabelInfoCreate() {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [confirmLoading, setConfirmLoading] = useState(false)

    const onSubmit = async values => {
        setConfirmLoading(true)
        await createLabelInfo(values)
            .then(res => {
                message.success(res.msg || '创建成功')
                navigate('/labelInfo/list')
            })
            .finally(() => setConfirmLoading(false))
    }
    return (
        <div>
            <h1 style={{marginBottom: '2rem'}}>创建标签</h1>
            <Form
                form={form}
                name="basic"
                style={{width: '50%'}}
                initialValues={{sort_order: 1}}
                onFinish={onSubmit}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    label="名称"
                    rules={[
                        {
                            required: true,
                            message: "请输入标签名称"
                        }
                    ]}
                >
                    <Input placeholder="请输入标签名称" />
                </Form.Item>
                <Form.Item
                    name="sort_order"
                    label="排序"
                    rules={[
                        {
                            required: true,
                            message: "请输入标签排序"
                        }
                    ]}
                >
                    <Input placeholder="请输入标签排序" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button style={{marginRight: '12px'}} onClick={() => form.resetFields()}>
                        重置查询
                    </Button>
                    <Button loading={confirmLoading} type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

