
let  p = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve('Promise resolved')
        }else{
            reject('Promise is rejected')
        }
    },1000)
})
// .then(function(respond){
//     console.log(respond)
// }).catch(function(error){
//     console.log(error)
// })


async function consume(){
    try {
        let respo = await p
        console.log(respo)
    } catch (error) {
        console.error(error)
    }
}
consume()