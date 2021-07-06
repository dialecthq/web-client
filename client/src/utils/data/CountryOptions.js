const countryOptions = [
  {
    value: 'Afghanistan',
    key: 1,
  },
  {
    value: 'Albania',
    key: 2,
  },
  {
    value: 'Algeria',
    key: 3,
  },
  {
    value: 'American Samoa',
    key: 4,
  },
  {
    value: 'Andorra',
    key: 5,
  },
  {
    value: 'Angola',
    key: 6,
  },
  {
    value: 'Anguilla',
    key: 7,
  },
  {
    value: 'Antigua and Barbuda',
    key: 8,
  },
  {
    value: 'Argentina',
    key: 9,
  },
  {
    value: 'Armenia',
    key: 10,
  },
  {
    value: 'Aruba',
    key: 11,
  },
  {
    value: 'Australia',
    key: 12,
  },
  {
    value: 'Austria',
    key: 13,
  },
  {
    value: 'Azerbaijan',
    key: 14,
  },
  {
    value: 'Bahamas',
    key: 15,
  },
  {
    value: 'Bahrain',
    key: 16,
  },
  {
    value: 'Bangladesh',
    key: 17,
  },
  {
    value: 'Barbados',
    key: 18,
  },
  {
    value: 'Belarus',
    key: 19,
  },
  {
    value: 'Belgium',
    key: 20,
  },
  {
    value: 'Belize',
    key: 21,
  },
  {
    value: 'Benin',
    key: 22,
  },
  {
    value: 'Bermuda',
    key: 23,
  },
  {
    value: 'Bhutan',
    key: 24,
  },
  {
    value: 'Bolivia',
    key: 25,
  },
  {
    value: 'Bosnia and Herzegowina',
    key: 26,
  },
  {
    value: 'Botswana',
    key: 27,
  },
  {
    value: 'Bouvet Island',
    key: 28,
  },
  {
    value: 'Brazil',
    key: 29,
  },
  {
    value: 'British Indian Ocean Territory',
    key: 30,
  },
  {
    value: 'Brunei Darussalam',
    key: 31,
  },
  {
    value: 'Bulgaria',
    key: 32,
  },
  {
    value: 'Burkina Faso',
    key: 33,
  },
  {
    value: 'Burundi',
    key: 34,
  },
  {
    value: 'Cambodia',
    key: 35,
  },
  {
    value: 'Cameroon',
    key: 36,
  },
  {
    value: 'Canada',
    key: 37,
  },
  {
    value: 'Cape Verde',
    key: 38,
  },
  {
    value: 'Cayman Islands',
    key: 39,
  },
  {
    value: 'Central African Republic',
    key: 40,
  },
  {
    value: 'Chad',
    key: 41,
  },
  {
    value: 'Chile',
    key: 42,
  },
  {
    value: 'China',
    key: 43,
  },
  {
    value: 'Christmas Island',
    key: 44,
  },
  {
    value: 'Cocoa (Keeling) Islands',
    key: 45,
  },
  {
    value: 'Colombia',
    key: 46,
  },
  {
    value: 'Comoros',
    key: 47,
  },
  {
    value: 'Cook Islands',
    key: 48,
  },
  {
    value: 'Costa Rica',
    key: 49,
  },
  {
    value: 'Cote Divoire',
    key: 50,
  },
  {
    value: 'Croatia',
    key: 51,
  },
  {
    value: 'Cuba',
    key: 52,
  },
  {
    value: 'Cyprus',
    key: 53,
  },
  {
    value: 'Czech Republic',
    key: 54,
  },
  {
    value: 'Democratic Republic of the Congo',
    key: 55,
  },
  {
    value: 'Denmark',
    key: 56,
  },
  {
    value: 'Djibouti',
    key: 57,
  },
  {
    value: 'Dominica',
    key: 58,
  },
  {
    value: 'Dominican Republic',
    key: 59,
  },
  {
    value: 'Ecuador',
    key: 60,
  },
  {
    value: 'Egypt',
    key: 61,
  },
  {
    value: 'El Salvador',
    key: 62,
  },
  {
    value: 'Equatorial Guinea',
    key: 63,
  },
  {
    value: 'Eritrea',
    key: 64,
  },
  {
    value: 'Estonia',
    key: 65,
  },
  {
    value: 'Ethiopia',
    key: 66,
  },
  {
    value: 'Falkland Islands (Malvinas)',
    key: 67,
  },
  {
    value: 'Faroe Islands',
    key: 68,
  },
  {
    value: 'Fiji',
    key: 69,
  },
  {
    value: 'Finland',
    key: 70,
  },
  {
    value: 'France',
    key: 71,
  },
  {
    value: 'Gabon',
    key: 72,
  },
  {
    value: 'Gambia',
    key: 73,
  },
  {
    value: 'Georgia',
    key: 74,
  },
  {
    value: 'Germany',
    key: 75,
  },
  {
    value: 'Ghana',
    key: 76,
  },
  {
    value: 'Gibraltar',
    key: 77,
  },
  {
    value: 'Greece',
    key: 78,
  },
  {
    value: 'Greenland',
    key: 79,
  },
  {
    value: 'Grenada',
    key: 80,
  },
  {
    value: 'Guam',
    key: 81,
  },
  {
    value: 'Guatemala',
    key: 82,
  },
  {
    value: 'Guinea',
    key: 83,
  },
  {
    value: 'Guinea-Bissau',
    key: 84,
  },
  {
    value: 'Guyana',
    key: 85,
  },
  {
    value: 'Haiti',
    key: 86,
  },
  {
    value: 'Heard and McDonald Islands',
    key: 87,
  },
  {
    value: 'Honduras',
    key: 88,
  },
  {
    value: 'Hong Kong',
    key: 89,
  },
  {
    value: 'Hungary',
    key: 90,
  },
  {
    value: 'Iceland',
    key: 91,
  },
  {
    value: 'India',
    key: 92,
  },
  {
    value: 'Indonesia',
    key: 93,
  },
  {
    value: 'Iran, Islamic Republic of',
    key: 94,
  },
  {
    value: 'Iraq',
    key: 95,
  },
  {
    value: 'Ireland',
    key: 96,
  },
  {
    value: 'Israel',
    key: 97,
  },
  {
    value: 'Italy',
    key: 98,
  },
  {
    value: 'Jamaica',
    key: 99,
  },
  {
    value: 'Japan',
    key: 100,
  },
  {
    value: 'Jordan',
    key: 101,
  },
  {
    value: 'Kazakhstan',
    key: 102,
  },
  {
    value: 'Kenya',
    key: 103,
  },
  {
    value: 'Kiribati',
    key: 104,
  },
  {
    value: "Korea, Democratic People's Republic of",
    key: 105,
  },
  {
    value: 'Korea, Republic of',
    key: 106,
  },
  {
    value: 'Kuwait',
    key: 107,
  },
  {
    value: 'Kyrgyzstan',
    key: 108,
  },
  {
    value: "Lao People's Democratic Republic",
    key: 109,
  },
  {
    value: 'Latvia',
    key: 110,
  },
  {
    value: 'Lebanon',
    key: 111,
  },
  {
    value: 'Lesotho',
    key: 112,
  },
  {
    value: 'Liberia',
    key: 113,
  },
  {
    value: 'Libyan Arab Jamahiriya',
    key: 114,
  },
  {
    value: 'Liechtenstein',
    key: 115,
  },
  {
    value: 'Lithuania',
    key: 116,
  },
  {
    value: 'Luxembourg',
    key: 117,
  },
  {
    value: 'Macau',
    key: 118,
  },
  {
    value: 'Macedonia, the former Yugoslav Republic of',
    key: 119,
  },
  {
    value: 'Madagascar',
    key: 120,
  },
  {
    value: 'Malawi',
    key: 121,
  },
  {
    value: 'Malaysia',
    key: 122,
  },
  {
    value: 'Maldives',
    key: 123,
  },
  {
    value: 'Mali',
    key: 124,
  },
  {
    value: 'Malta',
    key: 125,
  },
  {
    value: 'Marshall Islands',
    key: 126,
  },
  {
    value: 'Mauritania',
    key: 127,
  },
  {
    value: 'Mauritius',
    key: 128,
  },
  {
    value: 'Mexico',
    key: 129,
  },
  {
    value: 'Micronesia, Federated States of',
    key: 130,
  },
  {
    value: 'Moldova, Republic of',
    key: 131,
  },
  {
    value: 'Monaco',
    key: 132,
  },
  {
    value: 'Mongolia',
    key: 133,
  },
  {
    value: 'Montenegro',
    key: 134,
  },
  {
    value: 'Montserrat',
    key: 135,
  },
  {
    value: 'Morocco',
    key: 136,
  },
  {
    value: 'Mozambique',
    key: 137,
  },
  {
    value: 'Myanmar',
    key: 138,
  },
  {
    value: 'Namibia',
    key: 139,
  },
  {
    value: 'Nauru',
    key: 140,
  },
  {
    value: 'Nepal',
    key: 141,
  },
  {
    value: 'Netherlands',
    key: 142,
  },
  {
    value: 'New Zealand',
    key: 143,
  },
  {
    value: 'Nicaragua',
    key: 144,
  },
  {
    value: 'Niger',
    key: 145,
  },
  {
    value: 'Nigeria',
    key: 146,
  },
  {
    value: 'Niue',
    key: 147,
  },
  {
    value: 'Norfolk Island',
    key: 148,
  },
  {
    value: 'Northern Mariana Islands',
    key: 149,
  },
  {
    value: 'Norway',
    key: 150,
  },
  {
    value: 'Oman',
    key: 151,
  },
  {
    value: 'Pakistan',
    key: 152,
  },
  {
    value: 'Palau',
    key: 153,
  },
  {
    value: 'Palestinian Territories',
    key: 154,
  },
  {
    value: 'Panama',
    key: 155,
  },
  {
    value: 'Papua New Guinea',
    key: 156,
  },
  {
    value: 'Paraguay',
    key: 157,
  },
  {
    value: 'Peru',
    key: 158,
  },
  {
    value: 'Philippines',
    key: 159,
  },
  {
    value: 'Pitcairn',
    key: 160,
  },
  {
    value: 'Poland',
    key: 161,
  },
  {
    value: 'Portugal',
    key: 162,
  },
  {
    value: 'Puerto Rico',
    key: 163,
  },
  {
    value: 'Qatar',
    key: 164,
  },
  {
    value: 'Republic of Congo',
    key: 165,
  },
  {
    value: 'Romania',
    key: 166,
  },
  {
    value: 'Russian Federation',
    key: 167,
  },
  {
    value: 'Rwanda',
    key: 168,
  },
  {
    value: 'Saint Helena',
    key: 169,
  },
  {
    value: 'Saint Kitts and Nevis',
    key: 170,
  },
  {
    value: 'Saint Lucia',
    key: 171,
  },
  {
    value: 'Saint Vincent and the Grenadines',
    key: 172,
  },
  {
    value: 'Samoa',
    key: 173,
  },
  {
    value: 'San Marino',
    key: 174,
  },
  {
    value: 'Sao Tome and Principe',
    key: 175,
  },
  {
    value: 'Saudi Arabia',
    key: 176,
  },
  {
    value: 'Senegal',
    key: 177,
  },
  {
    value: 'Serbia',
    key: 178,
  },
  {
    value: 'Seychelles',
    key: 179,
  },
  {
    value: 'Sierra Leone',
    key: 180,
  },
  {
    value: 'Singapore',
    key: 181,
  },
  {
    value: 'Slovakia',
    key: 182,
  },
  {
    value: 'Slovenia',
    key: 183,
  },
  {
    value: 'Solomon Islands',
    key: 184,
  },
  {
    value: 'Somalia',
    key: 185,
  },
  {
    value: 'South Africa',
    key: 186,
  },
  {
    value: 'South Georgia and the South Sandwich Islands',
    key: 187,
  },
  {
    value: 'Spain',
    key: 188,
  },
  {
    value: 'Sri Lanka',
    key: 189,
  },
  {
    value: 'Sudan',
    key: 190,
  },
  {
    value: 'Suriname',
    key: 191,
  },
  {
    value: 'Svalbard and Jan Mayen',
    key: 192,
  },
  {
    value: 'Swaziland',
    key: 193,
  },
  {
    value: 'Sweden',
    key: 194,
  },
  {
    value: 'Switzerland',
    key: 195,
  },
  {
    value: 'Syrian Arab Republic',
    key: 196,
  },
  {
    value: 'Taiwan',
    key: 197,
  },
  {
    value: 'Tajikistan',
    key: 198,
  },
  {
    value: 'Tanzania, United Republic of',
    key: 199,
  },
  {
    value: 'Thailand',
    key: 200,
  },
  {
    value: 'Timor-Leste',
    key: 201,
  },
  {
    value: 'Togo',
    key: 202,
  },
  {
    value: 'Tokelau',
    key: 203,
  },
  {
    value: 'Tonga',
    key: 204,
  },
  {
    value: 'Trinidad and Tobago',
    key: 205,
  },
  {
    value: 'Tunisia',
    key: 206,
  },
  {
    value: 'Turkey',
    key: 207,
  },
  {
    value: 'Turkmenistan',
    key: 208,
  },
  {
    value: 'Turks and Caicos Islands',
    key: 209,
  },
  {
    value: 'Tuvalu',
    key: 210,
  },
  {
    value: 'Uganda',
    key: 211,
  },
  {
    value: 'Ukraine',
    key: 212,
  },
  {
    value: 'United Arab Emirates',
    key: 213,
  },
  {
    value: 'United Kingdom',
    key: 214,
  },
  {
    value: 'United States',
    key: 215,
  },
  {
    value: 'United States Minor Outlying Islands',
    key: 216,
  },
  {
    value: 'Uruguay',
    key: 217,
  },
  {
    value: 'Uzbekistan',
    key: 218,
  },
  {
    value: 'Vanuatu',
    key: 219,
  },
  {
    value: 'Vatican City State (Holy See)',
    key: 220,
  },
  {
    value: 'Venezuela',
    key: 221,
  },
  {
    value: 'Viet Nam',
    key: 222,
  },
  {
    value: 'Virgin Islands, British',
    key: 223,
  },
  {
    value: 'Virgin Islands, U.S.',
    key: 224,
  },
  {
    value: 'Western Sahara',
    key: 225,
  },
  {
    value: 'Yeman',
    key: 226,
  },
  {
    value: 'Zambia',
    key: 227,
  },
  {
    value: 'Zimbabwe',
    key: 228,
  },
  {
    value: 'Other',
    key: 229,
  },
];

export default countryOptions;
