import React, { useState } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, message, Button, Progress } from 'antd';

import { wrapper } from '@store/store'
import { addStep1 } from '@store/credit-score/action'

import Layout from "@components/layout";
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

const CreditScorePage = (props) => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    increase();
    if(step===1){
      props.addStep1(values.nama);
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const increase = () => {
    if (step < 4) setStep(step + 1)
  };
  const decrease = () => {
    if (step > 1) setStep(step - 1)
  };

  const onFormDone = () => {
    // message.success('Processing complete!');
    // console.log(form)
  }

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
            nama: props.nama
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="steps-content mb-10">
            <b>{steps[step - 1].title}</b>
            {steps[step - 1].content}
            {/* { steps[step - 1].content && step === 1 &&
               <Step1 nama={props.nama}/>
            } */}
          </div>
          <Form.Item {...tailLayout}>
            {step !== steps.length &&
              <Button type="primary" htmlType="submit">
                Lanjut
              </Button>
            }
            {step === steps.length && (
              <Button type="primary" htmlType="submit" onClick={() => onFormDone()}>
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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    // store.dispatch(addStep1())
  }
)

const mapStateToProps = (state) => ({
  nama: state.creditScore.nama,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addStep1: bindActionCreators(addStep1, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditScorePage)