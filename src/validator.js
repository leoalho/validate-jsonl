const fs = require("fs")

const logColor = (color, text) => {
    let colorCode =""
    if (color==="green"){colorCode="\x1b[32m"}
    if (color==="red"){colorCode="\x1b[31m"}
    return `${colorCode}${text}\x1b[0m`
}

const validateJSONl = (fileName) => {
    let errors = []

    if (!fileName){
        console.error("Provide a file name")
        return
    }
    try {
        const file = fs.readFileSync(fileName).toString()
        const lines = file.split("\n")
        for (let i  = 0; i<lines.length; i++){
            try {
                JSON.parse(lines[i])
            }catch (error){
                if (error instanceof SyntaxError) {
                    errors.push(`Line ${i+1}: ${error.message}`)
                } else {
                    throw error
                }
            }
        }
        const nerrors = errors.length
        let color = nerrors===0?'green':'red'
        console.log(logColor(color,`Your JSON parsed with ${nerrors} error${nerrors===1?'':'s'}${nerrors===0?'':':'}`))
        errors.forEach((error) =>  {
            console.log(error)
        })
    }
    catch (error){
        console.error(error.message)
    }
}

module.exports = validateJSONl