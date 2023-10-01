const {validateJSONL} = require("../src/validator")

describe("Validator", () => {
    it("does not work with undefied file name", () => {
        const errorSpy = jest.spyOn(global.console, 'error');
        validateJSONL(undefined)
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledTimes(1);
        errorSpy.mockRestore();
    });
    it("does not work with an incorrect file name", () =>{
        const errorSpy = jest.spyOn(global.console, 'error');
        validateJSONL("incorrect.jsonl")
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledTimes(1);
        errorSpy.mockRestore();
    });
    it("works with a simple jsonl file", () =>{
        const logSpy = jest.spyOn(global.console, 'log');
        validateJSONL("./test/correct.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("\x1b[32mYour JSONL parsed with 0 errors\x1b[0m");
        logSpy.mockRestore();
    });
    it("gives an error with empty line at end", () =>{
        const logSpy = jest.spyOn(global.console, 'log');
        validateJSONL("./test/endline.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith("\x1b[31mYour JSONL parsed with 1 error:\x1b[0m");
        logSpy.mockRestore();
    });
    it("gives an error with a faulty json line (single quotes)", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        validateJSONL("./test/incorrectOneLine.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith("\x1b[31mYour JSONL parsed with 1 error:\x1b[0m");
        logSpy.mockRestore();
    })
    it("works with jsonl with multiple lines", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        validateJSONL("./test/correct.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("\x1b[32mYour JSONL parsed with 0 errors\x1b[0m");
        logSpy.mockRestore();
    })
    it("gives an error with multiple faulty json lines", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        validateJSONL("./test/incorrectOneLine.jsonl")
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith("\x1b[31mYour JSONL parsed with 1 error:\x1b[0m");
        logSpy.mockRestore();
    })
})
