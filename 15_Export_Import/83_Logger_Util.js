

export default function log(message){                   ///*** this is default exporting -- any one thing can be exported as default and thus can be imported without name */
    console.log(`[LOG] : ${message}`);
}


export function log_advanced(message){
    console.log('------------ Started Logging -------------');
    console.log(`[LOG] : ${message}`);
    console.log('------------ Completed Logging -------------');
}