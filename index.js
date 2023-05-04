function message(){
    console.log("Hello World");
  }
  setTimeout(message,3000)


  function loop(){
    for( let i=1;i<=7;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
  }
  loop();

  function print(m){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         console.log(m);
         resolve();
        },1000);
    });
        }
    let demo=Promise.resolve();
    for( let i=1;i<=7;i++){
        demo=demo.then(()=>
            print(i));
    }

    function print(a){
         return new Promise((resolve, reject) => {
            if(a==="yes"){
                resolve("promise resolved");
            }
            else{
                reject("promise rejected");
            }
         })
    }
    print("yes").then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })


    function myFirst(first){
        console.log("hello  " + first );
    }
    function mySecond(second){
        let j="world";
        second(j);
    }
    mySecond(myFirst);


    function a(callback1){
        console.log("a");
        callback1();
      }
      function b(callback2){
        console.log("b");
        callback2();
      }
      function c(callback3){
        console.log("c");
        callback3();
      }
      function d(callback4){
        console.log("d");
        callback4();
      }
      a(()=>{
        b(()=>{
          c(()=>{
            d(()=>{
            });
          });
        });
      })


let k=new Promise((resolve, reject) => {
    let x=2+3;
    if(x==5){
        resolve("excuted and resloved succesfully");
    }
    else{
        reject("error and doesn't excuted");
    }
})
k.then((res)=>{
    console.log(res);
}).catch((rej)=>{
console.log(rej);
})


async function weather (){
    let delhiweather =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },5000)
    })
    
    let puneweather =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("30 deg")
        },1000)
    })
    console.log("Fetching Delhi weather please wait...");
    let delhi=await delhiweather;
    console.log("Fetched Delhi weather: "+delhi);
    console.log("Fetching pune weather please wait...");
    let pune =await puneweather;
    console.log("Fetched pune weather: " +pune);
}
weather()