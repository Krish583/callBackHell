'use strict'

const count_value = document.querySelector('.button');


setTimeout(() =>{
   count_value.textContent=10;
    setTimeout(()=>{
        count_value.textContent=9;
        setTimeout(()=>{
            count_value.textContent=8;
            setTimeout(()=>{
                count_value.textContent=7;
                setTimeout(() =>{
                    count_value.textContent=6;
                    setTimeout(() =>{
                        count_value.textContent=5;
                        setTimeout(() =>{
                            count_value.textContent=4;
                            setTimeout(() =>{
                                count_value.textContent=3;
                                setTimeout(() =>{
                                    count_value.textContent=2;
                                    setTimeout(() =>{
                                        count_value.textContent=1;
                                        setTimeout(()=>{
                                        count_value.textContent="Happy Independence Day"
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000); 