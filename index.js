window.addEventListener("DOMContentLoaded", function(event) {

            const apiList = document.querySelector('.content-table');

            var ajx = new XMLHttpRequest();
            ajx.open('GET', 'https://arfp.eu/dataset/cards.json', true);
            ajx.onload = function() {
                if (this.status === 200) {
                    var json = JSON.parse(this.responseText);
                    for(var i=0; i < json.length; i++)


                    {
                        apiList.innerHTML += '<tr><td>' + json[i].id +'</td>'+
                                              '<td>' + json[i].name +'</td>'+
                                              '<td>' + json[i].level +'</td>'+
                                              '<td>' + json[i].description +'</td>'+
                                              '<td>' + json[i].power +'</td>'+
                                              '<td>' + json[i].attack +'</td>'+
                                              '<td>' + json[i].armor +'</td>'+
                                              '<td>' + json[i].damage +'</td>'+
                                              '<td>' + json[i].mitigation +'</td>'+
                                              '<td>' + json[i].played +'</td>'+
                                              '<td>' + json[i].victory +'</td>'+
                                              '<td>' + json[i].defeat +'</td>'+
                                              '<td>' + json[i].draw +'</td></tr>';





                    }
                }
            };

            ajx.send();



        });
