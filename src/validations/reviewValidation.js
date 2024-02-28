
export const validateReview = (values) => {
    const errors = {};
    if (values.review == "") {
        errors.review = "review is required"
    }

    if (values.username == "") {
        errors.username = "username is required"
    }
    return errors
}
