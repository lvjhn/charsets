export function isPrintable(c) {
    return /^[^\p{C}\s\p{Co}]+$/u.test(c);
}

export const charRange = (a, b, derive = true) => {
    let chars = ""
    let aPos = a 
    let bPos = b 
    if(derive) {
        aPos = a.charCodeAt(0)
        bPos = b.charCodeAt(0)
    }
    for(let i = aPos; i <= bPos; i++) {
        const char = String.fromCharCode(i)
        if(!isPrintable(char)) {
            continue
        }
        chars += char
    }
    return chars
}

/**
 * Exports Raw Character Ranges (needs to be manually cleaned)
 */
export const charsets = {

    /** ASCII **/
    ascii           : () =>  charRange(0, 128, false),
    ascii_lowercase : () => "abcdefghijklmnopqrstuvwxyz", 
    ascii_uppercase : () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ascii_digits    : () =>  "0123456789",
    ascii_symbols   : () => "~!@#$%^&*()_+`-=[][]:\";',./<>?", 
    ascii_printable : () => charRange(33, 126, false),

    /** UTF-8 **/
    utf8 : (x) => charRange(0, x, false), 

    latin_1_supplement              : () => charRange("¡", "ÿ"), 
    latin_extended_a                : () => charRange("Ā", "ỿ"), 
    latin_extended_b                : () => charRange("ƀ", "ɏ"), 
    latin_extended_additional       : () => charRange("Ḁ", "ỿ"), 
    latin_extended_c                : () => charRange("Ⱡ", "Ɀ"), 
    latin_extended_d                : () => charRange("꜠", "ꟿ"), 
    latin_extended_e                : () => charRange("ꬰ", "꭫"),

    ipa_extensions                  : () => charRange("ɐ", "ʯ"), 
    spacing_modifier_letters        : () => charRange("ʰ", "˿"), 
    phoenetic_extensions            : () => charRange("ᴀ", "ᵿ"), 
    phoenetic_extensions_supplement : () => charRange("ᶀ", "ᶿ"), 

    // Greek
    greek_and_coptic                : () => charRange(880, 1023, false), 
    greek_extended                  : () => charRange(7936, 8190, false),

    // Cyrillic
    cyrillic                        : () => charRange("Ѐ", "ӿ"),
    cyrillic_supplement             : () => charRange("Ԁ", "ԯ"),
    cyrillic_extended_b             : () => charRange("Ꙁ", "ꚛ"),
    cyrillic_extended_c             : () => charRange("ᲀ", "ᲈ"),
    
    // Semitic 
    armenian                        : () => charRange("Ա", "֏"),
    arabic                          : () => charRange(1536, 1791, false),
    hebrew                          : () => charRange("֑֑", "״"),
    syriac                          : () => charRange("܀", "ݏ"),
    thaana                          : () => charRange("ހ", "ޱ"),

    // Brahmic
    devanagari                      : () => charRange("ऀ", "ॿ"),
    bengali_and_assamese            : () => charRange("ঀ", "৾"),
    gurmukhi                        : () => charRange("ਁ", "ੵ"),
    gujarati                        : () => charRange("ઁ", "ૹ"), 
    oriya                           : () => charRange("ଁ", "୷"),
    tamil                           : () => charRange("ஂ", "௺"), 
    telugu                          : () => charRange("ఀ", "౿"), 
    kannada                         : () => charRange("ಂ", "ೲ"),
    malayalam                       : () => charRange("ഀ", "ൿ"), 
    sinhala                         : () => charRange("ං", "෴"),
    buginese                        : () => charRange("ᨀ", "᨟"), 
    hanunoo                         : () => charRange("ᜠ", "᜶"), 
    khmer                           : () => charRange("ក", "៹"), 
    khmer_symbols                   : () => charRange("᧠", "᧿"),
    lao                             : () => charRange("ກ", "ໟ"),
    myanmar                         : () => charRange("က", "႟"), 
    myanmar_extended_a              : () => charRange("ꩠ", "ꩿ"), 
    myanmar_extended_b              : () => charRange("ꧠ", "ꧾ"), 
    myanmar_extended_c              : () => charRange("ꢀ", "꣙"), 
    saurashtra                      : () => charRange("ꢀ", "꣙"), 
    tai_le                          : () => charRange("ᥐ", "ᥴ"), 
    thai                            : () => charRange("ก", "๛"), 
    tibetan                         : () => charRange("ༀ", "࿘"), 
    kayah_li                        : () => charRange("꤀", "꤯"), 
    
    georgian                        : () => charRange("Ⴀ", "ჿ"), 
    
    // african
    geez                            : () => charRange("ሀ", "፼"), 
    nko                             : () => charRange("߀", "߿"), 
    osmanya                         : () => charRange("𐒀", "𐒩"), 
    tifinagh                        : () => charRange("ⴰ", "ⵧ"),
    vai                             : () => charRange("ꔀ", "ꘫ"), 

    // american 
    ucas                            : () => charRange("᐀", "ᙿ"),
    cherokee                        : () => charRange("Ꭰ", "ᏽ"), 

    // unicode symbols 
    unicode_symbols                 : () => charRange("–", "⁊")
}