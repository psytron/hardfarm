    <script type="text/javascript">
        window.alert = function(){};
        var defaultCSS = document.getElementById('bootstrap-css');
        function changeCSS(css){
            //if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />');
            //else $('head > link').filter(':first').replaceWith(defaultCSS);
        }
        $( document ).ready(function() {
          //var iframe_height = parseInt($('html').height());
          //window.parent.postMessage( iframe_height, 'https://bootsnipp.com');
        });
    </script>





<script>

          var items = [
            { title:'IBM Thinkpad'  , img:'thinkpadg3.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' },
            { title:'Dell Edge 2900', img:'rasp.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' },
            { title:'Raspberry Pi'  , img:'poweredge.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' },
            { title:'IBM Thinkpad'  , img:'thinkpadg3.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' },
            { title:'Dell Edge 2900', img:'rasp.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' },
            { title:'Raspberry Pi'  , img:'poweredge.jpg' , price:'250 / onetime' , body:'Ibm thinkpad is perfect' }
          ]

          var rez = $('#pinBoot');

          items.forEach(function(valx, indx)
          {
              var template = $("#templates #artix").contents().clone();
              template.find('.field1').html( valx['title'])
              template.find('.field2').html( valx['price'] )
              template.find('.field3').html( valx['body'] )
              template.find('.field4').attr('src', './img/'+valx['img'] );
              //template.find('.field3').html( '<img src="/static/img/'+valx['img']+' "/>' )
              template.appendTo( rez )
              console.log( 'some output from console two ')
          }, this);

          console.log(" yo yo is this gonna print ")



</script>
