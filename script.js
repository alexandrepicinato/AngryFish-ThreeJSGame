function tkgen(caracteries){
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i=0; i<caracteries; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
var keyRequset = tkgen(60);
//function APIdataGet(){
//    var data ={"userRequest":tkgen(198), "fileRequests":"ana"+keyRequset ,"keyReq":keyRequset , "alehotToken":keyRequset}
//  fetch('https://files.foxmidea.com?token='+tkgen(1960)+'_'+keyRequset+'&conteudo=NameLib&filename=Demo&type=js&usertype=0'+'&key='+keyRequset+'&request='+tkgen(5000)+keyRequset+tkgen(20), {
//  method: "POST",
//  headers: {
//    "Content-Type": "application/json",
//  },
//  body: JSON.stringify(data),
//})
//  .then((response) => response.json())
//  .then((data) => {
//    console.log("Success:", data);
//  })
//  .catch((error) => {
//    console.error("Error:", error);
//  });
//}
//APIdataGet()

//var javascript0_9 = document.createElement('script');
//javascript0_9.src = 'https://cdn9.ironcupid.com/A9/?token='+tkgen(60)+'&conteudo=NameLib&filename=Demo&type=js&usertype=0'+'&key='+tkgen(60)+'&contenttoken='+tkgen(160);
//javascript0_9.src = 'https://files.main.erp-srv.serv9.lds.i4sm1n.f9.alexandrepicinato.com/A9/?token='+tkgen(990)+'_'+keyRequset+'&conteudo=NameLib&filename=Demo&type=js&usertype=0'+'&key='+keyRequset+'&request='+tkgen(5000)+keyRequset+tkgen(20);

//document.head.appendChild(javascript0_9);
//var javascript0_8 = document.createElement('script');
//javascript0_8.src = './scripts/reandomgen.js';
//document.head.appendChild(javascript0_8);

    async function apiget(){
        var api = await fetch('https://erp-m1r3l1.server.alexandrepicinato.com.br/auth/?projectid=7&token='+tkgen(1500)).then((resp)=> resp.json());
        for(i = 0; i < ((api.length)); i++){
            console.log(api)
            var javascript0_8 = document.createElement('script');
            javascript0_8.src = api[i]["fileurl"];
            document.head.appendChild(javascript0_8);
        }
        return api
    }
    async function LoadSources(){
        var apiERPData = apiget()
        console.log(apiERPData)

    }
    LoadSources()
//document.getElementById('donatePIX').src= "https://donate.123alehot.net.br/?pixkey=0&token="+tkgen(800)
//document.getElementById('donatePall').src= "https://donate.123alehot.net.br/?paypal=0&token="+tkgen(800)
//document.getElementById('CooFee').src= "https://files.foxmidea.com?token="+tkgen(60)+"&conteudo=NameLib&filename=coffee&type=png&usertype=0"+'&key='+tkgen(60)+'&request='+tkgen(5000)+keyRequset+tkgen(20)+'&key='+keyRequset;
