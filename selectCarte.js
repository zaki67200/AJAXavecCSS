
window.addEventListener("DOMContentLoaded", function(event) {

            const apiList1 = document.querySelector('#card1');
            const apiList2 = document.querySelector('#card2');
            const apiList3 = document.querySelector('#card3');
            const apiList4 = document.querySelector('#card4');

            var ajx = new XMLHttpRequest();
            ajx.open('GET', 'https://arfp.eu/dataset/cards.json', true);
            ajx.onload = function() {
                if (this.status === 200) {
                    var json = JSON.parse(this.responseText);
                    var maxAttack = getMax(json, "attack");
                    var maxArmor  = getMax (json,"armor");
                    var maxPlayed = getMax (json,"played");
                    var maxVictory = getMax (json,"victory");

                          apiList1.innerHTML +='<div class="titre"><h1>'+maxAttack.id+' '+maxAttack.name+'</h1>'+'<h5>'+'Played :  ' + maxAttack.played +' | '+'Victoire : '+ maxAttack.victory+'</h5></div>'
                          apiList1.innerHTML +='<div class="photo1"><img src="deck.png" alt="Avatar">'+ '</div>'
                          apiList1.innerHTML +='<div class ="capacity"><h2>'+'Power<br>'+'<span style="color:purple">'+maxAttack.power+'</span>'+'</h2>'+'<h2>'+'Attaque<br>'+'<span style="color:red">'+maxAttack.attack+'</span>'+'</h2>'+'<h2>'+'Defense<br>'+'<span style="color:blue">'+maxAttack.armor+'<span>'+'</h2></div>'


                          apiList2.innerHTML +='<div class="titre"><h1>'+maxArmor.id+'  '+maxArmor.name+'</h1>'+'<h5>'+'Played :  ' + maxArmor.played +' | '+'Victoire : '+ maxArmor.victory+'</h5></div>'
                          apiList2.innerHTML +='<div class="photo1"><img src="deck.png" alt="Avatar">'+ '</div>'
                          apiList2.innerHTML +='<div class ="capacity"><h2>'+'Power<br>'+'<span style="color:purple">'+maxArmor.power+'</span>'+'</h2>'+'<h2>'+'Attaque<br>'+'<span style="color:red">'+maxArmor.attack+'</span>'+'</h2>'+'<h2>'+'Defense<br>'+'<span style="color:blue">'+maxArmor.armor+'<span>'+'</h2></div>'

                          apiList3.innerHTML +='<div class="titre"><h1>'+maxPlayed.id+'  '+maxPlayed.name+'</h1>'+'<h5>'+'Played :  ' + maxPlayed.played +' | '+'Victoire : '+ maxPlayed.victory+'</h5></div>'
                          apiList3.innerHTML +='<div class="photo1"><img src="deck.png" alt="Avatar">'+ '</div>'
                          apiList3.innerHTML +='<div class ="capacity"><h2>'+'Power<br>'+'<span style="color:purple">'+maxPlayed.power+'</span>'+'</h2>'+'<h2>'+'Attaque<br>'+'<span style="color:red">'+maxPlayed.attack+'</span>'+'</h2>'+'<h2>'+'Defense<br>'+'<span style="color:blue">'+maxPlayed.armor+'<span>'+'</h2></div>'



                          apiList4.innerHTML +='<div class="titre"><h1>'+maxVictory.id+'  '+maxVictory.name+'</h1>'+'<h5>'+'Played :  ' + maxVictory.played +' | '+'Victoire : '+ maxVictory.victory+'</h5></div>'
                          apiList4.innerHTML +='<div class="photo1"><img src="deck.png" alt="Avatar">'+ '</div>'

                          apiList4.innerHTML +='<div class ="capacity"><h2>'+'Power<br>'+'<span style="color:purple">'+maxVictory.power+'</span>'+'</h2>'+'<h2>'+'Attaque<br>'+'<span style="color:red">'+maxVictory.attack+'</span>'+'</h2>'+'<h2>'+'Defense<br>'+'<span style="color:blue">'+maxVictory.armor+'<span>'+'</h2></div>'









                }
            };

            ajx.send();



        });

        function getMax(arr, prop) {
            var max;
            for (var i=0 ; i<arr.length ; i++) {
                if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
                    max = arr[i];
            }
            return max;
        }
