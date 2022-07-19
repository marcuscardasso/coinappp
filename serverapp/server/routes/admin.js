import express from 'express';

import utils from "../utils";
const {  authenticator } = utils;

const router = express.Router();
const admin = router;

import User from '../models/user';

admin.get('/api/admingetuser', authenticator, async (req, res) => {
    const { user } = req;
    const { id } = req.query;
    
    if (user.admin) {
        const user = await User.findOne({ _id: id });

        res.send({
            message: 'user',
            user
        })
    } else {
        res.send({
            message: 'not admin'
        })
    }
});

admin.get('/api/getusers', authenticator, (req, res) => {
    const { user } = req;
    if (user.admin) {
        User.find().then(users => {
            res.status(201).send({ 
                users
            });
        })
    }
});

admin.patch('/api/patchuser', authenticator, async (req, res) => {
    const admin = req.user;

    if (admin.admin) {
        const { userid } = req.query;

        User.findById(userid).then(async user => {
            //console.log(user, 'user here')
            const updates = Object.keys(req.body);
            const allowedUpdates = [
                'accountPlan', 
                'balance',
                'margin',
                'equity',
                'requirement',
                'deposits',
                'withdrawals',
                'credits',
                'bonuses',
                'fees',
                'internalTransfers',
                'notifications'
            ];
            
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
            if (!isValidOperation) {
                return res.status(400).send({ error: 'Invalid updates!' })
            }
        
            try {
                updates.forEach((update) => {
                    if (Array.isArray(req.body[`${update}`])) {
                        const item = req.body[`${update}`];

                        if (item.length) {
                            const itemArray = user[`${update}`];
                            user[`${update}`] = [...itemArray, ...item];
                        }

                    } else {
                        user[update] = req.body[update];
                    }
                })
                await user.save().then(user => {
                }).catch(err => {
                    console.log(err)
                })
                res.send({
                    user_updated: user
                })
            } catch (error) {
                console.log(error);
                res.status(401).send(error)
            }
        })
    }
})

export default admin;