const createError = (status) => {
    const err = new Error("Not Found");
    err.status = status;
    return err;
}

module.exports.createError = createError;