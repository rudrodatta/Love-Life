function checkloveper(){
        var name = document.getElementById('name').value;
        var lname = document.getElementById('lname').value;
      
        if(name == ""){
         alert('Please enter your name');
        }
        else{
        var lovdata = Math.random() * 100;
        lovdata = Math.floor(lovdata);
        document.getElementById('lovevalue').value = lovdata + "%";
        if ( lovdata > 50 ) {
                document.getElementById("test").innerHTML = `<i class="fa fa-heart">`;
                }
        else{
                document.getElementById("test").innerHTML = `<i class="fas fa-heartbeat">`;

        }
        
               /*if ( lovdata < 100 || lovdata > 90 ) {
                        document.getElementById('lovevalue1').value = lovdata1;
                }
                else if ( lovdata < 90 || lovdata > 80){
                        document.getElementById('lovevalue2').value = lovdata2;
                }
                else if ( lovdata < 80 || lovdata > 70){
                        document.getElementById('lovevalue3').value = lovdata3;
                }
                else if ( lovdata < 70 || lovdata > 60){
                        document.getElementById('lovevalue4').value = lovdata4;
                }
                else if ( lovdata < 60 || lovdata > 50){
                        document.getElementById('lovevalue5').value = lovdata5;
                }
                else if ( lovdata < 50 || lovdata > 40){
                        document.getElementById('lovevalue6').value = lovdata6;
                }
                else if ( lovdata < 40 || lovdata > 30){
                        document.getElementById('lovevalue7').value = lovdata7;
                }
                else if ( lovdata < 30 || lovdata > 20){
                        document.getElementById('lovevalue8').value = lovdata8;
                }
                else if ( lovdata < 20 || lovdata > 10){
                        document.getElementById('lovevalue9').value = lovdata9;
                }
                else{
                        document.getElementById('lovevalue0').value = lovdata0;

                }*/

        }

        
}