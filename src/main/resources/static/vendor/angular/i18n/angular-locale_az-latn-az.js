/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "bazar",
      "bazar ert\u0259si",
      "\u00e7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131",
      "\u00e7\u0259r\u015f\u0259nb\u0259",
      "c\u00fcm\u0259 ax\u015fam\u0131",
      "c\u00fcm\u0259",
      "\u015f\u0259nb\u0259"
    ],
    "ERANAMES": [
      "eram\u0131zdan \u0259vv\u0259l",
      "bizim eram\u0131z\u0131n"
    ],
    "ERAS": [
      "e.\u0259.",
      "b.e."
    ],
    "FIRSTDAYOFWEEK": 0,
    "MONTH": [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avqust",
      "sentyabr",
      "oktyabr",
      "noyabr",
      "dekabr"
    ],
    "SHORTDAY": [
      "B.",
      "B.E.",
      "\u00c7.A.",
      "\u00c7.",
      "C.A.",
      "C.",
      "\u015e."
    ],
    "SHORTMONTH": [
      "yan",
      "fev",
      "mar",
      "apr",
      "may",
      "iyn",
      "iyl",
      "avq",
      "sen",
      "okt",
      "noy",
      "dek"
    ],
    "STANDALONEMONTH": [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "\u0130yun",
      "\u0130yul",
      "Avqust",
      "Sentyabr",
      "Oktyabr",
      "Noyabr",
      "Dekabr"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "d MMMM y, EEEE",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "dd.MM.yy HH:mm",
    "shortDate": "dd.MM.yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "man.",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\u00a4\u00a0",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "az-latn-az",
  "localeID": "az_Latn_AZ",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
