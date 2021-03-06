const timezoneOptions = [
  {
    value: 'Dateline Standard Time',
    abbr: 'DST',
    offset: -12,
    isdst: 'FALSE',
    text: '(UTC-12:00) International Date Line West',
    key: 1
  },
  {
    value: 'UTC-11',
    abbr: 'U',
    offset: -11,
    isdst: 'FALSE',
    text: '(UTC-11:00) Coordinated Universal Time-11',
    key: 2
  },
  {
    value: 'Hawaiian Standard Time',
    abbr: 'HST',
    offset: -10,
    isdst: 'FALSE',
    text: '(UTC-10:00) Hawaii',
    key: 3
  },
  {
    value: 'Alaskan Standard Time',
    abbr: 'AKDT',
    offset: -8,
    isdst: 'TRUE',
    text: '(UTC-09:00) Alaska',
    key: 4
  },
  {
    value: 'Pacific Standard Time (Mexico)',
    abbr: 'PDT',
    offset: -7,
    isdst: 'TRUE',
    text: '(UTC-08:00) Baja California',
    key: 5
  },
  {
    value: 'Pacific Daylight Time',
    abbr: 'PDT',
    offset: -7,
    isdst: 'TRUE',
    text: '(UTC-07:00) Pacific Time (US & Canada)',
    key: 6
  },
  {
    value: 'Pacific Standard Time',
    abbr: 'PST',
    offset: -8,
    isdst: 'FALSE',
    text: '(UTC-08:00) Pacific Time (US & Canada)',
    key: 7
  },
  {
    value: 'US Mountain Standard Time',
    abbr: 'UMST',
    offset: -7,
    isdst: 'FALSE',
    text: '(UTC-07:00) Arizona',
    key: 8
  },
  {
    value: 'Mountain Standard Time (Mexico)',
    abbr: 'MDT',
    offset: -6,
    isdst: 'TRUE',
    text: '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
    key: 9
  },
  {
    value: 'Mountain Standard Time',
    abbr: 'MDT',
    offset: -6,
    isdst: 'TRUE',
    text: '(UTC-07:00) Mountain Time (US & Canada)',
    key: 10
  },
  {
    value: 'Central America Standard Time',
    abbr: 'CAST',
    offset: -6,
    isdst: 'FALSE',
    text: '(UTC-06:00) Central America',
    key: 11
  },
  {
    value: 'Central Standard Time',
    abbr: 'CDT',
    offset: -5,
    isdst: 'TRUE',
    text: '(UTC-06:00) Central Time (US & Canada)',
    key: 12
  },
  {
    value: 'Central Standard Time (Mexico)',
    abbr: 'CDT',
    offset: -5,
    isdst: 'TRUE',
    text: '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
    key: 13
  },
  {
    value: 'Canada Central Standard Time',
    abbr: 'CCST',
    offset: -6,
    isdst: 'FALSE',
    text: '(UTC-06:00) Saskatchewan',
    key: 14
  },
  {
    value: 'SA Pacific Standard Time',
    abbr: 'SPST',
    offset: -5,
    isdst: 'FALSE',
    text: '(UTC-05:00) Bogota, Lima, Quito',
    key: 15
  },
  {
    value: 'Eastern Standard Time',
    abbr: 'EDT',
    offset: -4,
    isdst: 'TRUE',
    text: '(UTC-05:00) Eastern Time (US & Canada)',
    key: 16
  },
  {
    value: 'US Eastern Standard Time',
    abbr: 'UEDT',
    offset: -4,
    isdst: 'TRUE',
    text: '(UTC-05:00) Indiana (East)',
    key: 17
  },
  {
    value: 'Venezuela Standard Time',
    abbr: 'VST',
    offset: -4.5,
    isdst: 'FALSE',
    text: '(UTC-04:30) Caracas',
    key: 18
  },
  {
    value: 'Paraguay Standard Time',
    abbr: 'PYT',
    offset: -4,
    isdst: 'FALSE',
    text: '(UTC-04:00) Asuncion',
    key: 19
  },
  {
    value: 'Atlantic Standard Time',
    abbr: 'ADT',
    offset: -3,
    isdst: 'TRUE',
    text: '(UTC-04:00) Atlantic Time (Canada)',
    key: 20
  },
  {
    value: 'Central Brazilian Standard Time',
    abbr: 'CBST',
    offset: -4,
    isdst: 'FALSE',
    text: '(UTC-04:00) Cuiaba',
    key: 21
  },
  {
    value: 'SA Western Standard Time',
    abbr: 'SWST',
    offset: -4,
    isdst: 'FALSE',
    text: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
    key: 22
  },
  {
    value: 'Pacific SA Standard Time',
    abbr: 'PSST',
    offset: -4,
    isdst: 'FALSE',
    text: '(UTC-04:00) Santiago',
    key: 23
  },
  {
    value: 'Newfoundland Standard Time',
    abbr: 'NDT',
    offset: -2.5,
    isdst: 'TRUE',
    text: '(UTC-03:30) Newfoundland',
    key: 24
  },
  {
    value: 'E. South America Standard Time',
    abbr: 'ESAST',
    offset: -3,
    isdst: 'FALSE',
    text: '(UTC-03:00) Brasilia',
    key: 25
  },
  {
    value: 'Argentina Standard Time',
    abbr: 'AST',
    offset: -3,
    isdst: 'FALSE',
    text: '(UTC-03:00) Buenos Aires',
    key: 26
  },
  {
    value: 'SA Eastern Standard Time',
    abbr: 'SEST',
    offset: -3,
    isdst: 'FALSE',
    text: '(UTC-03:00) Cayenne, Fortaleza',
    key: 27
  },
  {
    value: 'Greenland Standard Time',
    abbr: 'GDT',
    offset: -3,
    isdst: 'TRUE',
    text: '(UTC-03:00) Greenland',
    key: 28
  },
  {
    value: 'Montevideo Standard Time',
    abbr: 'MST',
    offset: -3,
    isdst: 'FALSE',
    text: '(UTC-03:00) Montevideo',
    key: 29
  },
  {
    value: 'Bahia Standard Time',
    abbr: 'BST',
    offset: -3,
    isdst: 'FALSE',
    text: '(UTC-03:00) Salvador',
    key: 30
  },
  {
    value: 'UTC-02',
    abbr: 'U',
    offset: -2,
    isdst: 'FALSE',
    text: '(UTC-02:00) Coordinated Universal Time-02',
    key: 31
  },
  {
    value: 'Mid-Atlantic Standard Time',
    abbr: 'MDT',
    offset: -1,
    isdst: 'TRUE',
    text: '(UTC-02:00) Mid-Atlantic - Old',
    key: 32
  },
  {
    value: 'Azores Standard Time',
    abbr: 'ADT',
    offset: 0,
    isdst: 'TRUE',
    text: '(UTC-01:00) Azores',
    key: 33
  },
  {
    value: 'Cape Verde Standard Time',
    abbr: 'CVST',
    offset: -1,
    isdst: 'FALSE',
    text: '(UTC-01:00) Cape Verde Is.',
    key: 34
  },
  {
    value: 'Morocco Standard Time',
    abbr: 'MDT',
    offset: 1,
    isdst: 'TRUE',
    text: '(UTC) Casablanca',
    key: 35
  },
  {
    value: 'UTC',
    abbr: 'UTC',
    offset: 0,
    isdst: 'FALSE',
    text: '(UTC) Coordinated Universal Time',
    key: 36
  },
  {
    value: 'GMT Standard Time',
    abbr: 'GMT',
    offset: 0,
    isdst: 'FALSE',
    text: '(UTC) Edinburgh, London',
    key: 37
  },
  {
    value: 'British Summer Time',
    abbr: 'BST',
    offset: 1,
    isdst: 'TRUE',
    text: '(UTC+01:00) Edinburgh, London',
    key: 38
  },
  {
    value: 'GMT Standard Time',
    abbr: 'GDT',
    offset: 1,
    isdst: 'TRUE',
    text: '(UTC) Dublin, Lisbon',
    key: 39
  },
  {
    value: 'Greenwich Standard Time',
    abbr: 'GST',
    offset: 0,
    isdst: 'FALSE',
    text: '(UTC) Monrovia, Reykjavik',
    key: 40
  },
  {
    value: 'W. Europe Standard Time',
    abbr: 'WEDT',
    offset: 2,
    isdst: 'TRUE',
    text: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    key: 41
  },
  {
    value: 'Central Europe Standard Time',
    abbr: 'CEDT',
    offset: 2,
    isdst: 'TRUE',
    text: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    key: 42
  },
  {
    value: 'Romance Standard Time',
    abbr: 'RDT',
    offset: 2,
    isdst: 'TRUE',
    text: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
    key: 43
  },
  {
    value: 'Central European Standard Time',
    abbr: 'CEDT',
    offset: 2,
    isdst: 'TRUE',
    text: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
    key: 44
  },
  {
    value: 'W. Central Africa Standard Time',
    abbr: 'WCAST',
    offset: 1,
    isdst: 'FALSE',
    text: '(UTC+01:00) West Central Africa',
    key: 45
  },
  {
    value: 'Namibia Standard Time',
    abbr: 'NST',
    offset: 1,
    isdst: 'FALSE',
    text: '(UTC+01:00) Windhoek',
    key: 46
  },
  {
    value: 'GTB Standard Time',
    abbr: 'GDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) Athens, Bucharest',
    key: 47
  },
  {
    value: 'Middle East Standard Time',
    abbr: 'MEDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) Beirut',
    key: 48
  },
  {
    value: 'Egypt Standard Time',
    abbr: 'EST',
    offset: 2,
    isdst: 'FALSE',
    text: '(UTC+02:00) Cairo',
    key: 49
  },
  {
    value: 'Syria Standard Time',
    abbr: 'SDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) Damascus',
    key: 50
  },
  {
    value: 'E. Europe Standard Time',
    abbr: 'EEDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) E. Europe',
    key: 51
  },
  {
    value: 'South Africa Standard Time',
    abbr: 'SAST',
    offset: 2,
    isdst: 'FALSE',
    text: '(UTC+02:00) Harare, Pretoria',
    key: 52
  },
  {
    value: 'FLE Standard Time',
    abbr: 'FDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
    key: 53
  },
  {
    value: 'Turkey Standard Time',
    abbr: 'TDT',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Istanbul',
    key: 54
  },
  {
    value: 'Israel Standard Time',
    abbr: 'JDT',
    offset: 3,
    isdst: 'TRUE',
    text: '(UTC+02:00) Jerusalem',
    key: 55
  },
  {
    value: 'Libya Standard Time',
    abbr: 'LST',
    offset: 2,
    isdst: 'FALSE',
    text: '(UTC+02:00) Tripoli',
    key: 56
  },
  {
    value: 'Jordan Standard Time',
    abbr: 'JST',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Amman',
    key: 57
  },
  {
    value: 'Arabic Standard Time',
    abbr: 'AST',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Baghdad',
    key: 58
  },
  {
    value: 'Kaliningrad Standard Time',
    abbr: 'KST',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+02:00) Kaliningrad',
    key: 59
  },
  {
    value: 'Arab Standard Time',
    abbr: 'AST',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Kuwait, Riyadh',
    key: 60
  },
  {
    value: 'E. Africa Standard Time',
    abbr: 'EAST',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Nairobi',
    key: 61
  },
  {
    value: 'Moscow Standard Time',
    abbr: 'MSK',
    offset: 3,
    isdst: 'FALSE',
    text: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
    key: 62
  },
  {
    value: 'Samara Time',
    abbr: 'SAMT',
    offset: 4,
    isdst: 'FALSE',
    text: '(UTC+04:00) Samara, Ulyanovsk, Saratov',
    key: 63
  },
  {
    value: 'Iran Standard Time',
    abbr: 'IDT',
    offset: 4.5,
    isdst: 'TRUE',
    text: '(UTC+03:30) Tehran',
    key: 64
  },
  {
    value: 'Arabian Standard Time',
    abbr: 'AST',
    offset: 4,
    isdst: 'FALSE',
    text: '(UTC+04:00) Abu Dhabi, Muscat',
    key: 65
  },
  {
    value: 'Azerbaijan Standard Time',
    abbr: 'ADT',
    offset: 5,
    isdst: 'TRUE',
    text: '(UTC+04:00) Baku',
    key: 66
  },
  {
    value: 'Mauritius Standard Time',
    abbr: 'MST',
    offset: 4,
    isdst: 'FALSE',
    text: '(UTC+04:00) Port Louis',
    key: 67
  },
  {
    value: 'Georgian Standard Time',
    abbr: 'GET',
    offset: 4,
    isdst: 'FALSE',
    text: '(UTC+04:00) Tbilisi',
    key: 68
  },
  {
    value: 'Caucasus Standard Time',
    abbr: 'CST',
    offset: 4,
    isdst: 'FALSE',
    text: '(UTC+04:00) Yerevan',
    key: 69
  },
  {
    value: 'Afghanistan Standard Time',
    abbr: 'AST',
    offset: 4.5,
    isdst: 'FALSE',
    text: '(UTC+04:30) Kabul',
    key: 70
  },
  {
    value: 'West Asia Standard Time',
    abbr: 'WAST',
    offset: 5,
    isdst: 'FALSE',
    text: '(UTC+05:00) Ashgabat, Tashkent',
    key: 71
  },
  {
    value: 'Yekaterinburg Time',
    abbr: 'YEKT',
    offset: 5,
    isdst: 'FALSE',
    text: '(UTC+05:00) Yekaterinburg',
    key: 72
  },
  {
    value: 'Pakistan Standard Time',
    abbr: 'PKT',
    offset: 5,
    isdst: 'FALSE',
    text: '(UTC+05:00) Islamabad, Karachi',
    key: 73
  },
  {
    value: 'India Standard Time',
    abbr: 'IST',
    offset: 5.5,
    isdst: 'FALSE',
    text: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    key: 74
  },
  {
    value: 'Sri Lanka Standard Time',
    abbr: 'SLST',
    offset: 5.5,
    isdst: 'FALSE',
    text: '(UTC+05:30) Sri Jayawardenepura',
    key: 75
  },
  {
    value: 'Nepal Standard Time',
    abbr: 'NST',
    offset: 5.75,
    isdst: 'FALSE',
    text: '(UTC+05:45) Kathmandu',
    key: 76
  },
  {
    value: 'Central Asia Standard Time',
    abbr: 'CAST',
    offset: 6,
    isdst: 'FALSE',
    text: '(UTC+06:00) Nur-Sultan (Astana)',
    key: 77
  },
  {
    value: 'Bangladesh Standard Time',
    abbr: 'BST',
    offset: 6,
    isdst: 'FALSE',
    text: '(UTC+06:00) Dhaka',
    key: 78
  },
  {
    value: 'Myanmar Standard Time',
    abbr: 'MST',
    offset: 6.5,
    isdst: 'FALSE',
    text: '(UTC+06:30) Yangon (Rangoon)',
    key: 79
  },
  {
    value: 'SE Asia Standard Time',
    abbr: 'SAST',
    offset: 7,
    isdst: 'FALSE',
    text: '(UTC+07:00) Bangkok, Hanoi, Jakarta',
    key: 80
  },
  {
    value: 'N. Central Asia Standard Time',
    abbr: 'NCAST',
    offset: 7,
    isdst: 'FALSE',
    text: '(UTC+07:00) Novosibirsk',
    key: 81
  },
  {
    value: 'China Standard Time',
    abbr: 'CST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    key: 82
  },
  {
    value: 'North Asia Standard Time',
    abbr: 'NAST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Krasnoyarsk',
    key: 83
  },
  {
    value: 'Singapore Standard Time',
    abbr: 'MPST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Kuala Lumpur, Singapore',
    key: 84
  },
  {
    value: 'W. Australia Standard Time',
    abbr: 'WAST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Perth',
    key: 85
  },
  {
    value: 'Taipei Standard Time',
    abbr: 'TST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Taipei',
    key: 86
  },
  {
    value: 'Ulaanbaatar Standard Time',
    abbr: 'UST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Ulaanbaatar',
    key: 87
  },
  {
    value: 'North Asia East Standard Time',
    abbr: 'NAEST',
    offset: 8,
    isdst: 'FALSE',
    text: '(UTC+08:00) Irkutsk',
    key: 88
  },
  {
    value: 'Japan Standard Time',
    abbr: 'JST',
    offset: 9,
    isdst: 'FALSE',
    text: '(UTC+09:00) Osaka, Sapporo, Tokyo',
    key: 89
  },
  {
    value: 'Korea Standard Time',
    abbr: 'KST',
    offset: 9,
    isdst: 'FALSE',
    text: '(UTC+09:00) Seoul',
    key: 90
  },
  {
    value: 'Cen. Australia Standard Time',
    abbr: 'CAST',
    offset: 9.5,
    isdst: 'FALSE',
    text: '(UTC+09:30) Adelaide',
    key: 91
  },
  {
    value: 'AUS Central Standard Time',
    abbr: 'ACST',
    offset: 9.5,
    isdst: 'FALSE',
    text: '(UTC+09:30) Darwin',
    key: 92
  },
  {
    value: 'E. Australia Standard Time',
    abbr: 'EAST',
    offset: 10,
    isdst: 'FALSE',
    text: '(UTC+10:00) Brisbane',
    key: 93
  },
  {
    value: 'AUS Eastern Standard Time',
    abbr: 'AEST',
    offset: 10,
    isdst: 'FALSE',
    text: '(UTC+10:00) Canberra, Melbourne, Sydney',
    key: 94
  },
  {
    value: 'West Pacific Standard Time',
    abbr: 'WPST',
    offset: 10,
    isdst: 'FALSE',
    text: '(UTC+10:00) Guam, Port Moresby',
    key: 95
  },
  {
    value: 'Tasmania Standard Time',
    abbr: 'TST',
    offset: 10,
    isdst: 'FALSE',
    text: '(UTC+10:00) Hobart',
    key: 96
  },
  {
    value: 'Yakutsk Standard Time',
    abbr: 'YST',
    offset: 9,
    isdst: 'FALSE',
    text: '(UTC+09:00) Yakutsk',
    key: 97
  },
  {
    value: 'Central Pacific Standard Time',
    abbr: 'CPST',
    offset: 11,
    isdst: 'FALSE',
    text: '(UTC+11:00) Solomon Is., New Caledonia',
    key: 98
  },
  {
    value: 'Vladivostok Standard Time',
    abbr: 'VST',
    offset: 11,
    isdst: 'FALSE',
    text: '(UTC+11:00) Vladivostok',
    key: 99
  },
  {
    value: 'New Zealand Standard Time',
    abbr: 'NZST',
    offset: 12,
    isdst: 'FALSE',
    text: '(UTC+12:00) Auckland, Wellington',
    key: 100
  },
  {
    value: 'UTC+12',
    abbr: 'U',
    offset: 12,
    isdst: 'FALSE',
    text: '(UTC+12:00) Coordinated Universal Time+12',
    key: 101
  },
  {
    value: 'Fiji Standard Time',
    abbr: 'FST',
    offset: 12,
    isdst: 'FALSE',
    text: '(UTC+12:00) Fiji',
    key: 102
  },
  {
    value: 'Magadan Standard Time',
    abbr: 'MST',
    offset: 12,
    isdst: 'FALSE',
    text: '(UTC+12:00) Magadan',
    key: 103
  },
  {
    value: 'Kamchatka Standard Time',
    abbr: 'KDT',
    offset: 13,
    isdst: 'TRUE',
    text: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
    key: 104
  },
  {
    value: 'Tonga Standard Time',
    abbr: 'TST',
    offset: 13,
    isdst: 'FALSE',
    text: '(UTC+13:00) Nuku\'alofa',
    key: 105
  },
  {
    value: 'Samoa Standard Time',
    abbr: 'SST',
    offset: 13,
    isdst: 'FALSE',
    text: '(UTC+13:00) Samoa',
    key: 106
  }
]

export default timezoneOptions
