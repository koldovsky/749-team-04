(function(){
  const sMediaQuery = window.matchMedia("(max-width: 770px)");
  const mMediaQuery = window.matchMedia("(min-width: 770px) and (max-width: 1000px)");
  const lMediaQuery = window.matchMedia("(min-width: 1000px)");
  const prevButton = document.querySelector("#prev_bt");
  const nextButton = document.querySelector("#next_bt");
  const listTour = document.querySelector(".list-tour-cards");

   function changeQuantityDisplayTourToOne(sMediaQuery) {
      let marginS = 0;
      listTour.style.marginLeft = "0";
      if(sMediaQuery.matches) {
          nextButton.onclick = function(){
              if(marginS > -400){  
               marginS -=100;
               listTour.style.marginLeft = marginS + "%";
               }
           }
       
           prevButton.onclick = function(){
               if(0 > marginS){  
                marginS +=100;
                listTour.style.marginLeft = marginS + "%";
                }
            } 
       }
    }
  
    changeQuantityDisplayTourToOne(sMediaQuery);
    sMediaQuery.addEventListener("change", changeQuantityDisplayTourToOne);

    
   function changeQuantityDisplayToursToTwo(mMediaQuery) {
      let marginM = 0;
      listTour.style.marginLeft = "0";
      if(mMediaQuery.matches) {
          nextButton.onclick = function(){
              if(marginM > -150){  
               marginM -=50;
               listTour.style.marginLeft = marginM + "%";
               }
           }
       
           prevButton.onclick = function(){
               if(0 > marginM){  
                marginM +=50;
                listTour.style.marginLeft = marginM + "%";
                }
            }
       }
    }
   
    changeQuantityDisplayToursToTwo(mMediaQuery);
    mMediaQuery.addEventListener("change", changeQuantityDisplayToursToTwo);

    function changeQuantityDisplayToursToThree(lMediaQuery) {
      let marginL = 0;
      listTour.style.marginLeft = "0";
      if(lMediaQuery.matches) {
          nextButton.onclick = function(){
              if(marginL > -65){  
               marginL -=33.333;
               listTour.style.marginLeft = marginL + "%";
               }
           }
       
           prevButton.onclick = function(){
               if(0 > marginL){  
                marginL +=33.333;
                listTour.style.marginLeft = marginL + "%";
                }
            }
      }
    }
   
    changeQuantityDisplayToursToThree(lMediaQuery);
    lMediaQuery.addEventListener("change", changeQuantityDisplayToursToThree);


})()



