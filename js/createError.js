const createError = (status) => {
    const err = new Error("Evil is afoot, and bother has ensued.");
    err.status = status;
    return err;
}

const create404 = (source) => {
    const err = new Error("Not found");
    err.status = 404;
    if (source === "project") {
        err.text1 = "It seems you searched for a project called ";
        err.text2 = ". There is, as yet, no such project. If you have an idea for one, please give me a shout. I can't promise anything, mind you.";
    } else {
        err.text1 = "We tried calling";
        err.text2 = ", but there was nobody in.";
    }
    return err;
}

module.exports.createError = createError;
module.exports.create404 = create404;