var WorkHours = function (req, res, next) {
    const hours = new Date().getHours()
    const dayofweek = new Date().getDay()
  
    
  
  
if (hours >= 09 && hours <= 18 && dayofweek >=0 && dayofweek <=5)
 {
    console.log('We are open')
    next()
  } else {
    console.log(' we are closed')
    res.send('<h1> Sorry We are Closed </h1>')
  }
   
  };

  module.exports=WorkHours
