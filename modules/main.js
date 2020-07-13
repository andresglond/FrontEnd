function executeOperation() {

    // ----------------------------------------------------------------------
    // Se deben inicializar los valores capturando el valor de los inputs
    var number1 = 0;
    var number2 = 0;
    var operation = "";
    // ----------------------------------------------------------------------
    var dataToSend = {};
    dataToSend.number1 = number1;
    dataToSend.number2 = number2;
    dataToSend.operation = operation;
    var url = API_URL + CALCULATOR_MODULE;

    $.ajax(url,
        {
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(dataToSend),
            success: function (data, status, xhr) {
                console.log(data);
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.error(errorMessage);
            }
        });
}