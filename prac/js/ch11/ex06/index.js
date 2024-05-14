//あきらめました
export function isEmailAddress(email) {
    //const emailRegex = /^[a-zA-Z0-9_%+\-/?^_`{|}~]{1,63}(.[a-zA-Z0-9_%+\-/?^_`{|}~]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const emailRegex2 = /^[a-zA-Z0-9._%+-]{1,64}@([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/

    const seikai = /^(([^<>()[\]\\.,;:\s@%+\-/?^_`{|}~"]+(\.[^<>()[\]\\.,;:\s@%+\-/?^_`{|}~"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex2.test(email) && seikai.test(email)//&& emailRegex.test(email) 


}