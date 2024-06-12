import { isNullOrUndefined } from "util";

export function isPrintable(c) {
    return /^[^\p{C}\s\p{Co}]+$/u.test(c);
}

export const charRange = (a, b, derive = true) => {
    let chars = ""
    let aPos = a 
    let bPos = b 
    if(derive) {
        aPos = a.codePointAt(0)
        bPos = b.codePointAt(0)
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
    ascii : () => charRange(33, 128, false), 
    ascii_punctuation_and_symbols_a : () => charRange(32, 47, false),
    ascii_digits : () => charRange(48, 57, false),
    ascii_punctuation_and_symbols_b : () => charRange(58, 64, false),
    ascii_uppercase : () => charRange(65, 90, false),
    ascii_punctuation_and_symbols_c : () => charRange(91, 96, false),
    ascii_lowercase : () => charRange(97, 122, false),
    ascii_punctuation_and_symbols_d : () => charRange(123, 126, false),
    ascii_punctuation_and_symbols : function () {
        return (
            this.ascii_punctuation_and_symbols_a() +
            this.ascii_punctuation_and_symbols_b() +
            this.ascii_punctuation_and_symbols_c() +
            this.ascii_punctuation_and_symbols_d()
        )
    },

    /** 
     * UTF-8 
     *  - subset boundaries only 
     *  - for subsets of subsets, refer to:
     *    https://en.wikipedia.org/wiki/List_of_Unicode_characters  
     */

    // latin
    latin_1_supplement : () => charRange(" ", "ÿ"),
    latin_extended_a : () => charRange("Ā", "ſ"), 
    latin_extended_b : () => charRange("ƀ", "ɏ"), 
    latin_extended_additional : () => charRange("Ḁ", "ỿ"), 
    latin_extended_c : () => charRange("Ⱡ", "Ɀ"), 
    latin_extended_d : () => charRange("꜠", "ꟿ"),
    latin_extended_e : () => charRange("ꬰ", "꭫"), 
    latin_extended_f : () => charRange("𐞀", "𐞺"), 
    latin_extended_g : () => charRange("𝼀", "𝼪"), 

    // phonetic scripts
    ipa_extensions : () => charRange("ɐ", "ʯ"),
    spacing_modifier_letters : () => charRange("ʰ","˿"), 
    combining_marks : () => charRange(768, 879, false), 

    // greek and coptic 
    greek_and_coptic : () => charRange("Ͱ", "Ͽ"), 
    greek_extended : () => charRange("ἀ", "῾"), 
    coptic : () => charRange("Ⲁ", "⳿"),

    // cyrillic 
    cyrillic : () => charRange("Ѐ", "ӿ"),
    cyrillic_supplement : () => charRange("Ԁ", "ԯ"),
    cyrillic_extended_a : () => charRange(11744, 11775, false),
    cyrillic_extended_b : () => charRange(42560, 42655, false),
    cyrillic_extended_c : () => charRange("ᲀ", "ᲈ"), 

    // armenian 
    armenian : () => charRange("Ա", "֏"), 

    // arabic 
    arabic : () => charRange("؀", "ۿ"), 

    // hebrew 
    hebrew : () => charRange("֑", "״"), 
    syriac : () => charRange("܀", "ݏ"),
    samaritan : () => charRange(2048, 2110, false), 

    // brahmic 
    devanagari : () => charRange("ऀ", "ॿ"), 
    bengali_and_assamese : () => charRange("ঀ", "৾"), 
    gurmukhi : () => charRange("ਁ", "੶"), 
    gujarati : () => charRange("ઁ", "૿"), 
    oriya : () => charRange("ଁ", "୷"), 
    tamil : () => charRange("ஂ", "௺"),
    telugu : () => charRange("ఀ", "౿"), 
    kannada : () => charRange("ಀ", "ೳ"), 
    malayalam : () => charRange("ഀ", "ൿ"), 
    sinhala : () => charRange("ඁ", "෴"), 
    ahom : () => null, 
    balinese : () => charRange("ᬀ", "᭾"),
    batak : () => charRange("ᯀ", "᯿"), 
    bhaiksuki: () => null, 
    buhid : () => charRange("ᝀ", "ᝓ"),
    buginese : () => charRange("ᨀ", "᨟"),
    chakma : () => null, 
    cham : () => charRange("ꨀ", "꩟"),
    common_indic_number_forms : () => charRange("꠰", "꠹"), 
    dives_akuru : () => null, 
    dogra : () => null, 
    grantha : () => charRange("𑌀", "𑍴"),
    hanunoo : () => charRange("ᜠ", "᜶"),
    javanese : () => charRange("ꦀ", "꧟"),
    kaithi : () => null, 
    kaiwi : () => null, 
    khmer : () => charRange("ក", "៹"),
    khmer_symbols : () => charRange("᧠", "᧿"),
    khojki : () => null, 
    khudawadi : () => null,
    lao : () => charRange("ກ", "ໟ"),
    lepcha : () => charRange("ᰀ", "ᱏ"),
    limbu : () => charRange("ᤀ", "᥏"),
    mahajani : () => null,
    makasar : () => null, 
    marchen : () => null, 
    meetei_mayek : () => charRange("ꯀ", "꯹"), 
    meetei_mayek_extensions : () => null,
    modi : () => null,
    multani : () => null,
    myanmar : () => charRange("က", "႟"),
    myanmar_extended_a : () => charRange("ꩠ", "ꩿ"),
    myanmar_extended_b : () => charRange("ꧠ", "ꧾ"), 
    new_tai_lue : () => charRange("ᦀ", "᧟"),
    newa : () => null, 
    phags_pa : () => charRange("ꡀ", "꡷"), 
    rejang : () => charRange("ꤰ", "꥓"),
    saurashtra : () => charRange("ꢀ", "꣙"),
    sharada : () => null,
    siddham : () => null,
    sundanese : () => charRange("ᮀ", "ᮿ"), 
    sundanese_supplement : () => null,
    syloti_nagri : () => charRange("ꠀ", "꠬"),
    tagalog : () => charRange("ᜀ", "᜕"),
    tagbanwa : () => charRange("ᝠ", "ᝳ"), 
    tai_le : () => charRange("ᥐ", "ᥴ"),
    tai_tham : () => charRange("ᨠ", "᪭"),
    tai_viet : () => charRange("ꪀ", "꫟"),
    takri : () => null,
    thai : () => charRange("ก", "๛"),
    tibetan : () => charRange("ༀ", "࿚"),
    tirhuta : () => null, 

    // southease asian writing systems, 
    hanifi_rohingya : () => null,
    kayah_li : () => charRange("꤀", "꤯"),
    pahawh_hmong : () => null,
    pau_cin_hau : () => null,

    // georgian 
    georgian : () => charRange("Ⴀ", "ჿ"), 

    // african scripts 
    geez : () => charRange("ሀ", "፼"),
    adlam : () => null,
    bamum : () => charRange("ꚠ", "꛷"),
    bamum_supplement : () => null,
    bassah_vah : () => null,
    medefaidrin : () => null,
    mende_kikakui : () => null, 
    nko : () => charRange("߀", "߿"),
    osmanya : () => null,
    ottoman_siyaq_numbers : () => null, 
    tifinagh : () => charRange("ⴰ", "ⵯ"),
    vai : () => charRange("ꔀ", "ꘫ"),

    // american scripts 
    ucas : () => charRange("᐀", "ᙿ"),
    cherokee : () => charRange("Ꭰ", "ᏽ"), 
    cherokee_supplement : () => charRange("ꭰ", "ꮿ"), 
    deseret : () => null,
    kaktovik_numerals : () => charRange("𝋀", "𝋓"),
    osage : () => null, 

    // mongolian 
    mongolian : () => charRange("᠀", "ᢪ"),

    // unicode symbols 
    unicode_symbols : () => charRange("–", "⁊"),
    
    // general punctuation
    general_punctuation : () => charRange("‐", "⁞"),
    supplemental_puncutation : () => charRange("⸀", "⹝"),

    // superscripts and subscripts
    superscripts_and_subscripts : () => charRange("⁰", "ₜ",),

    // currency symbols 
    currency_symbols : () => charRange("℀", "⅏"), 

    // number forms 
    number_forms : () => charRange("⅐", "↋"), 

    // arrows 
    arrows : () => charRange("←", "⇿"), 
    miscellaneous_symbols_and_arrows : () => charRange("⬀", "⯿"),
    supplemental_arrows_a : () => charRange("⟰", "⟿"),
    supplemental_arrows_b : () => charRange("⤀", "⥿"), 
    supplemental_arrows_c : () => null,

    // mathematical symbols 
    mathematical_symbols : () => charRange("∀", "⋿"),
    supplemental_mathematical_operators : () => charRange("⨀", "⫿"),
    supplemental_mathematical_symbols_a : () => charRange("⟀", "⟯"),
    supplemental_mathematical_symbols_b : () => charRange("⦀", "⧿"), 

    // miscelllaneous technical
    miscellaneous_technical : () => charRange("⌀", "⏿"),

    // control pictures 
    control_pictures : () => charRange("␀", "␦"), 

    // optical character recognition
    ocr : () => charRange("⑀", "⑊"), 

    // enclosed alphanumerics 
    enclosed_alphanumerics : () => charRange("①", "⓿"), 

    // box drawing
    box_drawing : () => charRange("─", "╿"), 

    // block elmements 
    block_elements : () => charRange("▀", "▟"), 

    // geometric shapes 
    geometric_shapes : () => charRange("■", "◿"), 

    // miscellaneous symbols 
    miscellaneous_symbols : () => charRange("☀", "⛿"), 

    // legacy computing 
    legacy_computing_symbols : () => null, 

    // dingbats 
    dingbats : () => charRange("✀", "➿"), 

    // east asian writing systems 
    cjk_symbols_and_pucntuations : () => charRange("、", "〿"),
    hiragana : () => charRange("ぁ", "ゟ"), 
    katakana : () => charRange("゠", "ヿ"), 
    katakana_extended_a : () => null,
    katakana_extended_b : () => null,
    katakana_supplement : () => null, 
    katakana_phoenetic_extensions : () => charRange("ㇰ", "ㇿ"), 
    katakana_small_kana_extension : () => null, 
    bopomofo : () => charRange("ㄅ", "ㄯ"), 
    bopomofo_extended : () => charRange("ㆠ", "ㆿ"), 
    hanggul_jamo_a : () => charRange("ᄀ", "ᇿ"), 
    hanggul_jamo_b : () => charRange("ㄱ", "ㆎ"),
    kanbum : () => charRange("㆐", "㆟"),
    enclosed_cjk_letters_and_months : () => charRange("㈀", "㋿"),
    cjk_compatibility : () => charRange("㌀", "㏿"),
    cjk_compatibility_forms : () => charRange("︰", "﹏"), 
    cjk_unified_ideographs : () => null, 
    cjk_radicals : () => charRange("⺀", "⻳"),
    cjk_strokes : () => charRange("㇀", "㇯"),
    kangxi_radicals : () => charRange("⼀", "⿕"), 

    // other east asian writing systems 
    counting_rod_numerals : () => null,
    halfwidth_and_fullwidth_forms : () => charRange("！", "￮"),
    ideographic_description_characters : () => charRange("⿰", "⿿"),
    khitan_small_script : () => null,
    lisu : () => charRange("ꓐ","꓿"),
    lisu_supplement : () => null, 
    miao : () => null, 
    modifier_tone_letters : () => charRange("꜀", "ꜟ"),
    nushu : () => null,
    nyiakeng_puache_hmong : () => null,
    small_forms_variants : () => charRange("﹐", "﹫"), 
    taixuanjing : () => null, 
    tangut : () => null, 
    tangut_components : () => null, 
    tangut_supplement : () => null, 
    vertical_forms : () => charRange("︐", "︙"), 
    wancho : () => null,
    yi_syllables : () => charRange("ꀀ", "ꒌ"),
    yi_radicals : () => charRange("꒐", "꓆"),
    yijing_hexagonal_symbols : () => charRange("䷀", "䷿"), 

    // alphabetic presentation forms 
    alphabetic_presentation_forms : () => charRange("ﬀ", "ﭏ"), 

    // shavian 
    shavian : () => null,

    // braile 
    braille : () => charRange("⠀", "⣿"),

    // game symbols 
    mahjong_tiles : () => (
        "🀀🀁🀂🀃🀄🀅🀆🀇🀈🀉🀊🀋🀌🀍🀎🀏" +
        "🀐🀑🀒🀓🀔🀕🀖🀗🀘🀙🀚🀛🀜🀝🀞🀟🀠" +
        "🀡🀢🀣🀤🀥🀦🀧🀨🀩🀪🀫"
    ), 
    domino_tiles  : () => (
        "🀰🀱🀲🀳🀴🀵🀶🀷🀸🀹🀺🀻🀼🀽🀾" +
        "🀿🁀🁁🁂🁃🁄🁅🁆🁇🁈🁉🁊🁋🁌🁍" +
        "🁎🁏🁐🁑🁒🁓🁔🁕🁖🁗🁘🁙🁚🁛🁜" +
        "🁝🁞🁟🁠🁡🁢🁣🁤🁥🁦🁧🁨🁩🁪🁫🁬🁭🁮🁯🁰🁱🁲" +
        "🁳🁴🁵🁶🁷🁸🁹🁺🁻🁼🁽🁾🁿🂀🂁🂂🂃🂄🂅🂆🂇🂈🂉🂊🂋" +
        "🂌🂍🂎🂏🂐🂑🂒🂓"
    ),
    playing_cards : () => (
        "🂠🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂬🂭🂮🂱🂲🂳🂴" +
        "🂵🂶🂷🂸🂹🂺🂻🂼🂽🂾🂿🃁🃂🃃🃄🃅🃆🃇🃈🃉" +
        "🃊🃋🃌🃍🃎🃏🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃜🃝" +
        "🃞🃟🃠🃡🃢🃣🃤🃥🃦🃧🃨🃩🃪🃫🃬🃭🃮🃯🃰🃱🃲🃳🃴🃵"
    ), 

    // ancient and historic scripts 
    aegean_numbers : () => null,
    anatolian_hieroglyphs : () => null, 
    ancient_greek_numbers : () => null,
    ancient_symbols : () => null,
    avestan : () => null,
    brahmi : () => null,
    carian : () => null,
    caucasian_albanian : () => null, 
    chorasmian : () => null, 
    cuneiform : () => null,
    cuneiform_numbers_and_punctuation : () => null,
    cypriot_syllabary : () => null, 
    cypro_minoan : () => null,
    early_dynastic_cuneiform : () => null, 
    egyptian_hieroglyph_format_controls :  () => null, 
    egyptian_hieroglyphs : () => null, 
    elbasan : () => null,
    elymaic : () => null,
    glagolitic : () => charRange("Ⰰ", "ⱟ"),
    glagolitic_supplement : () => null,
    gothic : () => null,
    hatran : () => null,
    imperial_aramaic : () => null,
    indic_siyaq_numbers : () => null,
    inscriptional_pahlavi : () => null,
    inscriptional_parthian : () => null,
    kharoshthi : () => null,
    linear_a : () => null,
    linear_b_ideograms : () => null,
    linear_b_syllabary : () => null,
    lycian : () => null,
    lydian : () => null,
    manichaean : () => null,
    mayan_numerals : () => null,
    meroitic_cursive: () => null,
    meroitic_hieroglyphs : () => null,
    nabataean : () => null,
    nandinagari : () => null,
    ogham : () => charRange(" ", "᚜"),
    old_hungarian :  () => null,
    old_italic : () => null,
    old_north_arabian :  () => null,
    old_permic : () => null,
    old_persian : () => null,
    old_sogdian : () => null,
    old_south_arabian : () => null,
    old_turkic : () => null,
    old_uyghur : () => null,
    palmyrene : () => null,
    phaistos_disc : () => null,
    phoenician :  () => null,
    psalter_pahlavi :  () => null,
    runic : () => charRange("ᚠ", "ᛸ"),
    sogdian : () => null,
    soyombo : () => null,
    ugaritic: () => null,
    vithkuqi: () => null,
    yezidi : () => null,
    zanabazar_square : () => null,

    // emojis 
    emojis : () => charRange("©️", "⛔️")
}