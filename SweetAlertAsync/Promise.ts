declare var swal;
async function sweetAlertAsync(arguments: SweetAlertArguments): Promise<any>{
    return new Promise<any>((res, rej) => {
        try {
            swal(arguments, (result) => {
                res(result);
            });
        } catch (e) {
            rej(e);
        }
    });
}
var swalAsync = sweetAlertAsync;