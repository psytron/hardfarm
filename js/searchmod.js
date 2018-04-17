
var rez = $('#pinBoot');
var spinr = $('.active');
var selected_index=0;
var loaded_indexes=[];

var items = [
    { title:'Samsung GalaxyS6 Android 8 Orio'  , img:'samsung.png' , price:'$110 USD' , farmer:'Cyberon', body:'Ibm thinkpad is perfect' },
    { title:'BLU VIVO 4GLTE (ROOTED) Android 8'  , img:'iphone.jpg' , price:'$56 USD' , farmer:'Great Orient PC', body:'Ibm thinkpad is perfect' },
    { title:'IBM Thinkpad. Ubuntu 17'  , img:'thinkpadg3.jpg' , price:'$120 USD' , farmer:'Cyberon', body:'Ibm thinkpad is perfect' },
    { title:'Raspberry Pi Ubuntu 17 +100GB Drive', img:'rasp.jpg' , price:'$1 / month Datacenter: Farver DTC' ,farmer:'Felix R. DataCenter: 365Main', body:'Ibm thinkpad is perfect' },
    { title:'Dell Edge 2900 Debian'  , img:'poweredge.jpg' , price:'$3 / month' ,farmer:'John Brody', body:'Ibm thinkpad is perfect' },
    { title:'Rarspberry PIB+ Raspin', img:'rasp.jpg' , price:'$12 / onetime' , farmer:'Larry Bondo',body:'Ibm thinkpad is perfect' },
    { title:'Bitcoin Miner'  , img:'miner1.jpg' , price:'$1421 / onetime' , farmer:'Vegojelly',body:'Ibm thinkpad is perfect' },
    { title:'Bitcoin Miner XL10'  , img:'miner2.jpg' , price:'$2555 / onetime' ,farmer:'BettyPaige', body:'Ibm thinkpad is perfect' },
    { title:'Raspberry PiB+'  , img:'raspberry.jpg' , price:'$5 / onetime' ,farmer:'Papa J', body:'Ibm thinkpad is perfect' },
    { title:'Banana Pi Debian'  , img:'banana.png' , price:'$1 / month' , farmer:'Jenny X',body:'Ibm thinkpad is perfect' },
    { title:'DELL 3000 Debian LINUX'  , img:'computer1.jpg' , price:'$1 / month' ,farmer:'Papa J', body:'Ibm thinkpad is perfect' },
    { title:'Samsung Ubuntu 17'  , img:'computer2.jpg' , price:'$23 / onetime' , farmer:'Great Orient PC',body:'Ibm thinkpad is perfect' }    ,
    { title:'LG V20 Android 8 Bare'  , img:'lgv20.jpg' , price:'$22 / onetime UNLOCKED' , farmer:'Great Orient PC',body:'Ibm thinkpad is perfect' }    
]

function tileResults( items )
{
    items.forEach(function(valx, indx)
    {
        var template = $("#templates #artix").contents().clone();
        template.find('.field1').html( valx['title'])
        template.find('.field2').html( valx['price'] )
        template.find('.field3').html( 'FARMER: '+valx['farmer'] )
        template.find('.field4').attr('src', './img/'+valx['img'] );
        template.appendTo( rez )
        console.log( 'some output from console two ')
    }, this);
    console.log(" yo yo is this gonna print ")
}
tileResults(items)


searchMod = {}
searchMod.setSearchClick= function(e){
    console.log(' click event ')
    resultdiv = $(e.target).closest(".resu")[0]
    if( resultdiv ){
        node = $(e.target).closest('.resu')
        var name = node.find('.field2').html()
        var letype = node.find('.field3').html()
        var uuid = 'notherecauseclicked'
        spinr.fadeOut();
        rez.empty();
        e.target.value="";

        var leframe = document.getElementById('afx')
        leframe.src='/'+'prime'+'?g=always&name='+name+'&type='+letype+'&uuid='+uuid;

        e.stopPropagation()
    }
};
searchMod.setSearchKeyDownPaste=function(e){
    spinr.show()
    e = e || window.event;
    if (e.keyCode == '38') {      // UP ARROW
        rez.find('.resu').css("background-color", "rgba(0,0,0,0.4)")
        selected_index= selected_index>=1 ? selected_index-1 : selected_index;
        e.target.value=loaded_indexes[ selected_index-1 ]['name']
        loaded_indexes[ selected_index-1 ].element.css("background-color", "rgba(254,0,0,0.2)")
        e.stopPropagation()
    }else if (e.keyCode == '40') {   // DOWN ARROW
        rez.find('.resu').css("background-color", "rgba(0,0,0,0.4)")
        selected_index= selected_index + 1
        e.target.value=loaded_indexes[ selected_index-1 ]['name']
        loaded_indexes[ selected_index-1 ].element.css("background-color", "rgba(254,0,0,0.2)")
        e.stopPropagation()
    }else if (e.keyCode == '13') {   // ENTER KEY
        //console.log( 'launching: ', loaded_indexes[ selected_index-1 ] )
        spinr.fadeOut();
        rez.empty();
        e.target.value="";
        var leframe = document.getElementById('afx')
        leframe.onload = function() {
            //this.contentWindow.controller.setMap( {map:9} )
        };
        var letype = loaded_indexes[ selected_index-1 ]['type'];
        var name   = loaded_indexes[ selected_index-1 ]['name'];
        var uuid   = loaded_indexes[ selected_index-1 ]['uuid'];
        //leframe.src='/'+loaded_indexes[ selected_index-1 ]['type']+'?g=always&name='+name+'&type='+letype+'&uuid='+uuid;
        leframe.src='/'+'prime'+'?g=always&name='+name+'&type='+letype+'&uuid='+uuid;
        e.stopPropagation()
    }
};
searchMod.setSearchInput=function(e){
    spinr.show();
    tosearch = $(e.target).val();
    var search_tokens = tosearch.split(" ");
    zurl = "q="+tosearch+"&r="+Math.random()*9999;

    if( search_tokens[0]=='view' || search_tokens[0]=='list'){
        if( search_tokens[1] && !isNaN(search_tokens[1])  )
            //this.model.setMode( search_tokens[1]%10 )
        spinr.fadeOut();
    }else{
        var rnd = Math.round( Math.random()*9999 );
        var requestURL = "/search?"+zurl+'?rnd='+rnd;
        var request = new XMLHttpRequest();//
        spinr.fadeOut();

        var data = request.response;
        var items = [];
        var restring ='';
        rez.empty()
        tileResults( items )

        request.onload = function() {


            //loaded_indexes=[];
            //selected_index=0;
            //data.forEach(function(valx, indx) {
              //  var template = $("#templates #result").clone();
               // template.find('.field1').html( '<img src="/static/img/'+valx['type']+'.png"/>')
                //template.find('.field2').html( valx['name'] )
                //template.find('.field3').html( valx['type'] )
                //valx.element = template.find('.resu')
                //loaded_indexes.push( valx )
                //template.appendTo( rez )
            //}, this);
        };
        request.responseType = 'json';
        request.open('GET', requestURL);
        request.send();
    }
};//
$( document ).on('click',           searchMod.setSearchClick  )
$("#searchbox").on('keydown paste', searchMod.setSearchKeyDownPaste )
$("#searchbox").on('input',         searchMod.setSearchInput )




/*
$( document ).on('click', function(e){

    resultdiv = $(e.target).closest(".resu")[0]
    if( resultdiv )
    {
        node = $( resultdiv )

        rez.html( '<div class="resutok"><span class="light">TOKEN:</span>'+node.attr('token')+' <img src="/static/img/greenarrow.png"><span class="light">MRN:</span> '+node.attr('mrn')+'</div><div class="survmessage"></div>');
    }
});

$("#searchbox").on('keydown paste', function(e){
    spinr.show()
});
$("#searchbox").on('input', function(e){
    spinr.show()
    tosearch = $(e.target).val();
    client_code = 'REM101';
    var tokens = tosearch.split(" ");

    zurl = "q="+tosearch+"&c="+client_code+"&r="+Math.random()*9999;
    if( tokens[0]=='view') // OR OTHER VIEW COMMAND 
    {
        fireViewEvent();
        spinr.fadeOut();
    }else
    {
        $.ajax({
            url:  "/search?"+zurl ,
            dataType: 'json',
            success: function( data ) {
                spinr.fadeOut();
                var items = [];
                var restring ='';
                $.each( data, function( key, val ){
                    restring+=('<div class="resu" mrn="'+val['mrn']+'" token="'+val['token']+'"><div class="colu">'+val['first_name']+'</div><div class="colu">'+val["last_name"]+'</div><div class="colu">'+val['mrn']+'  </div> <div class="colulast"><img class="startsurv" src="/static/img/play_button.png"/></div>   </div> ');
                });
                rez.html( restring );

            },
            error: function( data ) {
                spinr.fadeOut();
                rez.html( 'error: '+data );
            }
        });
    }
});
*/