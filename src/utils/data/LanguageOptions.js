const languageOptions = [
  {
    value: 'English',
    key: 1
  },
  {
    value: 'Chinese (Mandarin)',
    key: 2
  },
  {
    value: 'French',
    key: 3
  },
  {
    value: 'Spanish',
    key: 4
  },
  {
    value: 'Portuguese',
    key: 5
  },
  {
    value: 'German',
    key: 6
  },
  {
    value: 'Japanese',
    key: 7
  },
  {
    value: 'Korean',
    key: 8
  },
  {
    value: 'Arabic',
    key: 9
  },
  {
    value: 'Hindi',
    key: 10
  },
  {
    value: 'Italian',
    key: 11
  },
  {
    value: 'Russian',
    key: 12
  },
  {
    value: 'Afrikaans',
    key: 13
  },
  {
    value: 'Akan Twi',
    key: 14
  },
  {
    value: 'Albanian',
    key: 15
  },
  {
    value: 'American Sign Language (ASL)',
    key: 16
  },
  {
    value: 'Amharic',
    key: 17
  },
  {
    value: 'Argentine Sign Language',
    key: 18
  },
  {
    value: 'Armenian',
    key: 19
  },
  {
    value: 'Azeri',
    key: 20
  },
  {
    value: 'Arabic (Egyptian)',
    key: 21
  },
  {
    value: 'Arabic (Gulf)',
    key: 22
  },
  {
    value: 'Arabic (Modern Standard)',
    key: 23
  },
  {
    value: 'Arabic(Sudanese)',
    key: 24
  },
  {
    value: 'Arabic (Maghrebi)',
    key: 25
  },
  {
    value: 'Arabic (Levantine)',
    key: 26
  },
  {
    value: 'Alsatian',
    key: 27
  },
  {
    value: 'Assamese',
    key: 28
  },
  {
    value: 'Aiki (Kibet)',
    key: 29
  },
  {
    value: 'Aiki (Runga)',
    key: 30
  },
  {
    value: 'Ainu',
    key: 31
  },
  {
    value: 'Aragonese',
    key: 32
  },
  {
    value: 'Aramaic',
    key: 33
  },
  {
    value: 'Aromanian',
    key: 34
  },
  {
    value: 'Assiniboine (Nakota)',
    key: 35
  },
  {
    value: 'Austrian German',
    key: 36
  },
  {
    value: 'Australian Sign Language (Auslan)',
    key: 37
  },
  {
    value: 'Avar',
    key: 38
  },
  {
    value: 'Aymara',
    key: 39
  },
  {
    value: 'Azerbaijani',
    key: 40
  },
  {
    value: 'Basque',
    key: 41
  },
  {
    value: 'Belait',
    key: 42
  },
  {
    value: 'Belarusian',
    key: 43
  },
  {
    value: 'Bengali',
    key: 44
  },
  {
    value: 'Bosnian',
    key: 45
  },
  {
    value: 'Brazilian Sign Language (LIBRAS)',
    key: 46
  },
  {
    value: 'British Sign Language (BSL)',
    key: 47
  },
  {
    value: 'Bulgarian',
    key: 48
  },
  {
    value: 'Burmese',
    key: 49
  },
  {
    value: 'Balochi',
    key: 50
  },
  {
    value: 'Blackfoot (Niitsi\'powahsin)',
    key: 51
  },
  {
    value: 'Breton',
    key: 52
  },
  {
    value: 'Balinese',
    key: 53
  },
  {
    value: 'Bago-Kusuntu',
    key: 54
  },
  {
    value: 'Bagri',
    key: 55
  },
  {
    value: 'Bambara (Bamanankan)',
    key: 56
  },
  {
    value: 'Banjar',
    key: 57
  },
  {
    value: 'Barawana (Baré)',
    key: 58
  },
  {
    value: 'Bari',
    key: 59
  },
  {
    value: 'Batak Toba',
    key: 60
  },
  {
    value: 'Bats',
    key: 61
  },
  {
    value: 'Bavarian',
    key: 62
  },
  {
    value: 'Beja',
    key: 63
  },
  {
    value: 'Bhojpuri',
    key: 64
  },
  {
    value: 'Bislama',
    key: 65
  },
  {
    value: 'Bugis',
    key: 66
  },
  {
    value: 'Catalan',
    key: 67
  },
  {
    value: 'Cebuano',
    key: 68
  },
  {
    value: 'Chinese (Cantonese)',
    key: 69
  },
  {
    value: 'Chinese (Hakka)',
    key: 70
  },
  {
    value: 'Chinese (Hokkien)',
    key: 71
  },
  {
    value: 'Chinese (Shanghainese)',
    key: 72
  },
  {
    value: 'Chinese (Taiwanese)',
    key: 73
  },
  {
    value: 'Chinese (Other)',
    key: 74
  },
  {
    value: 'Croatian',
    key: 75
  },
  {
    value: 'Czech',
    key: 76
  },
  {
    value: 'Cornish',
    key: 77
  },
  {
    value: 'Corsican',
    key: 78
  },
  {
    value: 'Cree',
    key: 79
  },
  {
    value: 'Cherokee',
    key: 80
  },
  {
    value: 'Chewa (Chichewa)',
    key: 81
  },
  {
    value: 'Chavacano',
    key: 82
  },
  {
    value: 'Chechen',
    key: 83
  },
  {
    value: 'Chibarwe',
    key: 84
  },
  {
    value: 'Chiquitano',
    key: 85
  },
  {
    value: 'Choctaw',
    key: 86
  },
  {
    value: 'Chukchi',
    key: 87
  },
  {
    value: 'Chuwabu',
    key: 88
  },
  {
    value: 'Coptic',
    key: 89
  },
  {
    value: 'Crow',
    key: 90
  },
  {
    value: 'Danish',
    key: 91
  },
  {
    value: 'Dutch',
    key: 93
  },
  {
    value: 'Dzongkha',
    key: 94
  },
  {
    value: 'Dari',
    key: 95
  },
  {
    value: 'Dothraki',
    key: 96
  },
  {
    value: 'Daakaka',
    key: 97
  },
  {
    value: 'Dakota',
    key: 98
  },
  {
    value: 'Daza',
    key: 99
  },
  {
    value: 'Dela-Oenale',
    key: 100
  },
  {
    value: 'Dinka',
    key: 101
  },
  {
    value: 'Domari',
    key: 102
  },
  {
    value: 'Dotyali',
    key: 103
  },
  {
    value: 'Drehu',
    key: 104
  },
  {
    value: 'Esperanto',
    key: 105
  },
  {
    value: 'Estonian',
    key: 106
  },
  {
    value: 'Erzya',
    key: 107
  },
  {
    value: 'Ewe',
    key: 108
  },
  {
    value: 'Ewondo (Fang)',
    key: 109
  },
  {
    value: 'Filipino (Tagalog)',
    key: 110
  },
  {
    value: 'Finnish',
    key: 111
  },
  {
    value: 'Flemish',
    key: 112
  },
  {
    value: 'Faroese',
    key: 113
  },
  {
    value: 'Frisian',
    key: 114
  },
  {
    value: 'Fijian (ITaukei)',
    key: 115
  },
  {
    value: 'Fon (Fon gbè)',
    key: 116
  },
  {
    value: 'Friulian',
    key: 117
  },
  {
    value: 'Fulah',
    key: 118
  },
  {
    value: 'Fur',
    key: 119
  },
  {
    value: 'Gaelic (Irish)',
    key: 120
  },
  {
    value: 'Gaelic (Scottish)',
    key: 121
  },
  {
    value: 'Galician',
    key: 122
  },
  {
    value: 'Georgian',
    key: 123
  },
  {
    value: 'Greek',
    key: 124
  },
  {
    value: 'Greek (Ancient)',
    key: 125
  },
  {
    value: 'Greenlandic',
    key: 126
  },
  {
    value: 'Gujarati',
    key: 127
  },
  {
    value: 'Ga',
    key: 128
  },
  {
    value: 'Guarani',
    key: 129
  },
  {
    value: 'Gaelic (Manx)',
    key: 130
  },
  {
    value: 'Gallo',
    key: 131
  },
  {
    value: 'Garifuna',
    key: 132
  },
  {
    value: 'Gikuyu',
    key: 133
  },
  {
    value: 'Guambiano',
    key: 135
  },
  {
    value: 'Gullah',
    key: 136
  },
  {
    value: 'Gullah (Afro-Seminole Creole)',
    key: 137
  },
  {
    value: 'Haitian Creole',
    key: 138
  },
  {
    value: 'Hausa',
    key: 139
  },
  {
    value: 'hawaiian',
    key: 140
  },
  {
    value: 'Hebrew',
    key: 141
  },
  {
    value: 'Hmong',
    key: 142
  },
  {
    value: 'Hungarian',
    key: 143
  },
  {
    value: 'Hawaiian Pidgin (Hawaiian Creole English)',
    key: 144
  },
  {
    value: 'Honduran Sign Language (LESHO)',
    key: 145
  },
  {
    value: 'Icelandic',
    key: 146
  },
  {
    value: 'Indonesian',
    key: 147
  },
  {
    value: 'Igbo',
    key: 148
  },
  {
    value: 'Inuktitut',
    key: 149
  },
  {
    value: 'Iban',
    key: 150
  },
  {
    value: 'Ingush',
    key: 151
  },
  {
    value: 'International Sign (IS)',
    key: 152
  },
  {
    value: 'Ido',
    key: 153
  },
  {
    value: 'Inuinnaqtun',
    key: 154
  },
  {
    value: 'Inuvialuktun',
    key: 155
  },
  {
    value: 'Ixcatec',
    key: 156
  },
  {
    value: 'Javanese',
    key: 157
  },
  {
    value: 'Japanese (Okinawan)',
    key: 158
  },
  {
    value: 'Japanese Sign Language',
    key: 159
  },
  {
    value: 'Jamaican Creole',
    key: 160
  },
  {
    value: 'Judeo-Tat',
    key: 161
  },
  {
    value: 'Kannada',
    key: 162
  },
  {
    value: 'Kazakh',
    key: 163
  },
  {
    value: 'Kinyarwanda',
    key: 164
  },
  {
    value: 'Khmer (Cambodian)',
    key: 165
  },
  {
    value: 'Klingon',
    key: 166
  },
  {
    value: 'Kurdish',
    key: 167
  },
  {
    value: 'Kyrgyz',
    key: 168
  },
  {
    value: 'Kekchi (Q\'eqchi\')',
    key: 169
  },
  {
    value: 'K\'iche\'',
    key: 170
  },
  {
    value: 'Kachin (Jingpho)',
    key: 171
  },
  {
    value: 'Kalanga',
    key: 172
  },
  {
    value: 'Kalmyk Oirat',
    key: 173
  },
  {
    value: 'Kanuri',
    key: 174
  },
  {
    value: 'Kenjeje',
    key: 175
  },
  {
    value: 'Khmu',
    key: 176
  },
  {
    value: 'Khoemana',
    key: 177
  },
  {
    value: 'Kirundi',
    key: 178
  },
  {
    value: 'Koisan (Tsoa)',
    key: 179
  },
  {
    value: 'Konkani',
    key: 180
  },
  {
    value: 'Lao',
    key: 181
  },
  {
    value: 'Latin',
    key: 182
  },
  {
    value: 'Latvian',
    key: 183
  },
  {
    value: 'Lithuanian',
    key: 184
  },
  {
    value: 'Luo',
    key: 185
  },
  {
    value: 'Luxembourgish',
    key: 186
  },
  {
    value: 'Lakota',
    key: 187
  },
  {
    value: 'Ladino (Judeo-Spanish)',
    key: 188
  },
  {
    value: 'Ladin',
    key: 189
  },
  {
    value: 'Lau',
    key: 190
  },
  {
    value: 'Limburgish',
    key: 191
  },
  {
    value: 'Litzlitz (Naman)',
    key: 192
  },
  {
    value: 'Lombard',
    key: 193
  },
  {
    value: 'Macedonian',
    key: 194
  },
  {
    value: 'Malagasy',
    key: 195
  },
  {
    value: 'Malay',
    key: 196
  },
  {
    value: 'Malayalam',
    key: 197
  },
  {
    value: 'Maltese',
    key: 198
  },
  {
    value: 'Maori',
    key: 199
  },
  {
    value: 'Marathi',
    key: 200
  },
  {
    value: 'Mongolian',
    key: 201
  },
  {
    value: 'Maasai',
    key: 202
  },
  {
    value: 'Maithili',
    key: 203
  },
  {
    value: 'Mamuju',
    key: 204
  },
  {
    value: 'Manchu',
    key: 205
  },
  {
    value: 'Mandingo (Madinka)',
    key: 206
  },
  {
    value: 'Manggarai',
    key: 207
  },
  {
    value: 'Mapudungun',
    key: 208
  },
  {
    value: 'Marri Ngarr',
    key: 209
  },
  {
    value: 'Masalit',
    key: 210
  },
  {
    value: 'Mekeo',
    key: 211
  },
  {
    value: 'Mexican Sign Language (LSM)',
    key: 212
  },
  {
    value: 'Minangkabau',
    key: 213
  },
  {
    value: 'Mingrelian',
    key: 214
  },
  {
    value: 'Mirandese',
    key: 215
  },
  {
    value: 'Miyako',
    key: 216
  },
  {
    value: 'Mon',
    key: 217
  },
  {
    value: 'Maldivian (Dhivehi)',
    key: 218
  },
  {
    value: 'Marshallese',
    key: 219
  },
  {
    value: 'Mauritian Creole',
    key: 220
  },
  {
    value: 'Mazatec',
    key: 221
  },
  {
    value: 'Montenegrin',
    key: 222
  },
  {
    value: 'Mnong',
    key: 223
  },
  {
    value: 'Nahuatl',
    key: 224
  },
  {
    value: 'Nepali',
    key: 225
  },
  {
    value: 'Norwegian',
    key: 226
  },
  {
    value: 'Nambya',
    key: 227
  },
  {
    value: 'Neapolitan (Napoletano)',
    key: 228
  },
  {
    value: 'Natchez',
    key: 229
  },
  {
    value: 'Navajo (Diné bizaad)',
    key: 230
  },
  {
    value: 'Ndebele',
    key: 231
  },
  {
    value: 'Neverver',
    key: 232
  },
  {
    value: 'Newar',
    key: 233
  },
  {
    value: 'Nigerian Pidgin',
    key: 234
  },
  {
    value: 'North Efate (Nakanamanga)',
    key: 235
  },
  {
    value: 'Nubian (Midob)',
    key: 236
  },
  {
    value: 'Nubian (Nobiin)',
    key: 237
  },
  {
    value: 'Nuer',
    key: 238
  },
  {
    value: 'Ojibwe',
    key: 239
  },
  {
    value: 'Ogiek (Akiek)',
    key: 240
  },
  {
    value: 'Okinawan',
    key: 241
  },
  {
    value: 'Oromo',
    key: 242
  },
  {
    value: 'Pashto',
    key: 243
  },
  {
    value: 'Persian (Farsi)',
    key: 244
  },
  {
    value: 'Polish',
    key: 245
  },
  {
    value: 'Punjabi',
    key: 246
  },
  {
    value: 'Papiamento',
    key: 247
  },
  {
    value: 'Pa\'o',
    key: 248
  },
  {
    value: 'Palauan',
    key: 249
  },
  {
    value: 'Quechua',
    key: 250
  },
  {
    value: 'Rohingya',
    key: 251
  },
  {
    value: 'Romanian',
    key: 252
  },
  {
    value: 'Romani (Balkan)',
    key: 253
  },
  {
    value: 'Romani (Sinte)',
    key: 254
  },
  {
    value: 'Romani (Vlax)',
    key: 255
  },
  {
    value: 'Romansch',
    key: 256
  },
  {
    value: 'Samoan',
    key: 257
  },
  {
    value: 'Sanskrit',
    key: 258
  },
  {
    value: 'Serbian',
    key: 259
  },
  {
    value: 'Sindhi',
    key: 260
  },
  {
    value: 'Sinhala',
    key: 261
  },
  {
    value: 'Sicilian',
    key: 262
  },
  {
    value: 'Slovak',
    key: 263
  },
  {
    value: 'Slovenian',
    key: 264
  },
  {
    value: 'Somali',
    key: 265
  },
  {
    value: 'Swahili',
    key: 266
  },
  {
    value: 'Swedish',
    key: 267
  },
  {
    value: 'Scots',
    key: 268
  },
  {
    value: 'Swiss German',
    key: 269
  },
  {
    value: 'Syriac',
    key: 270
  },
  {
    value: 'Sa',
    key: 271
  },
  {
    value: 'Saami (Kildin)',
    key: 272
  },
  {
    value: 'Saami (Lule)',
    key: 273
  },
  {
    value: 'Saami (Northern)',
    key: 274
  },
  {
    value: 'Sardinian',
    key: 275
  },
  {
    value: 'Sekani',
    key: 276
  },
  {
    value: 'Sena',
    key: 277
  },
  {
    value: 'Sfyria',
    key: 278
  },
  {
    value: 'Shan',
    key: 279
  },
  {
    value: 'Sherpa',
    key: 280
  },
  {
    value: 'Shona',
    key: 281
  },
  {
    value: 'Shona (Ndau)',
    key: 282
  },
  {
    value: 'Shoshoni',
    key: 283
  },
  {
    value: 'Shumashti',
    key: 284
  },
  {
    value: 'Sign Language(Other)',
    key: 285
  },
  {
    value: 'Silbo Gomero',
    key: 286
  },
  {
    value: 'Sotho',
    key: 287
  },
  {
    value: 'Sundanese',
    key: 288
  },
  {
    value: 'Swazi',
    key: 289
  },
  {
    value: 'Swiss-French Sign Language',
    key: 290
  },
  {
    value: 'Swiss-German Sign Language',
    key: 291
  },
  {
    value: 'Tajik',
    key: 292
  },
  {
    value: 'Berber (Tamazight)',
    key: 293
  },
  {
    value: 'Tamil',
    key: 294
  },
  {
    value: 'Tatar',
    key: 295
  },
  {
    value: 'Telugu',
    key: 296
  },
  {
    value: 'Thai',
    key: 297
  },
  {
    value: 'Tibetan',
    key: 298
  },
  {
    value: 'Turkish',
    key: 299
  },
  {
    value: 'Turkmen',
    key: 300
  },
  {
    value: 'Tutong',
    key: 301
  },
  {
    value: 'Toki Pona',
    key: 302
  },
  {
    value: 'Tamang',
    key: 303
  },
  {
    value: 'Tharu',
    key: 304
  },
  {
    value: 'Tigrinya',
    key: 305
  },
  {
    value: 'Tlingit',
    key: 306
  },
  {
    value: 'Tongan',
    key: 307
  },
  {
    value: 'Tsonga (Xitsonga)',
    key: 308
  },
  {
    value: 'Tswana',
    key: 309
  },
  {
    value: 'Tz’utujil',
    key: 310
  },
  {
    value: 'Ukrainian',
    key: 311
  },
  {
    value: 'Urdu',
    key: 312
  },
  {
    value: 'Uyghur',
    key: 313
  },
  {
    value: 'Uzbek',
    key: 314
  },
  {
    value: 'Vietnamese',
    key: 315
  },
  {
    value: 'Venda',
    key: 316
  },
  {
    value: 'Welsh',
    key: 317
  },
  {
    value: 'Wolof',
    key: 318
  },
  {
    value: 'Waray',
    key: 319
  },
  {
    value: 'Wayuu',
    key: 320
  },
  {
    value: 'Wyandot',
    key: 321
  },
  {
    value: 'Xhosa',
    key: 322
  },
  {
    value: 'Yakut',
    key: 323
  },
  {
    value: 'Yiddish',
    key: 324
  },
  {
    value: 'Yoruba',
    key: 325
  },
  {
    value: 'Yucatec Maya',
    key: 326
  },
  {
    value: 'Yola',
    key: 327
  },
  {
    value: 'Yugoslavian Sign Language',
    key: 328
  },
  {
    value: 'Zhuang',
    key: 329
  },
  {
    value: 'Zulu',
    key: 330
  },
  {
    value: 'Zaghawa (Beria)',
    key: 331
  },
  {
    value: 'Oneida',
    key: 332
  },
  {
    value: 'Zapotec',
    key: 333
  },
  {
    value: 'Zarma',
    key: 334
  },
  {
    value: 'Other',
    key: 335
  },
  {
    value: 'Occitan',
    key: 336
  },
  {
    value: 'Odia',
    key: 337
  },
  {
    value: 'Zaza (Northern)',
    key: 338
  }
]

export default languageOptions
