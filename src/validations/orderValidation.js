
export const validateOrder = (values) => {
    const errors = {};
    if (values.address == "") {
        errors.address = "Address is required"
    }

    if (values.zipCode == null || values.zipCode == "") {
        errors.zipCode = "Zipcode is required"
    } else if (values.zipCode < 100000 || values.zipCode > 999999) {
        errors.zipCode = "Zipcode is invslid"
    }

    if (values.city == "") {
        errors.city = "City is required"
    }

    if (values.country == "") {
        errors.country = "Country is required"
    }

    return errors
}
