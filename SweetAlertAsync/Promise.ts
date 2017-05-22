declare var swal, sweetAlert;
sweetAlert.close_ = sweetAlert.close;
sweetAlert.close = function () {
    sweetAlert.close_();
    if (sweetAlert.onClose) sweetAlert.onClose();
}
async function sweetAlertAsync(titleOrArguments: (string | SweetAlertArguments), text?: string, type?: ("warning" | "error" | "success" | "info")) {
    if (typeof (titleOrArguments) == "string") {
        return await sweetAlertAsync({
            title: titleOrArguments,
            text: text,
            type: type
        });
    }
    return new Promise<any>((res, rej) => {
        if (titleOrArguments.showCancelButton) {
            sweetAlert.onClose = function () {
                res();
                sweetAlert.onClose = null;
            }
            swal(titleOrArguments, (result) => {
                rej(result);
            });
        }
        try {
            swal(titleOrArguments, (result) => {
                res(result);
            });
        } catch (e) {
            rej(e);
        }
    });
}
var swalAsync = sweetAlertAsync;