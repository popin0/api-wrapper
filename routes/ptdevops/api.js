const express = require('express');
const axios = require('axios');
const router = express.Router();

const instance = axios.create({
  baseURL: 'http://t450s:8080'
  // withCredentials: false, 
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret'
  // },
  // responseType: 'json'
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// Get calls to target api
router.get('/', (req, res) => {
  async function getHandler(req, res){
    let response;
    try{
      response = await instance.get(req.query.path);
      return res.json(response.data);
    } catch(error){
      console.log(`GET ${req.query.path} Failed, message: ${error.message}`);
      console.log(error);
      return res.status(500).json({msg: "pt-devops services are not available at the moment"});
    }
  }
  getHandler(req, res);

});

// Post calls to target api
router.post('/', (req, res) => {
  async function postHandler(req, res){
    let response;
    try{
      response = await instance.post(req.body.path, req.body.payload);
      return res.json(response.data);
    } catch(error){
      console.log(`GET ${req.body.path} Failed, message: ${error.message}`);
      console.log(error);
      return res.status(500).json({msg: "pt-devops services are not available at the moment"});
    }
  }
  postHandler(req, res);

});


module.exports = router;