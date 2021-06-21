import { connect } from 'react-redux';
import { Form, Input, Radio, InputNumber } from "antd";

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

const Step1 = ({ }) => {
    return (
        <>
            <Form.Item
                {...tailLayout}
                label="Nama Lengkap"
                name="nama"
                rules={[
                    {
                        required: true,
                        message: 'Nama tidak boleh kosong!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Jenis Kelamin"
                rules={[
                    {
                        required: true,
                        message: 'Jenis kelamin tidak boleh kosong!',
                    },
                ]}
            >
                <Radio.Group initialValue="pria">
                    <Radio value="pria">Pria</Radio>
                    <Radio value="wanita">Wanita</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                {...tailLayout}
                name="usia"
                label="Usia"
                rules={[
                    {
                        required: true,
                        message: 'Usia tidak boleh kosong!',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
        </>
    )
}

export default connect((state) => state)(Step1)
