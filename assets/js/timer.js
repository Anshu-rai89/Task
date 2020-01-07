
 
 {  
     var vals;
     function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
 
   
    return primes.length;
}

    function activatetimer()
    {   let timerid=$('#plant-bomb');
        console.log('inside function',timerid);
        $('#plant-bomb').submit(function(e)
            {  
                console.log('avctivating timer');
                    e.preventDefault();
                    alert('Bom Has been Planted');
              
                   vals= $('#number').val();
                   console.log(vals);
                   let result=primeFactorsTo(vals);
                   sessionStorage.setItem('val',vals);
                   sessionStorage.setItem('result',result);
                   console.log(result);
                  
                   
                   if (sessionStorage.getItem("counter")) {
                    if (sessionStorage.getItem("counter") <= 0) {
                      var value = 60;
                    } else {
                      var value = sessionStorage.getItem("counter");
                    }
                  } else {
                    var value = 60;
                  }
                
              
                  var counter = function () {
                    if (value <= 0) {
                       alert('Game Over');
                      $('#divCounter').append('<h1 style="height:80%%;width:100%;color:white;background-color:red">Game Over</h1>');
                      clearInterval(interval);

                    } else {
                      value = parseInt(value) - 1;
                      sessionStorage.setItem("counter", value);
                      $('#terr').css('background-color','red');
                    }
                    document.getElementById('divCounter').innerHTML = value;
                  };
              
                  var interval = setInterval(counter, 1000);
            
            });
    }
    console.log('calling function');
    activatetimer();
    console.log('after',primeFactorsTo(vals));

}