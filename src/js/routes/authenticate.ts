import {Router} from 'express';
import {UserModel} from '../model/user.model';
const router = Router();

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  console.log(email, password);
  res.status(200).send();
});

router.post('/register', (req,res) => {
  const {email,firstname,lastName,password} = req.body;
})

export {router};
