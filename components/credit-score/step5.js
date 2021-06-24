import { useEffect, useState } from "react";
import { connect } from 'react-redux';
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

const Step5 = (props) => {
    const [score, setScore] = useState(0)
    const [status_credit, setStatus] = useState("Status")
    const { usia, status, tanggungan, pendidikan, pekerjaan, lama_bekerja, level_bekerja, tempat_tinggal, gaji, amount, repayment, insurance, tujuan, kredit_ke } = props;
    useEffect(() => {
        let count = 0;
        if (Number(usia) < 18) {
            count += 2;
        } else if (Number(usia) >= 18 && Number(usia) <= 20) {
            count += 3;
        } else if (Number(usia) >= 21 && Number(usia) <= 55) {
            count += 5;
        } else {
            count += 4;
        }
        count += Number(status) + Number(tanggungan) + Number(pendidikan) + Number(lama_bekerja) + Number(level_bekerja) + Number(gaji) + Number(amount) + Number(repayment) + Number(insurance) + Number(tujuan) + Number(kredit_ke) + Number(pekerjaan[0]) + Number(tempat_tinggal[0]);
        setScore(count);
        if (count >= 24 && score <= 35) {
            setStatus("Kredit Macet")
        } else if (count >= 36 && count <=47){
            setStatus("Kredit Diragukan")
        } else if (count >= 48 && count <=59){
            setStatus("Kredit Tidak Lancar")
        } else if (count >= 60 && count <=71){
            setStatus("Kredit Dalam Perhatian Khusus")
        } else if (count >= 72 && count <=84){
            setStatus("Kredit Lancar")
        }

    })
    return (
        <>
            <div>Hasil Score : {score}</div>
            <div>Status : {status_credit}</div>
        </>
    )
}

const mapStateToProps = (state) => ({
    nama: state.creditScore.nama,
    tgl_lahir: state.creditScore.tgl_lahir,
    usia: state.creditScore.usia,
    status: state.creditScore.status,
    tanggungan: state.creditScore.tanggungan,

    pendidikan: state.creditScore.pendidikan,
    pekerjaan: state.creditScore.pekerjaan,
    lama_bekerja: state.creditScore.lama_bekerja,
    level_bekerja: state.creditScore.level_bekerja,

    tempat_tinggal: state.creditScore.tempat_tinggal,

    gaji: state.creditScore.gaji,
    amount: state.creditScore.amount,
    repayment: state.creditScore.repayment,
    insurance: state.creditScore.insurance,
    tujuan: state.creditScore.tujuan,
    kredit_ke: state.creditScore.kredit_ke,
})

export default connect(mapStateToProps, null)(Step5)