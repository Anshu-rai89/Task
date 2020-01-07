class Soldier
{
    constructor(val,result)
    {
        this.val=val;
        this.result=this.result;
        if(this.result)
        {
           this.ajaxrequest();
        }
        console.log('soldier class called',this);
    }


    ajaxrequest()
    {
        $('#save').submit(function(e)
        {
              e.preventDefault();
              let data=
              {
                  n:val,
                  output:result,
                  name:'anshu'
              }

              $.ajax(
                {
                    type:'post',
                    url:'http://35.222.222.87/frontendtask/check/ ',
                    success:function(data)
                    {
                        console.log(data);
                    }


        });
    });
}
}