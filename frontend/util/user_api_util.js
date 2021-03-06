export const fetchUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        error: (err) => console.log(err)
    })
);

export const updateUser = (user, userId) => {
    let formData = convert.formDataConvert(user);

    const req = $.ajax({
        method: "PATCH",
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false,
    });
    return req;
};