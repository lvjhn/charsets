import { charsets } from "_/src/charsets.js" 
import fs from "fs"

fs.rmSync("./data/", { recursive: true, force: true })
fs.mkdirSync("./data/")

for(let charset in charsets) {
    let chars = ""

    if(charset == "utf8") {
        chars = charsets[charset](143000)
    }
    else {
        chars = charsets[charset]()
    }

    console.log(charset, chars?.length ?? "N/A")

    let out = chars ?? ""

    fs.writeFileSync(`./data/${charset}.${chars?.length ?? 0}.txt`, out)
}