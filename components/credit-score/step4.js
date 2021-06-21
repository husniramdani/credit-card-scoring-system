import { Form, Select } from "antd";

const tailLayout = {
    labelCol: {
        xs: {
            span: 8,
        }
    },
    wrapperCol: {
        xs: {
            span: 10,
        }
    },
  };

export default function Step3({}) {
    return (
        <>
            <Form.Item
                {...tailLayout}
                label="Besarnya Gaji"
                name="gaji"
                rules={[
                    {
                        required: true,
                        message: 'Besarnya gaji tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih Besaran Gaji">
                    <Select.Option value="1">{`< 2 juta`}</Select.Option>
                    <Select.Option value="2">2-5 juta</Select.Option>
                    <Select.Option value="3">5-10 juta</Select.Option>
                    <Select.Option value="4">11-20 juta</Select.Option>
                    <Select.Option value="5">{`> 20 juta`}</Select.Option>
                </Select>
            </Form.Item>
        </>
    )
}