import React, { useState } from "react";
import Layout from "@components/layout";
import { Form, message, Button, Progress } from 'antd';
import Step1 from "@components/credit-score/step1";
import Step2 from "@components/credit-score/step2";
import Step3 from "@components/credit-score/step3";
import Step4 from "@components/credit-score/step4";

const steps = [
  {
    title: 'Biodata',
    content: <Step1 />,
  },
  {
    title: 'Pendidikan dan Pekerjaan',
    content: <Step2 />,
  },
  {
    title: 'Tempat Tinggal',
    content: <Step3 />,
  },
  {
    title: 'Pendapatan',
    content: <Step4 />,
  },
];

const layout = {
  labelCol: {
    // span: 8,
  },
  wrapperCol: {
    // span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    // span: 16,
  },
};

export default function CreditScorePage() {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    increase();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const increase = () => {
    if (step < 4) setStep(step + 1)
  };
  const decrease = () => {
    if (step > 1) setStep(step - 1)
  };

  return (
    <Layout title="Credit Score">
      <div className="p-5 md:px-20">
        <p className="text-lg font-semibold mb-2">
          Cek Credit Score
        </p >
        <p className="">
          Langkah {step} dari 4
        </p>
        <div className="my-5">
          <Progress strokeWidth={15} percent={step * 25} showInfo={false} />
        </div>
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={{
            gender: "pria",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="steps-content mb-10">
            <b>{steps[step - 1].title}</b>
            {steps[step - 1].content}
          </div>
          <Form.Item {...tailLayout}>
            {step !== steps.length &&
              <Button type="primary" htmlType="submit">
                Lanjut
              </Button>
            }
            {step === steps.length && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {step > 1 && (
              <Button onClick={() => decrease()}>
                Kembali
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}