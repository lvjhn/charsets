import { charsets } from "_/src/charsets.js" 
import fs from "fs"

fs.rmSync("./data/charsets", { recursive: true, force: true })
fs.mkdirSync("./data/charsets")

for(let charset in charsets) {
    let chars = ""

    if(charset == "utf8") {
        chars = charsets[charset](143000)
    }
    else {
        chars = charsets[charset]()
    }

    let out = chars
    fs.writeFileSync(`./data/charsets/${charset}.${chars.length}.txt`, out)
}