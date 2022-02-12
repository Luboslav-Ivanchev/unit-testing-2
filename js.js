function solve(input){


    let method=['GET','POST','DELETE','CONNECT'];
    let version=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
    let message=['<', '>', '\\','&', '\'','"'];


    if(method.indexOf(input.method)>-1){

        if(version.indexOf(input.version)>-1) {

            if(message.indexOf(input.message)===-1){
                console.log(input);
            }
        }
    }else {

        if (method.indexOf(input.method) === -1) {

            console.log(`Invalid request header: input method`)
        }
        if (version.indexOf(input.version) === -1) {


            console.log(`Invalid request header: input version`)

        }
        if (message.indexOf(input.message)> -1) {
            console.log(input);

            console.log(`Invalid request header: input message`);
        }

    }

}
module.exports = solve;