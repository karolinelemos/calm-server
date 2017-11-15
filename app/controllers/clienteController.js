var clienteModel = require('../models/clienteModel')();

module.exports.verifyLogin = function(req,res){
  clienteModel.verifyLogin(req.body, function(error, result){
    const r = result[0];
    if(r)
    {
      if(r.password == req.body.password)
      {
        res.send(JSON.stringify(r));
      } else {
        res.send(JSON.stringify(false));
      }
    } else {
      res.send(JSON.stringify(false));
    }
  });
};

module.exports.getHistory = function(req, res){
  clienteModel.getHistory(req.params.id, function(error, result){
    res.send(JSON.stringify(result));
  });
}

module.exports.saveUser = function(req, res){
  clienteModel.saveUser(req.body, function(error, result){
    res.send(JSON.stringify(result));
  });
}

module.exports.saveHistory = function(req, res){
  clienteModel.saveHistory(req.body, function(error, result){
    res.send(JSON.stringify(result));
  });
}

/* 
module.exports.show = function(req,res){
  clienteModel.find(req.params.id,function(erro,resultado){
    if(resultado[0] && !erro){
      res.render('site/detalhe',{cliente:resultado[0]});
    }else{
      console.log("Esse cliente não existe");
      res.redirect('/');
    }
  });
}; */