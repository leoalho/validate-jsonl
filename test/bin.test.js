const validate = require("../bin/validator")

describe("binary", () => {
    it("Does not work with undefied file name", () => {
        const errorSpy = jest.spyOn(global.console, 'error');
        validate(undefined)
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledTimes(1);
        errorSpy.mockRestore();
    });
    it("Does not work with an incorrect file name", () =>{
        const errorSpy = jest.spyOn(global.console, 'error');
        validate("incorrect.jsonl")
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledTimes(1);
        errorSpy.mockRestore();
    });
    it("Works with a simple jsonl file", () =>{
        const logSpy = jest.spyOn(global.console, 'log');
        validate("./test/correct.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("\x1b[32mYour JSON parsed with 0 errors\x1b[0m");
        logSpy.mockRestore();
    });
    it("Empty line at end gives error", () =>{
        const logSpy = jest.spyOn(global.console, 'log');
        validate("./test/endline.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith("\x1b[31mYour JSON parsed with 1 error:\x1b[0m");
        logSpy.mockRestore();
    });
})
