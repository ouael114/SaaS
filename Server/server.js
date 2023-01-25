const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errors')
const userRouter = require('./routes/user.routes')
const companyRouter = require('./routes/company.routes')
const cors = require('cors');
const router = require('./routes/user.routes');
const app = express()
const PORT = process.env.PORT || 3000
const mongoURI = process.env.mongoURI
const user = require('./models/user')
const company = require('./models/company');
const Enums = require('./models/enums')
const authorize = require('./middlewares/auth')

const { USER, ADMIN, SUPER_ADMIN} = Enums.ROLES

const jwt = require('jsonwebtoken');
const res = require('express/lib/response');

app.use(cors())

router.get('/get',(req,res,next)=>{
    user.find().then(result=>{
        res.status(200).json({
            userData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.json({
            error:err
        })
    });









 })
 app.get('/userbycompany',(req,res,next)=>{
    let companyname = req.headers.companyname;
   user.find ({ companyname: companyname }).then(result=>{
       res.status(200).json({
           usera:result
       });
   })
   .catch(err=>{
       console.log(err);
       res.json({
           error:err
       })
   });

})

app.get('/user', (req, res, next) => {
    let token = req.headers.token; //token
        jwt.verify(token, 'AZbfKQJFKJbdqshvf!.?hsqf', function(err, decoded) {
            if(err){
                console.log(err)
            }else{
                user.findOne({ _id: decoded.user}, (err, uuser) => {
                    if (err) return console.log(err)
                    return res.status(200).json({
                      title: 'user grabbed',
                      user: {
                        email: uuser.email,
                        fullname: uuser.fullname,
                        role: uuser.role,
                        _id: uuser._id,
                        companyname:uuser.companyname
                      }
                    })
                  })
            }
           })
  
    })
    app.get('/companie', (req, res, next) => {
        let email = req.headers.email; 
        company.find({ email: email}).then(result=>{
            res.status(200).json({
                companyuData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.json({
                error:err
            })
        
        });
    })


 router.get('/getcompanie',(req,res,next)=>{
  company.find().then(result=>{
      res.status(200).json({
          companyData:result
      });
  })
  .catch(err=>{
      console.log(err);
      res.json({
          error:err
      })
  });

})
router.put('/:id', async (req, res, next)=>{
    user.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            companyname:req.body.companyname,
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_user:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:er
        })
    })
})
app.delete('/:id',(req,res,next)=>{
    user.deleteOne({_id:req.params.id})
    .then(result=>{
      res.status(200).json({
        message:'User Deleted',
        result:result
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })
  })
  app.delete('/company/:id',(req,res,next)=>{
    company.deleteOne({_id:req.params.id})
    .then(result=>{
      res.status(200).json({
        message:'Company Deleted',
        result:result
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })
  })

  app.delete('/mumber/:id',(req,res,next)=>{
    user.deleteOne({_id:req.params.id})
    .then(result=>{
      res.status(200).json({
        message:'mumber Deleted',
        result:result
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })
  })








mongoose.connect(mongoURI)
  .then(()=>{ console.log("db connected"); })
  .catch((err)=> console.log(err));

app.use(express.json())

app.use('/users', userRouter)
app.use('/companies', companyRouter)

// Error Handling
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server up and running on port : ${PORT}`)
})