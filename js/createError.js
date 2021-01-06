/**************************************************************
inputs: status (integer)
does:   creates an error object with a status equal to the input
        status parameter, or to 500 if it's called without a 
        parameter.
outputs: an Error object.
***************************************************************/


const createError = (status) => {
    const err = new Error("Evil is afoot, and bother has ensued.");
    if (!status) {
        status = 500;
    }
    err.status = status;
    return err;
}

/**************************************************************
inputs: none
does:   creates a 404 error
outputs: an Error object.
***************************************************************/
const create404 = () => {
    const err = new Error("Not found");
    err.status = 404;
    return err;
}

module.exports.createError = createError;
module.exports.create404 = create404;