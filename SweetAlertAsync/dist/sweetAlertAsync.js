var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
sweetAlert.close_ = sweetAlert.close;
sweetAlert.close = function () {
    sweetAlert.close_();
    if (sweetAlert.onClose)
        sweetAlert.onClose();
};
function sweetAlertAsync(titleOrArguments, text, type) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof (titleOrArguments) == "string") {
            return yield sweetAlertAsync({
                title: titleOrArguments,
                text: text,
                type: type
            });
        }
        return new Promise((res, rej) => {
            if (titleOrArguments.showCancelButton) {
                sweetAlert.onClose = function () {
                    res();
                    sweetAlert.onClose = null;
                };
                swal(titleOrArguments, (result) => {
                    rej(result);
                });
            }
            try {
                swal(titleOrArguments, (result) => {
                    res(result);
                });
            }
            catch (e) {
                rej(e);
            }
        });
    });
}
var swalAsync = sweetAlertAsync;
//# sourceMappingURL=sweetAlertAsync.js.map