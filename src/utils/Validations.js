export const emailValidation = (value) => {
    return !value.match(/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);
};