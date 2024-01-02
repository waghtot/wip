class Ajax 
{
  constructor(url, input=null)
  {
    this.url = url;
    this.input = input;
  }

  get()
  {
    let dtype = 'json';
    if(this.input !== null)
    {
      this.url=this.url+this.input+'.html';
      dtype = 'html';
    }
    let res;
    $.ajax({
      type:'get',
      dataType:dtype,
      url:this.url,
      async:false,
      success: function(data){
        res = data;
      },
      error: function(error){
        console.log(error);
      }
    });
    return res;

  }

  post()
  {
    let my_data;
    $.ajax({
      type:'POST',
      dataType:'json',
      url:this.url,
      async:false,
      data:JSON.stringify(this.input),
      success:function(res){
        my_data = res;
      },
      error: function(error){
        console.log(error);
      }
    });
    return my_data;
  }

}
export {Ajax}