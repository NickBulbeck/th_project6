const createError = (status) => {
    const err = new Error("Evil is afoot, and bother has ensued.");
    err.status = status;
    return err;
}

const create404 = () => {
    const err = new Error("Not found");
    err.status = 404;
    return err;
}

module.exports.createError = createError;
module.exports.create404 = create404;