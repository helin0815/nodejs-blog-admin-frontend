import {Button, Form, Input, Modal} from "antd";
import {useNavigate} from "react-router";
import React, {useState} from "react";
import {talkWithGPT} from "../../../request/api/chat_gpt";

export default function ChatWithGPT() {
    const [form] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [answer, setAnswer] = useState('');

    const onSubmit = async values => {
        setConfirmLoading(true);
        await talkWithGPT(values).then(res => {
            console.log("res:", res.data.content)
            setAnswer(res.data.content); // 设置答案
            // message.success(res.data.content || '聊天失败')
        }).finally(() => setConfirmLoading(false))
    };


    return (
        <div>
            <h1 style={{marginBottom: '2rem'}}>创建对话</h1>
            <Form
                form={form}
                name="basic"
                style={{width: '80%'}}
                initialValues={{sort_order: 1}}
                onFinish={onSubmit}
                autoComplete="off"
            >
                <Form.Item
                    name="message"
                    label="问题"
                    rules={[
                        {
                            required: true,
                            message: "请输入你想问的问题"
                        }
                    ]}
                >
                    <Input.TextArea   // 修改此行，使用TextArea组件
                        placeholder="请输入你的问题"
                        autoSize={{ minRows: 3, maxRows: 5 }}  // 自定义多行输入框的高度
                    />
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

            <div><p>{answer}</p>  {/* 在这里展示回答 */}</div>
        </div>
    )
}
