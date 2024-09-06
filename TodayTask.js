async function getUserData() {
    let l = new Promise(resolve=> {
        setTimeout(()=>
        {
            data = {
                name: "prasanna", age: 20, place: "palakkad"
            };
            resolve(data);
        }, 2000)
        
    });
    
    console.log(await l)
}
getUserData();




