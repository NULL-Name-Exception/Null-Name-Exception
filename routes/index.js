var express = require('express');
var router = express.Router();
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Expresssss' });
// });



router.get('/', (req,res)=>{
  // exec(sql).then(rows=>{
  //   console.log(rows)
  //   res.json(rows)}
  //   ).catch(error=>console.log(error))
  res.send("Hello get")
})

router.post('/', (req,res)=>{
  // exec(sql).then(rows=>{
  //   console.log(rows)
  //   res.json(rows)}
  //   )
  res.send("Hello post")
  console.log(req.body)
})



module.exports = router;
