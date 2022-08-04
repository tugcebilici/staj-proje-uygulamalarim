var data=[];
var count=0;

;

function AddArac(){




    var aracModeli=document.getElementById('arac').value;

    var arac={
        id:count,
        arac:aracModeli,
        statu:'araclar',
      
 
    }




    data.push(arac);
    document.getElementById('arac').value=null;
    FillData();
    count++;

    function save (){
    
        //////////
        if(localStorage.getItem('data') == null){
            localStorage.setItem('data', '[]');
        }


        var old_data = JSON.parse(localStorage.getItem('data'));
        old_data.push(arac);

        localStorage.setItem('data', JSON.stringify(old_data));
    }
    save();

}




function FillData(){
    var tempHTML="";
    var tempHTMLCompleted="";
    var tempHTMLDelivered="";

    for(var i=0;i<data.length;i++){
        if(data[i].statu=='araclar'){
             tempHTML+='<div class="input-group">'+
            '<p type="text" class="form-control" >'+data[i].arac+'</p>'+
            '<div class="input-group-append">'+
  
                
                '<button class="btn btn-outline-primary" type="button" onclick="ClickCheck('+data[i].id+');">Bakıma Al</button>'+
              '</div>'+
        '</div>';
            }else if(data[i].statu=='completed'){
                tempHTMLCompleted+='<div class="input-group mb-3">'+
                '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].arac+'</p>'+
                '<div class="input-group-append">'+           
                    '<button class="btn btn-outline-danger" type="button" onclick="CheckArac('+data[i].id+');">Teslim et</button>'+
                '</div>'+
            '</div>';
            }else{
                tempHTMLDelivered+='<div class="input-group mb-3">'+
                '<p type="text" class="form-control" aria-label="Text input with checkbox">'+data[i].arac+'</p>'+
                '<div class="input-group-append">'+
                    '<button class="btn btn-outline-primary" type="button" onclick="UndoArac('+data[i].id+');">Tekrar Bakıma Al</button>'+
                    '<button class="btn btn-outline-danger" type="button" onclick="DeleteArac('+data[i].id+');"><i class="fa fa-trash"></i></button>'+
                '</div>'+
            '</div>';
            }    
                   
    }
    document.getElementById('brand').innerHTML=tempHTML;
    document.getElementById('completed').innerHTML=tempHTMLCompleted;
    document.getElementById('delivered').innerHTML=tempHTMLDelivered;
}



// Checkbox için 
function ClickCheck(id){
    var index=data.findIndex(x=>x.id==id);

    data[index].statu='completed';

    setTimeout(function(){
        FillData();
    },100);
}
//checkTask
function CheckArac(id){
    var index=data.findIndex(x=>x.id==id);

    data[index].statu='Delivered';

    setTimeout(function(){
        FillData();
    },100);
}

// Silme Fonksiyonu
function DeleteArac(id){
    var index = data.findIndex(x=>x.id==id);
    data.splice(index,1);

    FillData();
}

// Geri Alma Fonksiyonu
function UndoArac(id){
    var index=data.findIndex(x=>x.id==id);
    data[index].statu='completed';

    FillData();
}

