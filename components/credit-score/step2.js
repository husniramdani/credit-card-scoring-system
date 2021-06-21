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

export default function Step2({}) {
    return (
        <>
            <Form.Item
                {...tailLayout}
                label="Pendidikan"
                name="pendidikan"
                rules={[
                    {
                        required: true,
                        message: 'Pendidikan tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih pendidikan terakhir">
                    <Select.Option value="1">Tidak tamat SD</Select.Option>
                    <Select.Option value="2">SD</Select.Option>
                    <Select.Option value="3">SMP</Select.Option>
                    <Select.Option value="4">SMA</Select.Option>
                    <Select.Option value="5">D1</Select.Option>
                    <Select.Option value="6">D2</Select.Option>
                    <Select.Option value="7">D3</Select.Option>
                    <Select.Option value="8">D4/S1</Select.Option>
                    <Select.Option value="9">S2</Select.Option>
                    <Select.Option value="10">S3</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                {...tailLayout}
                label="Pekerjaan"
                name="pekerjaan"
                rules={[
                    {
                        required: true,
                        message: 'Pekerjaan tidak boleh kosong!',
                    },
                ]}
            >
                <Select placeholder="Pilih pekerjaan saat ini">
                    <Select.Option value="8">Karyawan BUMN</Select.Option>
                    <Select.Option value="7pns">PNS</Select.Option>
                    <Select.Option value="7tni">TNI/POLRI</Select.Option>
                    <Select.Option value="6">Profesional : Dokter/Dosen/Guru</Select.Option>
                    <Select.Option value="5">Pengusaha</Select.Option>
                    <Select.Option value="4">Karyawan Swasta</Select.Option>
                    <Select.Option value="3">Pegawai Kontrak</Select.Option>
                    <Select.Option value="2">Buruh Harian Lepas</Select.Option>
                    <Select.Option value="1">Ibu Rumah Tangga</Select.Option>
                </Select>
            </Form.Item>
        </>
    )
}