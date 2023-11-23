import React,{ useState } from "react";
import { useNavigate } from "react-router";

import {useDocumentTitle} from "../../../hooks/useDocumentTitle";
import {useLabelInfo} from "../../../request/api/labelInfo";
import {labelInfoFormItemMap as formItemMap} from "../../../utils/form-search";
import FormSearch from '../../Common/FormSearch/FormSearch'
import LabelInfoTable from './Table'

export default function LabelInfoList() {
    useDocumentTitle("标签列表")
    const [params, setParams] = useState({})
    const navigate = useNavigate()
    const {data: {data: labelInfoList = [], meta: pagination = {}} = {}, isLoading} = useLabelInfo(params)
    const onAdd = () => navigate('/labelInfo/create')
    return (
        <div>
            <FormSearch formItemMap={formItemMap} params={params} onAdd={onAdd} setParams={setParams}/>
            <LabelInfoTable
                params={params}
                isLoading={isLoading}
                labelInfoList={labelInfoList}
                pagination={pagination}
                setParams={setParams}
            />
        </div>
    )
}
