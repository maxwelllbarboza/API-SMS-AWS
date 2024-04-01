import  AWS  from  'aws-sdk';
import { Router } from 'express';
import sendSMS from './utils/SNS';

const route = Router();

const sns = new AWS.SNS({apiVersion: '2024-04-01'})

route.post('/sendmessage', async(req, res) => {
    const { PhoneNumber, Message } = req.body;
    await sendSMS({sns, PhoneNumber, Message});

    res.json({message: 'sms enviado'})
})

export default route

