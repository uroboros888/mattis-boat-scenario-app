window.BOAT_SCENARIO_DATA = {
  "generatedBy": "boat_finance_model.py",
  "months": [
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb"
  ],
  "monthLabels": [
    "Июль",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
    "Янв",
    "Фев"
  ],
  "investedToMay": 75075165,
  "defaultBudget": 100000000,
  "scenarioOrder": [
    "optimal",
    "minimal",
    "minimal_plus_5",
    "parallel_2_4",
    "parallel_2_4_plus_5",
    "completion_fund_only"
  ],
  "sectionLabels": {
    "project_life": "Жизнь проекта",
    "boat_2": "Катер 2",
    "boat_3": "Катер 3",
    "boat_4": "Катер 4",
    "boat_5": "Катер 5"
  },
  "salePriceDefaults": {
    "boat_2": 0,
    "boat_3": 0,
    "boat_4": 0,
    "boat_5": 0
  },
  "saleScenarioOrder": [
    "none",
    "presentation",
    "manual"
  ],
  "saleScenarios": {
    "none": {
      "title": "Без продаж",
      "short": "Без продаж",
      "mode": "none",
      "note": "Поступления от продаж не учитываются; видно чистую потребность в финансировании.",
      "prices": {
        "boat_2": 0,
        "boat_3": 0,
        "boat_4": 0,
        "boat_5": 0
      }
    },
    "presentation": {
      "title": "План презентации",
      "short": "План продаж",
      "mode": "completion",
      "note": "Продажа по готовности катеров: катера 2-4 по 12,5 млн, катер 5 за 8 млн.",
      "prices": {
        "boat_2": 12500000,
        "boat_3": 12500000,
        "boat_4": 12500000,
        "boat_5": 8000000
      }
    },
    "manual": {
      "title": "Ручной сценарий",
      "short": "Ручной",
      "mode": "manual",
      "note": "Суммы и месяцы поступлений задаются вручную в приложении.",
      "prices": {
        "boat_2": 12500000,
        "boat_3": 12500000,
        "boat_4": 12500000,
        "boat_5": 8000000
      }
    }
  },
  "scenarios": {
    "optimal": {
      "key": "optimal",
      "title": "Optimal with boat 5",
      "note": "Boats 3/4 wait for boat 2; brigade 2 moves to boat 5 in Jul-Sep.",
      "monthlyTotal": [
        4320000,
        4570000,
        3620000,
        7240000,
        7790000,
        4790000,
        3910000,
        3860000
      ],
      "cumulativeFuture": [
        4320000,
        8890000,
        12510000,
        19750000,
        27540000,
        32330000,
        36240000,
        40100000
      ],
      "cumulativePlan": [
        79395165,
        83965165,
        87585165,
        94825165,
        102615165,
        107405165,
        111315165,
        115175165
      ],
      "cumulativeBudgetGap": [
        20604835,
        16034835,
        12414835,
        5174835,
        -2615165,
        -7405165,
        -11315165,
        -15175165
      ],
      "futureTotal": 40100000,
      "planTotal": 115175165,
      "budgetGap": -15175165,
      "directBoats": 23720000,
      "projectLife": 16380000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4670000,
        "boat_3": 4320000,
        "boat_4": 4320000,
        "boat_5": 10410000
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12506763,
        "boat_3": 7198804,
        "boat_4": 5972304,
        "boat_5": 11490000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "15.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "30.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_5",
          "boatLabel": "Катер 5",
          "month": "Feb",
          "monthLabel": "Фев",
          "monthIndex": 7,
          "date": "28.02",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          79395165,
          83965165,
          87585165,
          94825165,
          102615165,
          107405165,
          111315165,
          115175165
        ],
        "totalSales": 0,
        "finalNetPlan": 115175165,
        "finalGap": -15175165,
        "peakMonth": "Feb",
        "peakMonthLabel": "Фев",
        "peakValue": 115175165,
        "peakGap": -15175165
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            1960000,
            1960000,
            2010000,
            2060000,
            2110000,
            2110000,
            2110000,
            2060000
          ],
          "total": 16380000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1890000,
            1890000,
            890000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4670000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            0,
            0,
            1940000,
            1940000,
            440000,
            0,
            0
          ],
          "total": 4320000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            0,
            0,
            1940000,
            1940000,
            440000,
            0,
            0
          ],
          "total": 4320000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            470000,
            720000,
            720000,
            1300000,
            1800000,
            1800000,
            1800000,
            1800000
          ],
          "total": 10410000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "lines": [
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "rent",
          "itemLabel": "Аренда",
          "boat": null,
          "directBoatCost": false,
          "months": [
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000
          ],
          "total": 3200000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "utilities",
          "itemLabel": "К.У.",
          "boat": null,
          "directBoatCost": false,
          "months": [
            150000,
            150000,
            200000,
            250000,
            300000,
            300000,
            300000,
            250000
          ],
          "total": 1900000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "other",
          "itemLabel": "Прочие затраты",
          "boat": null,
          "directBoatCost": false,
          "months": [
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000
          ],
          "total": 800000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "admin_payroll",
          "itemLabel": "ФОТ администрации",
          "boat": null,
          "directBoatCost": false,
          "months": [
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000
          ],
          "total": 8720000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "general_production_payroll",
          "itemLabel": "ФОТ общего производства",
          "boat": null,
          "directBoatCost": false,
          "months": [
            220000,
            220000,
            220000,
            220000,
            220000,
            220000,
            220000,
            220000
          ],
          "total": 1760000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            510000,
            510000,
            510000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1530000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_2_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            170000,
            170000,
            170000,
            0,
            0
          ],
          "total": 510000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_1_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            190000,
            190000,
            190000,
            0,
            0
          ],
          "total": 570000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half_from_oct",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials_after_stopper",
          "itemLabel": "Материалы после стопера",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1500000,
            1500000,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_2_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            170000,
            170000,
            170000,
            0,
            0
          ],
          "total": 510000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_1_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            190000,
            190000,
            190000,
            0,
            0
          ],
          "total": 570000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half_from_oct",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials_after_stopper",
          "itemLabel": "Материалы после стопера",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1500000,
            1500000,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "brigade_2_then_3",
          "itemLabel": "ФОТ произв. бригады 2/3",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            340000,
            340000,
            340000,
            320000,
            320000,
            320000,
            320000,
            320000
          ],
          "total": 2620000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            130000,
            130000,
            130000,
            480000,
            480000,
            480000,
            480000,
            480000
          ],
          "total": 2790000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            0,
            250000,
            250000,
            500000,
            1000000,
            1000000,
            1000000,
            1000000
          ],
          "total": 5000000
        }
      ]
    },
    "minimal": {
      "key": "minimal",
      "title": "Minimal 2-4 only",
      "note": "Boat 2 first; boats 3/4 after stopper with brigades 1 and 2; boat 5 not started.",
      "monthlyTotal": [
        3400000,
        3400000,
        2450000,
        4630000,
        5680000,
        3680000,
        0,
        0
      ],
      "cumulativeFuture": [
        3400000,
        6800000,
        9250000,
        13880000,
        19560000,
        23240000,
        23240000,
        23240000
      ],
      "cumulativePlan": [
        78475165,
        81875165,
        84325165,
        88955165,
        94635165,
        98315165,
        98315165,
        98315165
      ],
      "cumulativeBudgetGap": [
        21524835,
        18124835,
        15674835,
        11044835,
        5364835,
        1684835,
        1684835,
        1684835
      ],
      "futureTotal": 23240000,
      "planTotal": 98315165,
      "budgetGap": 1684835,
      "directBoats": 12890000,
      "projectLife": 10350000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4250000,
        "boat_3": 4380000,
        "boat_4": 4260000,
        "boat_5": 0
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12086763,
        "boat_3": 7258804,
        "boat_4": 5912304,
        "boat_5": 1080000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "15.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "30.12",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          78475165,
          81875165,
          84325165,
          88955165,
          94635165,
          98315165,
          98315165,
          98315165
        ],
        "totalSales": 0,
        "finalNetPlan": 98315165,
        "finalGap": 1684835,
        "peakMonth": "Dec",
        "peakMonthLabel": "Дек",
        "peakValue": 98315165,
        "peakGap": 1684835
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            1650000,
            1650000,
            1700000,
            1750000,
            1800000,
            1800000,
            0,
            0
          ],
          "total": 10350000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1750000,
            1750000,
            750000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4250000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            0,
            0,
            1460000,
            1960000,
            960000,
            0,
            0
          ],
          "total": 4380000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            0,
            0,
            1420000,
            1920000,
            920000,
            0,
            0
          ],
          "total": 4260000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 0,
          "active": [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ]
        }
      ],
      "lines": [
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "rent",
          "itemLabel": "Аренда",
          "boat": null,
          "directBoatCost": false,
          "months": [
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            0,
            0
          ],
          "total": 2400000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "utilities",
          "itemLabel": "К.У.",
          "boat": null,
          "directBoatCost": false,
          "months": [
            150000,
            150000,
            200000,
            250000,
            300000,
            300000,
            0,
            0
          ],
          "total": 1350000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "other",
          "itemLabel": "Прочие затраты",
          "boat": null,
          "directBoatCost": false,
          "months": [
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            0,
            0
          ],
          "total": 600000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "admin_payroll",
          "itemLabel": "ФОТ администрации",
          "boat": null,
          "directBoatCost": false,
          "months": [
            1000000,
            1000000,
            1000000,
            1000000,
            1000000,
            1000000,
            0,
            0
          ],
          "total": 6000000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            370000,
            370000,
            370000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1110000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            380000,
            380000,
            380000,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1000000,
            1500000,
            500000,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_2_full_aug_dec",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            340000,
            340000,
            340000,
            0,
            0
          ],
          "total": 1020000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1000000,
            1500000,
            500000,
            0,
            0
          ],
          "total": 3000000
        }
      ]
    },
    "minimal_plus_5": {
      "key": "minimal_plus_5",
      "title": "Minimal 2-4 plus boat 5",
      "note": "Minimal 2-4 plan with brigades 1 and 2 plus direct boat 5 work; project life continues through February.",
      "monthlyTotal": [
        3870000,
        4120000,
        3170000,
        5930000,
        7480000,
        5480000,
        3600000,
        3550000
      ],
      "cumulativeFuture": [
        3870000,
        7990000,
        11160000,
        17090000,
        24570000,
        30050000,
        33650000,
        37200000
      ],
      "cumulativePlan": [
        78945165,
        83065165,
        86235165,
        92165165,
        99645165,
        105125165,
        108725165,
        112275165
      ],
      "cumulativeBudgetGap": [
        21054835,
        16934835,
        13764835,
        7834835,
        354835,
        -5125165,
        -8725165,
        -12275165
      ],
      "futureTotal": 37200000,
      "planTotal": 112275165,
      "budgetGap": -12275165,
      "directBoats": 23300000,
      "projectLife": 13900000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4250000,
        "boat_3": 4380000,
        "boat_4": 4260000,
        "boat_5": 10410000
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12086763,
        "boat_3": 7258804,
        "boat_4": 5912304,
        "boat_5": 11490000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "15.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "30.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_5",
          "boatLabel": "Катер 5",
          "month": "Feb",
          "monthLabel": "Фев",
          "monthIndex": 7,
          "date": "28.02",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          78945165,
          83065165,
          86235165,
          92165165,
          99645165,
          105125165,
          108725165,
          112275165
        ],
        "totalSales": 0,
        "finalNetPlan": 112275165,
        "finalGap": -12275165,
        "peakMonth": "Feb",
        "peakMonthLabel": "Фев",
        "peakValue": 112275165,
        "peakGap": -12275165
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            1650000,
            1650000,
            1700000,
            1750000,
            1800000,
            1800000,
            1800000,
            1750000
          ],
          "total": 13900000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1750000,
            1750000,
            750000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4250000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            0,
            0,
            1460000,
            1960000,
            960000,
            0,
            0
          ],
          "total": 4380000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            0,
            0,
            1420000,
            1920000,
            920000,
            0,
            0
          ],
          "total": 4260000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            470000,
            720000,
            720000,
            1300000,
            1800000,
            1800000,
            1800000,
            1800000
          ],
          "total": 10410000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "lines": [
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "rent",
          "itemLabel": "Аренда",
          "boat": null,
          "directBoatCost": false,
          "months": [
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000
          ],
          "total": 3200000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "utilities",
          "itemLabel": "К.У.",
          "boat": null,
          "directBoatCost": false,
          "months": [
            150000,
            150000,
            200000,
            250000,
            300000,
            300000,
            300000,
            250000
          ],
          "total": 1900000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "other",
          "itemLabel": "Прочие затраты",
          "boat": null,
          "directBoatCost": false,
          "months": [
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000
          ],
          "total": 800000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "admin_payroll",
          "itemLabel": "ФОТ администрации",
          "boat": null,
          "directBoatCost": false,
          "months": [
            1000000,
            1000000,
            1000000,
            1000000,
            1000000,
            1000000,
            1000000,
            1000000
          ],
          "total": 8000000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            370000,
            370000,
            370000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1110000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            380000,
            380000,
            380000,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1000000,
            1500000,
            500000,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_2_full_aug_dec",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            340000,
            340000,
            340000,
            0,
            0
          ],
          "total": 1020000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1000000,
            1500000,
            500000,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "brigade_2_then_3",
          "itemLabel": "ФОТ произв. бригады 2/3",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            340000,
            340000,
            340000,
            320000,
            320000,
            320000,
            320000,
            320000
          ],
          "total": 2620000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            130000,
            130000,
            130000,
            480000,
            480000,
            480000,
            480000,
            480000
          ],
          "total": 2790000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            0,
            250000,
            250000,
            500000,
            1000000,
            1000000,
            1000000,
            1000000
          ],
          "total": 5000000
        }
      ]
    },
    "parallel_2_4": {
      "key": "parallel_2_4",
      "title": "Parallel 2/3/4 heavy",
      "note": "Boat 2 starts in July; boats 3 and 4 start in August and each takes 3 months on one dedicated brigade; boat 5 not started.",
      "monthlyTotal": [
        3850000,
        6670000,
        6720000,
        3880000,
        2110000,
        2110000,
        0,
        0
      ],
      "cumulativeFuture": [
        3850000,
        10520000,
        17240000,
        21120000,
        23230000,
        25340000,
        25340000,
        25340000
      ],
      "cumulativePlan": [
        78925165,
        85595165,
        92315165,
        96195165,
        98305165,
        100415165,
        100415165,
        100415165
      ],
      "cumulativeBudgetGap": [
        21074835,
        14404835,
        7684835,
        3804835,
        1694835,
        -415165,
        -415165,
        -415165
      ],
      "futureTotal": 25340000,
      "planTotal": 100415165,
      "budgetGap": -415165,
      "directBoats": 13130000,
      "projectLife": 12210000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4670000,
        "boat_3": 4260000,
        "boat_4": 4200000,
        "boat_5": 0
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12506763,
        "boat_3": 7138804,
        "boat_4": 5852304,
        "boat_5": 1080000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Oct",
          "monthLabel": "Окт",
          "monthIndex": 3,
          "date": "15.10",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Oct",
          "monthLabel": "Окт",
          "monthIndex": 3,
          "date": "30.10",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          78925165,
          85595165,
          92315165,
          96195165,
          98305165,
          100415165,
          100415165,
          100415165
        ],
        "totalSales": 0,
        "finalNetPlan": 100415165,
        "finalGap": -415165,
        "peakMonth": "Dec",
        "peakMonthLabel": "Дек",
        "peakValue": 100415165,
        "peakGap": -415165
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            1960000,
            1960000,
            2010000,
            2060000,
            2110000,
            2110000,
            0,
            0
          ],
          "total": 12210000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1890000,
            1890000,
            890000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4670000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            1420000,
            1920000,
            920000,
            0,
            0,
            0,
            0
          ],
          "total": 4260000,
          "active": [
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            1400000,
            1900000,
            900000,
            0,
            0,
            0,
            0
          ],
          "total": 4200000,
          "active": [
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 0,
          "active": [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ]
        }
      ],
      "lines": [
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "rent",
          "itemLabel": "Аренда",
          "boat": null,
          "directBoatCost": false,
          "months": [
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            0,
            0
          ],
          "total": 2400000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "utilities",
          "itemLabel": "К.У.",
          "boat": null,
          "directBoatCost": false,
          "months": [
            150000,
            150000,
            200000,
            250000,
            300000,
            300000,
            0,
            0
          ],
          "total": 1350000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "other",
          "itemLabel": "Прочие затраты",
          "boat": null,
          "directBoatCost": false,
          "months": [
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            0,
            0
          ],
          "total": 600000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "admin_payroll",
          "itemLabel": "ФОТ администрации",
          "boat": null,
          "directBoatCost": false,
          "months": [
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            0,
            0
          ],
          "total": 6540000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "general_production_payroll",
          "itemLabel": "ФОТ общего производства",
          "boat": null,
          "directBoatCost": false,
          "months": [
            220000,
            220000,
            220000,
            220000,
            220000,
            220000,
            0,
            0
          ],
          "total": 1320000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            510000,
            510000,
            510000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1530000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_2_full_aug_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            340000,
            340000,
            340000,
            0,
            0,
            0,
            0
          ],
          "total": 1020000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            80000,
            80000,
            80000,
            0,
            0,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            1000000,
            1500000,
            500000,
            0,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_3_full_aug_oct",
          "itemLabel": "ФОТ произв. бригады 3",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            320000,
            320000,
            320000,
            0,
            0,
            0,
            0
          ],
          "total": 960000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            80000,
            80000,
            80000,
            0,
            0,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            1000000,
            1500000,
            500000,
            0,
            0,
            0,
            0
          ],
          "total": 3000000
        }
      ]
    },
    "parallel_2_4_plus_5": {
      "key": "parallel_2_4_plus_5",
      "title": "Parallel 2/3/4 heavy plus boat 5 with brigade 4",
      "note": "Resource-valid stress test: boats 3 and 4 each take 3 months on one dedicated brigade plus boat 5 on separate brigade 4; project life continues through February.",
      "monthlyTotal": [
        4320000,
        7390000,
        7440000,
        5200000,
        3930000,
        3930000,
        3930000,
        3880000
      ],
      "cumulativeFuture": [
        4320000,
        11710000,
        19150000,
        24350000,
        28280000,
        32210000,
        36140000,
        40020000
      ],
      "cumulativePlan": [
        79395165,
        86785165,
        94225165,
        99425165,
        103355165,
        107285165,
        111215165,
        115095165
      ],
      "cumulativeBudgetGap": [
        20604835,
        13214835,
        5774835,
        574835,
        -3355165,
        -7285165,
        -11215165,
        -15095165
      ],
      "futureTotal": 40020000,
      "planTotal": 115095165,
      "budgetGap": -15095165,
      "directBoats": 23640000,
      "projectLife": 16380000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4670000,
        "boat_3": 4260000,
        "boat_4": 4200000,
        "boat_5": 10510000
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12506763,
        "boat_3": 7138804,
        "boat_4": 5852304,
        "boat_5": 11590000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Oct",
          "monthLabel": "Окт",
          "monthIndex": 3,
          "date": "15.10",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Oct",
          "monthLabel": "Окт",
          "monthIndex": 3,
          "date": "30.10",
          "defaultAmount": 0
        },
        {
          "boat": "boat_5",
          "boatLabel": "Катер 5",
          "month": "Feb",
          "monthLabel": "Фев",
          "monthIndex": 7,
          "date": "28.02",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          79395165,
          86785165,
          94225165,
          99425165,
          103355165,
          107285165,
          111215165,
          115095165
        ],
        "totalSales": 0,
        "finalNetPlan": 115095165,
        "finalGap": -15095165,
        "peakMonth": "Feb",
        "peakMonthLabel": "Фев",
        "peakValue": 115095165,
        "peakGap": -15095165
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            1960000,
            1960000,
            2010000,
            2060000,
            2110000,
            2110000,
            2110000,
            2060000
          ],
          "total": 16380000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1890000,
            1890000,
            890000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4670000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            1420000,
            1920000,
            920000,
            0,
            0,
            0,
            0
          ],
          "total": 4260000,
          "active": [
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            1400000,
            1900000,
            900000,
            0,
            0,
            0,
            0
          ],
          "total": 4200000,
          "active": [
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            470000,
            720000,
            720000,
            1320000,
            1820000,
            1820000,
            1820000,
            1820000
          ],
          "total": 10510000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "lines": [
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "rent",
          "itemLabel": "Аренда",
          "boat": null,
          "directBoatCost": false,
          "months": [
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000,
            400000
          ],
          "total": 3200000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "utilities",
          "itemLabel": "К.У.",
          "boat": null,
          "directBoatCost": false,
          "months": [
            150000,
            150000,
            200000,
            250000,
            300000,
            300000,
            300000,
            250000
          ],
          "total": 1900000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "other",
          "itemLabel": "Прочие затраты",
          "boat": null,
          "directBoatCost": false,
          "months": [
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000,
            100000
          ],
          "total": 800000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "admin_payroll",
          "itemLabel": "ФОТ администрации",
          "boat": null,
          "directBoatCost": false,
          "months": [
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000,
            1090000
          ],
          "total": 8720000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "general_production_payroll",
          "itemLabel": "ФОТ общего производства",
          "boat": null,
          "directBoatCost": false,
          "months": [
            220000,
            220000,
            220000,
            220000,
            220000,
            220000,
            220000,
            220000
          ],
          "total": 1760000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            510000,
            510000,
            510000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1530000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_2_full_aug_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            340000,
            340000,
            340000,
            0,
            0,
            0,
            0
          ],
          "total": 1020000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            80000,
            80000,
            80000,
            0,
            0,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            1000000,
            1500000,
            500000,
            0,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_3_full_aug_oct",
          "itemLabel": "ФОТ произв. бригады 3",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            320000,
            320000,
            320000,
            0,
            0,
            0,
            0
          ],
          "total": 960000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            80000,
            80000,
            80000,
            0,
            0,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            1000000,
            1500000,
            500000,
            0,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "brigade_4_full",
          "itemLabel": "ФОТ произв. бригады 4",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            340000,
            340000,
            340000,
            340000,
            340000,
            340000,
            340000,
            340000
          ],
          "total": 2720000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            130000,
            130000,
            130000,
            480000,
            480000,
            480000,
            480000,
            480000
          ],
          "total": 2790000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            0,
            250000,
            250000,
            500000,
            1000000,
            1000000,
            1000000,
            1000000
          ],
          "total": 5000000
        }
      ]
    },
    "completion_fund_only": {
      "key": "completion_fund_only",
      "title": "Direct completion fund, all boats",
      "note": "Only direct future boat costs for boats 2-5 plus Viktor salary; excludes other project-life burn.",
      "monthlyTotal": [
        2560000,
        2810000,
        1810000,
        5380000,
        5880000,
        2880000,
        2000000,
        2000000
      ],
      "cumulativeFuture": [
        2560000,
        5370000,
        7180000,
        12560000,
        18440000,
        21320000,
        23320000,
        25320000
      ],
      "cumulativePlan": [
        77635165,
        80445165,
        82255165,
        87635165,
        93515165,
        96395165,
        98395165,
        100395165
      ],
      "cumulativeBudgetGap": [
        22364835,
        19554835,
        17744835,
        12364835,
        6484835,
        3604835,
        1604835,
        -395165
      ],
      "futureTotal": 25320000,
      "planTotal": 100395165,
      "budgetGap": -395165,
      "directBoats": 23720000,
      "projectLife": 1600000,
      "futureByBoat": {
        "boat_1": 0,
        "boat_2": 4670000,
        "boat_3": 4320000,
        "boat_4": 4320000,
        "boat_5": 10410000
      },
      "allInByBoat": {
        "boat_1": 15965038,
        "boat_2": 12506763,
        "boat_3": 7198804,
        "boat_4": 5972304,
        "boat_5": 11490000
      },
      "salePlan": [
        {
          "boat": "boat_2",
          "boatLabel": "Катер 2",
          "month": "Sep",
          "monthLabel": "Сен",
          "monthIndex": 2,
          "date": "30.09",
          "defaultAmount": 0
        },
        {
          "boat": "boat_3",
          "boatLabel": "Катер 3",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "15.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_4",
          "boatLabel": "Катер 4",
          "month": "Dec",
          "monthLabel": "Дек",
          "monthIndex": 5,
          "date": "30.12",
          "defaultAmount": 0
        },
        {
          "boat": "boat_5",
          "boatLabel": "Катер 5",
          "month": "Feb",
          "monthLabel": "Фев",
          "monthIndex": 7,
          "date": "28.02",
          "defaultAmount": 0
        }
      ],
      "defaultSales": {
        "monthlySales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativeSales": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "cumulativePlanAfterSales": [
          77635165,
          80445165,
          82255165,
          87635165,
          93515165,
          96395165,
          98395165,
          100395165
        ],
        "totalSales": 0,
        "finalNetPlan": 100395165,
        "finalGap": -395165,
        "peakMonth": "Feb",
        "peakMonthLabel": "Фев",
        "peakValue": 100395165,
        "peakGap": -395165
      },
      "gantt": [
        {
          "key": "project_life",
          "label": "Жизнь проекта",
          "months": [
            200000,
            200000,
            200000,
            200000,
            200000,
            200000,
            200000,
            200000
          ],
          "total": 1600000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        },
        {
          "key": "boat_2",
          "label": "Катер 2",
          "months": [
            1890000,
            1890000,
            890000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 4670000,
          "active": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "key": "boat_3",
          "label": "Катер 3",
          "months": [
            0,
            0,
            0,
            1940000,
            1940000,
            440000,
            0,
            0
          ],
          "total": 4320000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_4",
          "label": "Катер 4",
          "months": [
            0,
            0,
            0,
            1940000,
            1940000,
            440000,
            0,
            0
          ],
          "total": 4320000,
          "active": [
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
          ]
        },
        {
          "key": "boat_5",
          "label": "Катер 5",
          "months": [
            470000,
            720000,
            720000,
            1300000,
            1800000,
            1800000,
            1800000,
            1800000
          ],
          "total": 10410000,
          "active": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
          ]
        }
      ],
      "lines": [
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "brigade_1",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            380000,
            380000,
            380000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1140000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            510000,
            510000,
            510000,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 1530000
        },
        {
          "section": "boat_2",
          "sectionLabel": "Катер 2",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_2",
          "directBoatCost": true,
          "months": [
            1000000,
            1000000,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "total": 2000000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_2_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            170000,
            170000,
            170000,
            0,
            0
          ],
          "total": 510000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "brigade_1_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            190000,
            190000,
            190000,
            0,
            0
          ],
          "total": 570000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "design_half_from_oct",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_3",
          "sectionLabel": "Катер 3",
          "item": "materials_after_stopper",
          "itemLabel": "Материалы после стопера",
          "boat": "boat_3",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1500000,
            1500000,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_2_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 2",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            170000,
            170000,
            170000,
            0,
            0
          ],
          "total": 510000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "brigade_1_half_from_oct",
          "itemLabel": "ФОТ произв. бригады 1",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            190000,
            190000,
            190000,
            0,
            0
          ],
          "total": 570000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "design_half_from_oct",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            80000,
            80000,
            80000,
            0,
            0
          ],
          "total": 240000
        },
        {
          "section": "boat_4",
          "sectionLabel": "Катер 4",
          "item": "materials_after_stopper",
          "itemLabel": "Материалы после стопера",
          "boat": "boat_4",
          "directBoatCost": true,
          "months": [
            0,
            0,
            0,
            1500000,
            1500000,
            0,
            0,
            0
          ],
          "total": 3000000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "brigade_2_then_3",
          "itemLabel": "ФОТ произв. бригады 2/3",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            340000,
            340000,
            340000,
            320000,
            320000,
            320000,
            320000,
            320000
          ],
          "total": 2620000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "design_team",
          "itemLabel": "ФОТ констр. отдела",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            130000,
            130000,
            130000,
            480000,
            480000,
            480000,
            480000,
            480000
          ],
          "total": 2790000
        },
        {
          "section": "boat_5",
          "sectionLabel": "Катер 5",
          "item": "materials",
          "itemLabel": "Материалы",
          "boat": "boat_5",
          "directBoatCost": true,
          "months": [
            0,
            250000,
            250000,
            500000,
            1000000,
            1000000,
            1000000,
            1000000
          ],
          "total": 5000000
        },
        {
          "section": "project_life",
          "sectionLabel": "Жизнь проекта",
          "item": "viktor_payroll",
          "itemLabel": "ФОТ Виктора",
          "boat": null,
          "directBoatCost": false,
          "months": [
            200000,
            200000,
            200000,
            200000,
            200000,
            200000,
            200000,
            200000
          ],
          "total": 1600000
        }
      ]
    }
  }
};
