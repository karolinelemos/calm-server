var clienteController = require('../controllers/clienteController');


module.exports = function(app){
 
  app.post('/api/verifyLogin',function(req,res){
    clienteController.verifyLogin(req,res);
  });

  app.get('/api/getHistory/:id', function(req, res){
    clienteController.getHistory(req, res);
  });

  app.post('/api/saveUser', function(req, res){
    clienteController.saveUser(req, res);
  });

  app.post('/api/saveHistory', function(req, res){
    clienteController.saveHistory(req, res);
  });

  /* 
  app.post('/',function(req,res){
    clienteController.store(req,res);
  });

  app.get('/detalhe/:id',function(req,res){
    //console.log(req.params.id);
    clienteController.show(req,res);
  }); */

};
