
/*
 * GET home page.
 */

exports.index = function(app){
   app.get('/',function(req,res){
    
    res.render('index', { title: 'Express' });

    });
	app.get('/home',function(req,res){
    
    res.render('home');

  });
  }	
 