import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('localhost:8080/app/general-transaction/all');
}

const addGeneralTransactionInformation = (newData: any) => {
    return Axios.post("localhost:8080/app/general-transaction/add-transaction-information", newData);
}


export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation
}