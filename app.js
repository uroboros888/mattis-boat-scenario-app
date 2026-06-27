(function () {
  const data = window.BOAT_SCENARIO_DATA;

  const scenarioCopy = {
    optimal: {
      short: "Оптимальный с 5",
      title: "Оптимальный план с катером 5",
      note: "Катера 3/4 ждут снятия стопера по катеру 2; бригада 2 в июле-сентябре работает на катере 5.",
    },
    minimal: {
      short: "Минимальный 2-4",
      title: "Минимальный план: катера 2-4",
      note: "Сначала закрываем катер 2, затем катера 3/4 идут двумя бригадами; катер 5 не запускаем.",
    },
    minimal_plus_5: {
      short: "Минимальный + 5",
      title: "Минимальный план с катером 5",
      note: "Минимальный план 2-4 с двумя бригадами на катерах 3/4 плюс прямые работы по катеру 5; жизнь проекта продлена до февраля.",
    },
    parallel_2_4: {
      short: "Параллельно 2/3/4",
      title: "Параллельный план 2/3/4",
      note: "Катер 2 идет с июля; катера 3 и 4 стартуют в августе и каждый строится 3 месяца одной отдельной бригадой; катер 5 не запускаем.",
    },
    parallel_2_4_plus_5: {
      short: "Параллельно + 5",
      title: "Параллельный план с катером 5",
      note: "Катера 3 и 4 строятся с августа по октябрь отдельными бригадами; катер 5 идет на отдельной бригаде 4; жизнь проекта до февраля.",
    },
    completion_fund_only: {
      short: "Фонд достройки",
      title: "Фонд прямой достройки",
      note: "Только прямые будущие затраты на катера 2-5 плюс ЗП Виктора; без прочего содержания проекта.",
    },
    custom: {
      short: "Кастомный",
      title: "Кастомный сценарий",
      note: "Пользовательский сценарий из конфигуратора: шаблон, катера, расписание, коэффициенты и штат задаются вручную.",
    },
  };

  const sectionOrder = ["project_life", "boat_2", "boat_3", "boat_4", "boat_5"];
  const sectionColors = {
    project_life: "#6b7b7f",
    boat_2: "#9bc77f",
    boat_3: "#315da0",
    boat_4: "#4f7fc1",
    boat_5: "#8b8580",
  };
  const expenseGroupOrder = ["materials", "production_payroll", "design_payroll", "admin_payroll", "fixed_overhead"];
  const expenseGroups = {
    materials: { label: "Материалы", color: "#c58a2b" },
    production_payroll: { label: "ФОТ бригад", color: "#315da0" },
    design_payroll: { label: "ФОТ конструкторов", color: "#4f7fc1" },
    admin_payroll: { label: "Адм. и общий ФОТ", color: "#368f8b" },
    fixed_overhead: { label: "Аренда / К.У. / прочее", color: "#6b7b7f" },
  };
  const dom = {
    appShell: document.getElementById("appShell"),
    budgetInput: document.getElementById("budgetInput"),
    includeRentUtilities: document.getElementById("includeRentUtilities"),
    includeBoat5: document.getElementById("includeBoat5"),
    viewTabs: document.getElementById("viewTabs"),
    scenarioTabs: document.getElementById("scenarioTabs"),
    scenarioTitle: document.getElementById("scenarioTitle"),
    scenarioNote: document.getElementById("scenarioNote"),
    budgetStatus: document.getElementById("budgetStatus"),
    kpiGrid: document.getElementById("kpiGrid"),
    overallSummary: document.getElementById("overallSummary"),
    overallTable: document.getElementById("overallTable"),
    salesScenarioTabs: document.getElementById("salesScenarioTabs"),
    salesLayerNote: document.getElementById("salesLayerNote"),
    saleAssumptions: document.getElementById("saleAssumptions"),
    salesMetrics: document.getElementById("salesMetrics"),
    salesTable: document.getElementById("salesTable"),
    presentationTimeline: document.getElementById("presentationTimeline"),
    timelineNotes: document.getElementById("timelineNotes"),
    ganttLegend: document.getElementById("ganttLegend"),
    ganttGrid: document.getElementById("ganttGrid"),
    monthlyChart: document.getElementById("monthlyChart"),
    monthlyGroupLegend: document.getElementById("monthlyGroupLegend"),
    mixBars: document.getElementById("mixBars"),
    monthlyStackedBars: document.getElementById("monthlyStackedBars"),
    sectionLegend: document.getElementById("sectionLegend"),
    brigadeHeatmap: document.getElementById("brigadeHeatmap"),
    customResetButton: document.getElementById("customResetButton"),
    customConfigSummary: document.getElementById("customConfigSummary"),
    customBaseScenario: document.getElementById("customBaseScenario"),
    customBoatToggles: document.getElementById("customBoatToggles"),
    customFixedToggles: document.getElementById("customFixedToggles"),
    customMultipliers: document.getElementById("customMultipliers"),
    customScheduleTable: document.getElementById("customScheduleTable"),
    payrollTitle: document.getElementById("payrollTitle"),
    payrollSummaryTotal: document.getElementById("payrollSummaryTotal"),
    payrollSummary: document.getElementById("payrollSummary"),
    payrollBreakdown: document.getElementById("payrollBreakdown"),
    payrollModeTabs: document.getElementById("payrollModeTabs"),
    payrollResetButton: document.getElementById("payrollResetButton"),
    payrollConfigNote: document.getElementById("payrollConfigNote"),
    payrollConfigTable: document.getElementById("payrollConfigTable"),
    cumulativeModeTabs: document.getElementById("cumulativeModeTabs"),
    cumulativeChart: document.getElementById("cumulativeChart"),
    cumulativeTable: document.getElementById("cumulativeTable"),
    comparisonSummary: document.getElementById("comparisonSummary"),
    comparisonContext: document.getElementById("comparisonContext"),
    comparisonTable: document.getElementById("comparisonTable"),
    detailsTitle: document.getElementById("detailsTitle"),
    detailsTable: document.getElementById("detailsTable"),
  };

  let selectedScenario = "optimal";
  let activeView = "scenario";
  let selectedSalesScenario = "none";
  let payrollMode = "model";
  let cumulativeMode = "total";
  const manualPayrollState = {};
  const customConfig = {
    baseScenario: "optimal",
    sections: {},
    fixed: { rent: true, utilities: true, other: true },
    multipliers: {
      materials: 1,
      production_payroll: 1,
      design_payroll: 1,
      admin_payroll: 1,
      fixed_overhead: 1,
    },
  };
  const saleScenarioOrder = data.saleScenarioOrder || ["none", "presentation", "manual"];
  const saleScenarioCatalog = data.saleScenarios || {
    none: {
      title: "Без продаж",
      short: "Без продаж",
      mode: "none",
      note: "Поступления от продаж не учитываются.",
      prices: data.salePriceDefaults || {},
    },
    presentation: {
      title: "План презентации",
      short: "План продаж",
      mode: "completion",
      note: "Продажа по готовности катеров.",
      prices: data.salePriceDefaults || {},
    },
    manual: {
      title: "Ручной сценарий",
      short: "Ручной",
      mode: "manual",
      note: "Суммы и месяцы поступлений задаются вручную.",
      prices: data.salePriceDefaults || {},
    },
  };
  const manualSalePrices = { ...(saleScenarioCatalog.manual?.prices || data.salePriceDefaults || {}) };
  const manualSaleMonths = {};

  function scenarioOrder() {
    return [...data.scenarioOrder, "custom"];
  }

  const timelineNotes = [
    ["1", "Проверка и согласование технических решений. Принять решения по Катеру 3 и 4."],
    ["2", "Принять решение по дальнейшему развитию проекта 5."],
    ["3", "Подведение итогов по проекту, создание дальнейшей стратегии по проекту."],
  ];

  function formatMoney(value) {
    return Math.round(value).toLocaleString("ru-RU").replace(/\u00a0/g, " ");
  }

  function formatMoneyRub(value) {
    return `${formatMoney(value)} ₽`;
  }

  function formatCell(value) {
    return value ? formatMoney(value) : "";
  }

  function formatNegativeCell(value) {
    return value ? `- ${formatMoney(value)}` : "";
  }

  function parseBudget(value) {
    const digits = String(value).replace(/[^\d]/g, "");
    return digits ? Number(digits) : data.defaultBudget;
  }

  function parseMoneyInput(value) {
    const digits = String(value).replace(/[^\d]/g, "");
    return digits ? Number(digits) : 0;
  }

  function saleScenarioConfig(key = selectedSalesScenario) {
    return saleScenarioCatalog[key] || saleScenarioCatalog.none || {
      title: "Без продаж",
      short: "Без продаж",
      mode: "none",
      note: "",
      prices: {},
    };
  }

  function saleScenarioShort(key = selectedSalesScenario) {
    const config = saleScenarioConfig(key);
    return config.short || config.title || key;
  }

  function saleScenarioTitle(key = selectedSalesScenario) {
    const config = saleScenarioConfig(key);
    return config.title || config.short || key;
  }

  function saleScenarioNote(key = selectedSalesScenario) {
    return saleScenarioConfig(key).note || "";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function sectionClass(key) {
    return key.replaceAll("_", "-");
  }

  function sectionBaseSchedule(rawScenario, section) {
    const months = sumLines(rawScenario.lines.filter((line) => line.section === section));
    const active = months.map((value, index) => (value > 0 ? index : -1)).filter((index) => index >= 0);
    if (!active.length) {
      return { enabled: section === "project_life", start: 0, duration: 0 };
    }
    return {
      enabled: true,
      start: active[0],
      duration: active[active.length - 1] - active[0] + 1,
    };
  }

  function initializeCustomConfig(baseKey = customConfig.baseScenario, { force = false } = {}) {
    if (!force && customConfig.initializedFor === baseKey) {
      return;
    }
    const rawScenario = data.scenarios[baseKey];
    customConfig.baseScenario = baseKey;
    customConfig.sections = Object.fromEntries(
      sectionOrder.map((section) => [section, sectionBaseSchedule(rawScenario, section)]),
    );
    customConfig.fixed = { rent: true, utilities: true, other: true };
    customConfig.multipliers = {
      materials: 1,
      production_payroll: 1,
      design_payroll: 1,
      admin_payroll: 1,
      fixed_overhead: 1,
    };
    customConfig.initializedFor = baseKey;
    delete manualPayrollState.custom;
  }

  function multiplierForLine(line) {
    return customConfig.multipliers[expenseGroupForLine(line)] ?? 1;
  }

  function transformCustomMonths(line) {
    const section = customConfig.sections[line.section];
    if (!section?.enabled) {
      return data.months.map(() => 0);
    }
    const values = line.months.filter((value) => value > 0);
    if (!values.length || !section.duration) {
      return data.months.map(() => 0);
    }
    const months = data.months.map(() => 0);
    for (let offset = 0; offset < section.duration; offset += 1) {
      const targetIndex = section.start + offset;
      if (targetIndex >= data.months.length) {
        break;
      }
      const sourceValue = values[Math.min(offset, values.length - 1)];
      months[targetIndex] = Math.round(sourceValue * multiplierForLine(line));
    }
    return months;
  }

  function cloneLineWithMonths(line, months) {
    return {
      ...line,
      months,
      total: months.reduce((sum, value) => sum + value, 0),
    };
  }

  function scenarioTitle(key) {
    return scenarioCopy[key]?.title || data.scenarios[key].title;
  }

  function scenarioShort(key) {
    return scenarioCopy[key]?.short || data.scenarios[key].title;
  }

  function scenarioNote(key) {
    return scenarioCopy[key]?.note || data.scenarios[key].note;
  }

  function scenarioNoteForSettings(scenario) {
    if (scenario.key === "custom") {
      return `${scenarioNote("custom")} Шаблон: ${scenarioShort(scenario.sourceScenario || customConfig.baseScenario)}.`;
    }
    const hasBoat5InBase = data.scenarios[scenario.key].lines.some((line) => line.section === "boat_5");
    if (!scenario.settings.includeBoat5 && hasBoat5InBase) {
      return {
        optimal: "Катера 3/4 ждут снятия стопера по катеру 2; катер 5 и связанные затраты исключены переключателем.",
        minimal_plus_5: "Минимальный план 2-4 пересчитан без катера 5; жизнь проекта остается по настройке сценария.",
        parallel_2_4_plus_5: "Катера 3 и 4 строятся с августа по октябрь отдельными бригадами; катер 5 исключен переключателем.",
        completion_fund_only: "Фонд прямой достройки пересчитан без катера 5 и связанных затрат.",
      }[scenario.key] || scenarioNote(scenario.key);
    }
    return scenarioNote(scenario.key);
  }

  function currentSettings() {
    return {
      includeRentUtilities: dom.includeRentUtilities.checked,
      includeBoat5: dom.includeBoat5.checked,
    };
  }

  function settingsNote(settings) {
    const disabled = [];
    if (!settings.includeRentUtilities) {
      disabled.push("аренда и коммунальные услуги");
    }
    if (!settings.includeBoat5) {
      disabled.push("катер 5");
    }
    if (payrollMode === "manual" && selectedScenario === "custom") {
      disabled.push("ФОТ управляется конфигуратором по сотрудникам");
    }
    return disabled.length ? `Настройки расчета: ${disabled.join(", ")}.` : "";
  }

  function shouldKeepLine(line, settings) {
    if (!settings.includeRentUtilities && line.section === "project_life" && ["rent", "utilities"].includes(line.item)) {
      return false;
    }
    if (!settings.includeBoat5 && line.section === "boat_5") {
      return false;
    }
    return true;
  }

  function employeeKey(employee) {
    return `${employee.group}|${employee.name}|${employee.role}|${employee.salary}`;
  }

  function allPayrollEmployees() {
    const employees = new Map();
    Object.values(payrollRosters).flat().forEach((employee) => {
      employees.set(employeeKey(employee), { ...employee, key: employeeKey(employee) });
    });
    return Array.from(employees.values()).sort((a, b) =>
      employeeOrder(a) - employeeOrder(b),
    );
  }

  function basePayrollLines(rawScenario, settings) {
    return rawScenario.lines.filter((line) => shouldKeepLine(line, settings) && isPayrollLine(line));
  }

  function basePayrollEmployeeRows(rawScenario, settings) {
    return employeePayrollRows(basePayrollLines(rawScenario, settings));
  }

  function initializeManualPayrollState(rawScenario, settings, { force = false } = {}) {
    const stateKey = selectedScenario === "custom" ? "custom" : rawScenario.key;
    if (!force && manualPayrollState[stateKey]) {
      return manualPayrollState[stateKey];
    }

    const baseRows = new Map(basePayrollEmployeeRows(rawScenario, settings).map((row) => [row.key, row]));
    const state = {};
    allPayrollEmployees().forEach((employee) => {
      const row = baseRows.get(`${employee.group}|${employee.name}|${employee.role}`);
      const included = Boolean(row?.total);
      state[employee.key] = selectedScenario === "custom"
        ? data.months.map(() => included)
        : data.months.map((_, index) => Boolean(row?.months[index]));
    });
    manualPayrollState[stateKey] = state;
    return state;
  }

  function manualPayrollLines(rawScenario, settings) {
    const state = initializeManualPayrollState(rawScenario, settings);
    return allPayrollEmployees()
      .map((employee) => {
        const months = data.months.map((_, index) => state[employee.key]?.[index] ? employee.salary : 0);
        const total = months.reduce((sum, value) => sum + value, 0);
        return total
          ? {
              section: "project_life",
              item: `employee_payroll:${employee.key}`,
              itemLabel: `ФОТ: ${employee.name}`,
              months,
              total,
              boat: null,
              directBoatCost: false,
              employee,
              payrollGroup: employee.group,
            }
          : null;
      })
      .filter(Boolean);
  }

  function applyPayrollOverride(rawScenario, settings, lines) {
    if (payrollMode !== "manual" || selectedScenario !== "custom") {
      return lines;
    }
    const nonPayrollLines = lines.filter((line) => !isPayrollLine(line));
    return [...nonPayrollLines, ...manualPayrollLines(rawScenario, settings)];
  }

  function finalizeScenario(rawScenario, settings, lines, overrides = {}) {
    const monthlyTotal = sumLines(lines);
    const cumulativeFuture = cumulative(monthlyTotal);
    const cumulativePlan = cumulativeFuture.map((value) => data.investedToMay + value);
    const futureTotal = monthlyTotal.reduce((sum, value) => sum + value, 0);
    const directBoats = lines
      .filter((line) => line.directBoatCost)
      .reduce((sum, line) => sum + line.total, 0);
    const projectLife = futureTotal - directBoats;
    const boatKeys = Object.keys(rawScenario.futureByBoat || {});
    const futureByBoat = Object.fromEntries(boatKeys.map((boat) => [boat, 0]));
    lines.forEach((line) => {
      if (line.boat) {
        futureByBoat[line.boat] = (futureByBoat[line.boat] || 0) + line.total;
      }
    });
    const allInByBoat = Object.fromEntries(
      boatKeys.map((boat) => {
        const actual = (rawScenario.allInByBoat?.[boat] || 0) - (rawScenario.futureByBoat?.[boat] || 0);
        return [boat, actual + (futureByBoat[boat] || 0)];
      }),
    );
    const rawSalePlan = overrides.salePlan || rawScenario.salePlan || [];
    const salePlan = rawSalePlan.filter((sale) => settings.includeBoat5 || sale.boat !== "boat_5");
    const gantt = sectionOrder.map((section) => {
      const sectionLines = lines.filter((line) => line.section === section);
      const months = sumLines(sectionLines);
      return {
        key: section,
        label: data.sectionLabels[section],
        months,
        total: months.reduce((sum, value) => sum + value, 0),
        active: months.map((value) => value > 0),
      };
    });

    return {
      ...rawScenario,
      ...overrides,
      lines,
      monthlyTotal,
      cumulativeFuture,
      cumulativePlan,
      cumulativeBudgetGap: cumulativePlan.map((value) => data.defaultBudget - value),
      futureTotal,
      planTotal: data.investedToMay + futureTotal,
      budgetGap: data.defaultBudget - data.investedToMay - futureTotal,
      directBoats,
      projectLife,
      futureByBoat,
      allInByBoat,
      salePlan,
      gantt,
      settings,
    };
  }

  function adjustedScenario(rawScenario, settings) {
    const lines = rawScenario.lines.filter((line) => shouldKeepLine(line, settings));
    return finalizeScenario(rawScenario, settings, lines);
  }

  function customScenario(settings) {
    initializeCustomConfig(customConfig.baseScenario);
    const rawScenario = data.scenarios[customConfig.baseScenario];
    let lines = rawScenario.lines
      .filter((line) => shouldKeepLine(line, settings))
      .filter((line) => {
        if (!customConfig.sections[line.section]?.enabled) {
          return false;
        }
        if (line.section === "project_life" && ["rent", "utilities", "other"].includes(line.item)) {
          return Boolean(customConfig.fixed[line.item]);
        }
        return true;
      })
      .map((line) => cloneLineWithMonths(line, transformCustomMonths(line)))
      .filter((line) => line.total > 0);

    lines = applyPayrollOverride(rawScenario, settings, lines);

    return finalizeScenario(rawScenario, settings, lines, {
      key: "custom",
      title: "Custom scenario",
      note: "Custom scenario built in the configurator.",
      sourceScenario: rawScenario.key,
      custom: true,
      salePlan: (rawScenario.salePlan || []).filter((sale) => customConfig.sections[sale.boat]?.enabled),
    });
  }

  function adjustedScenarios(settings) {
    const scenarios = Object.fromEntries(
      data.scenarioOrder.map((key) => [key, adjustedScenario(data.scenarios[key], settings)]),
    );
    scenarios.custom = customScenario(settings);
    return scenarios;
  }

  function gapForScenario(scenario, budget) {
    return budget - scenario.planTotal;
  }

  function saleMonthly(scenario) {
    const months = data.months.map(() => 0);
    saleEvents(scenario).forEach((sale) => {
      months[sale.monthIndex] += sale.amount || 0;
    });
    return months;
  }

  function saleAmountForBoat(boat) {
    const config = saleScenarioConfig();
    if (config.mode === "none") {
      return 0;
    }
    if (config.mode === "manual") {
      return manualSalePrices[boat] || 0;
    }
    return config.prices?.[boat] || 0;
  }

  function saleMonthIndexForBoat(sale) {
    const config = saleScenarioConfig();
    if (config.mode === "manual" && manualSaleMonths[sale.boat] !== undefined) {
      return Number(manualSaleMonths[sale.boat]);
    }
    return sale.monthIndex;
  }

  function saleEvents(scenario, { includeZero = false } = {}) {
    const config = saleScenarioConfig();
    return (scenario.salePlan || [])
      .map((sale) => {
        const monthIndex = saleMonthIndexForBoat(sale);
        const amount = saleAmountForBoat(sale.boat);
        return {
          ...sale,
          amount,
          monthIndex,
          month: data.months[monthIndex],
          monthLabel: data.monthLabels[monthIndex],
          date: config.mode === "manual" ? "ручной месяц" : sale.date,
        };
      })
      .filter((sale) => includeZero || sale.amount > 0);
  }

  function cumulative(values) {
    let running = 0;
    return values.map((value) => {
      running += value;
      return running;
    });
  }

  function salesAnalysis(scenario, budget) {
    const monthlySales = saleMonthly(scenario);
    const cumulativeSales = cumulative(monthlySales);
    const totalSales = monthlySales.reduce((sum, value) => sum + value, 0);
    const cumulativePlanAfterSales = scenario.cumulativeFuture.map((future, index) =>
      data.investedToMay + future - cumulativeSales[index],
    );
    let peakIndex = 0;
    let peakValue = cumulativePlanAfterSales[0] || data.investedToMay;
    cumulativePlanAfterSales.forEach((value, index) => {
      if (value > peakValue) {
        peakIndex = index;
        peakValue = value;
      }
    });
    const finalNetPlan = cumulativePlanAfterSales[cumulativePlanAfterSales.length - 1] || data.investedToMay;
    return {
      monthlySales,
      cumulativeSales,
      cumulativePlanAfterSales,
      totalSales,
      finalNetPlan,
      finalGap: budget - finalNetPlan,
      peak: { month: data.monthLabels[peakIndex], value: peakValue },
      peakGap: budget - peakValue,
    };
  }

  function peakMonth(scenario) {
    let monthIndex = 0;
    let value = scenario.monthlyTotal[0] || 0;
    scenario.monthlyTotal.forEach((current, index) => {
      if (current > value) {
        monthIndex = index;
        value = current;
      }
    });
    return { month: data.monthLabels[monthIndex], value };
  }

  function firstOverBudgetMonth(scenario, budget) {
    const index = scenario.cumulativeFuture.findIndex((future) => data.investedToMay + future > budget);
    return index >= 0 ? data.monthLabels[index] : "Не пробивает";
  }

  function ganttRow(scenario, key) {
    return scenario.gantt.find((row) => row.key === key) || {
      key,
      label: data.sectionLabels[key],
      months: data.months.map(() => 0),
      total: 0,
      active: data.months.map(() => false),
    };
  }

  function mainProjectMonths(scenario) {
    const rows = ["project_life", "boat_2", "boat_3", "boat_4"].map((key) => ganttRow(scenario, key));
    return data.months.map((_, index) => rows.reduce((sum, row) => sum + row.months[index], 0));
  }

  function boatShortLabel(section) {
    return {
      boat_2: "К2",
      boat_3: "К3",
      boat_4: "К4",
      boat_5: "К5",
    }[section] || "";
  }

  function compactBoatList(boats) {
    const labels = Array.from(boats);
    if (labels.length > 1 && labels.every((label) => /^К\d+$/.test(label))) {
      return `К${labels.map((label) => label.slice(1)).join("/")}`;
    }
    return labels.join("/");
  }

  function sectionMonths(scenario) {
    const result = {};
    sectionOrder.forEach((section) => {
      result[section] = data.months.map(() => 0);
    });
    scenario.lines.forEach((line) => {
      if (!result[line.section]) {
        result[line.section] = data.months.map(() => 0);
      }
      line.months.forEach((value, index) => {
        result[line.section][index] += value;
      });
    });
    return result;
  }

  function expenseGroupForLine(line) {
    if (line.item.startsWith("materials")) {
      return "materials";
    }
    if (line.item.startsWith("brigade")) {
      return "production_payroll";
    }
    if (line.item.startsWith("design")) {
      return "design_payroll";
    }
    if (line.item === "admin_payroll" || line.item === "viktor_payroll" || line.item === "general_production_payroll") {
      return "admin_payroll";
    }
    if (line.item === "rent" || line.item === "utilities" || line.item === "other") {
      return "fixed_overhead";
    }
    return "fixed_overhead";
  }

  function expenseGroupMonths(scenario) {
    const result = {};
    expenseGroupOrder.forEach((group) => {
      result[group] = data.months.map(() => 0);
    });
    scenario.lines.forEach((line) => {
      const group = expenseGroupForLine(line);
      line.months.forEach((value, index) => {
        result[group][index] += value;
      });
    });
    return result;
  }

  function activeBrigadesByMonth(scenario) {
    const monthly = data.months.map(() => new Map());
    scenario.lines.forEach((line) => {
      if (line.employee?.group?.startsWith("Бригада")) {
        line.months.forEach((value, monthIndex) => {
          if (!value) {
            return;
          }
          const brigade = line.employee.group;
          if (!monthly[monthIndex].has(brigade)) {
            monthly[monthIndex].set(brigade, new Set());
          }
          monthly[monthIndex].get(brigade).add("Штат");
        });
        return;
      }

      if (!line.item.startsWith("brigade")) {
        return;
      }
      const boatLabel = boatShortLabel(line.section);
      line.months.forEach((value, monthIndex) => {
        if (!value || !boatLabel) {
          return;
        }
        let brigade = "";
        if (line.item.startsWith("brigade_1")) {
          brigade = "Бригада 1";
        } else if (line.item === "brigade_2_then_3") {
          brigade = value >= 330_000 ? "Бригада 2" : "Бригада 3";
        } else if (line.item.startsWith("brigade_2")) {
          brigade = "Бригада 2";
        } else if (line.item.startsWith("brigade_3")) {
          brigade = "Бригада 3";
        } else if (line.item.startsWith("brigade_4")) {
          brigade = "Бригада 4";
        }
        if (brigade) {
          if (!monthly[monthIndex].has(brigade)) {
            monthly[monthIndex].set(brigade, new Set());
          }
          monthly[monthIndex].get(brigade).add(boatLabel);
        }
      });
    });
    const rows = ["Бригада 1", "Бригада 2", "Бригада 3", "Бригада 4"];
    return { rows, monthly };
  }

  function timelinePlan(key) {
    const plans = {
      optimal: {
        boat2: [
          { start: 0, end: 2, label: "Проектирование и сборка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и решение", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 3, label: "Доведено до стопера / ожидание Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Достройка катера 3", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 3, label: "Доведено до стопера / ожидание Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Достройка катера 4", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat5: [
          { start: 0, end: 3, label: "Проектирование + изготовление каркаса лодки", tone: "gray" },
          { start: 3, end: 6, label: "Визуализация и параллельное производство", tone: "gray" },
          { start: 6, end: 8, label: "Финальные работы", tone: "gray", sale: true },
        ],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "15.09", sideDate: "30.09", offset: "top" },
          { row: "boat_5", month: 3, number: "2", offset: "top" },
          { row: "boat_3", month: 5, number: "3", date: "15.12", offset: "top" },
        ],
      },
      minimal: {
        boat2: [
          { start: 0, end: 2, label: "Проектирование и сборка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и решение", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 3, label: "Ожидание готовности Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Сборка и материалы", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 3, label: "Ожидание готовности Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Сборка и материалы", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat5: [{ start: 0, end: 8, label: "Катер 5 не запускается", tone: "idle", dashed: true }],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "30.09", offset: "top" },
          { row: "boat_4", month: 5, number: "3", date: "30.12", offset: "top" },
        ],
      },
      minimal_plus_5: {
        boat2: [
          { start: 0, end: 2, label: "Проектирование и сборка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и решение", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 3, label: "Ожидание готовности Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Сборка и материалы", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 3, label: "Ожидание готовности Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Сборка и материалы", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat5: [
          { start: 0, end: 3, label: "Проектирование + изготовление каркаса лодки", tone: "gray" },
          { start: 3, end: 6, label: "Параллельная достройка катера 5", tone: "gray" },
          { start: 6, end: 8, label: "Финальные работы", tone: "gray", sale: true },
        ],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "30.09", offset: "top" },
          { row: "boat_5", month: 3, number: "2", offset: "top" },
          { row: "boat_4", month: 5, number: "3", date: "30.12", offset: "top" },
        ],
      },
      parallel_2_4: {
        boat2: [
          { start: 0, end: 2, label: "Проектирование и сборка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и решение", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 1, label: "Подготовка запуска", tone: "wait", dashed: true },
          { start: 1, end: 4, label: "Достройка одной бригадой", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 1, label: "Подготовка запуска", tone: "wait", dashed: true },
          { start: 1, end: 4, label: "Достройка одной бригадой", tone: "blue", sale: true },
        ],
        boat5: [{ start: 0, end: 8, label: "Катер 5 не запускается", tone: "idle", dashed: true }],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "30.09", offset: "top" },
          { row: "boat_4", month: 3, number: "3", date: "30.10", offset: "top" },
        ],
      },
      parallel_2_4_plus_5: {
        boat2: [
          { start: 0, end: 2, label: "Проектирование и сборка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и решение", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 1, label: "Подготовка запуска", tone: "wait", dashed: true },
          { start: 1, end: 4, label: "Достройка одной бригадой", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 1, label: "Подготовка запуска", tone: "wait", dashed: true },
          { start: 1, end: 4, label: "Достройка одной бригадой", tone: "blue", sale: true },
        ],
        boat5: [
          { start: 0, end: 3, label: "Проектирование + изготовление каркаса лодки", tone: "gray" },
          { start: 3, end: 6, label: "Производство отдельной бригадой", tone: "gray" },
          { start: 6, end: 8, label: "Финальные работы", tone: "gray", sale: true },
        ],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "30.09", offset: "top" },
          { row: "boat_5", month: 3, number: "2", offset: "top" },
          { row: "boat_3", month: 3, number: "3", date: "15.10", offset: "top" },
        ],
      },
      completion_fund_only: {
        boat2: [
          { start: 0, end: 2, label: "Прямая достройка", tone: "green" },
          { start: 2, end: 3, label: "Обкатка и сдача", tone: "green", sale: true },
        ],
        boat3: [
          { start: 0, end: 3, label: "Ожидание Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Прямая достройка", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat4: [
          { start: 0, end: 3, label: "Ожидание Катера №2", tone: "wait", dashed: true },
          { start: 3, end: 5, label: "Прямая достройка", tone: "blue" },
          { start: 5, end: 6, label: "Закрытие и сдача", tone: "blue", sale: true },
        ],
        boat5: [
          { start: 0, end: 3, label: "Проектирование + каркас", tone: "gray" },
          { start: 3, end: 6, label: "Прямая достройка", tone: "gray" },
          { start: 6, end: 8, label: "Финальные работы", tone: "gray", sale: true },
        ],
        markers: [
          { row: "boat_2", month: 2, number: "1", date: "30.09", offset: "top" },
          { row: "boat_5", month: 3, number: "2", offset: "top" },
          { row: "boat_4", month: 5, number: "3", date: "30.12", offset: "top" },
        ],
      },
    };

    return plans[key] || plans.optimal;
  }

  function renderTabs(budget, scenarios) {
    dom.scenarioTabs.innerHTML = scenarioOrder()
      .map((key) => {
        const scenario = scenarios[key];
        const gap = salesAnalysis(scenario, budget).peakGap;
        const state = gap >= 0 ? "Запас" : "Дефицит";
        const active = key === selectedScenario ? " active" : "";
        return `
          <button class="scenario-tab${active}" type="button" data-scenario="${escapeHtml(key)}">
            <strong>${escapeHtml(scenarioShort(key))}</strong>
            <span>${state}: ${formatMoneyRub(Math.abs(gap))}</span>
          </button>
        `;
      })
      .join("");

    dom.scenarioTabs.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        selectedScenario = button.dataset.scenario;
        render();
      });
    });
  }

  function renderViewTabs() {
    dom.appShell.dataset.activeView = activeView;
    dom.viewTabs.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.appView === activeView);
    });
  }

  function renderHeader(scenario, budget) {
    const gap = salesAnalysis(scenario, budget).peakGap;
    const note = settingsNote(scenario.settings);
    dom.scenarioTitle.textContent = scenarioTitle(scenario.key);
    dom.scenarioNote.textContent = [scenarioNoteForSettings(scenario), note].filter(Boolean).join(" ");
    dom.budgetStatus.classList.toggle("deficit", gap < 0);
    dom.budgetStatus.innerHTML = `
      <span>${gap >= 0 ? "Запас по пику" : "Дефицит по пику"}</span>
      <strong>${formatMoneyRub(Math.abs(gap))}</strong>
    `;
  }

  function renderKpis(scenario, budget) {
    const analysis = salesAnalysis(scenario, budget);
    const gap = analysis.peakGap;
    const kpis = [
      ["Уже вложено", data.investedToMay],
      ["Будущие вложения", scenario.futureTotal],
      ["Итого план до продаж", scenario.planTotal],
      ["Поступления от продаж", analysis.totalSales],
      [`Пик после продаж / ${analysis.peak.month}`, analysis.peak.value],
      [gap >= 0 ? "Запас по пику" : "Дефицит по пику", Math.abs(gap), gap >= 0 ? "good" : "bad"],
    ];

    dom.kpiGrid.innerHTML = kpis
      .map(([label, value, modifier]) => `
        <article class="kpi-card ${modifier || ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${formatMoneyRub(value)}</strong>
        </article>
      `)
      .join("");
  }

  function renderOverallSummary(budget, scenarios) {
    const scenarioRows = scenarioOrder().map((key) => {
      const scenario = scenarios[key];
      const gap = gapForScenario(scenario, budget);
      const sales = salesAnalysis(scenario, budget);
      const peak = peakMonth(scenario);
      return {
        key,
        scenario,
        gap,
        sales,
        peak,
        overBudgetMonth: firstOverBudgetMonth(scenario, budget),
      };
    });

    const bestByBudget = [...scenarioRows].sort((a, b) => b.sales.peakGap - a.sales.peakGap)[0];
    const cheapestFuture = [...scenarioRows].sort((a, b) => a.scenario.futureTotal - b.scenario.futureTotal)[0];
    const lowestPeak = [...scenarioRows].sort((a, b) => a.sales.peak.value - b.sales.peak.value)[0];

    const budgetCardLabel = bestByBudget.sales.peakGap >= 0 ? "Лучший запас по пику" : "Минимальный дефицит по пику";
    const budgetCardValue = bestByBudget.sales.peakGap >= 0
      ? formatMoneyRub(bestByBudget.sales.peakGap)
      : `-${formatMoneyRub(Math.abs(bestByBudget.sales.peakGap))}`;
    const summaryCards = [
      [budgetCardLabel, scenarioShort(bestByBudget.key), budgetCardValue, bestByBudget.sales.peakGap < 0 ? "bad" : "good"],
      ["Минимум будущих вложений", scenarioShort(cheapestFuture.key), cheapestFuture.scenario.futureTotal],
      ["Самый низкий пик после продаж", `${scenarioShort(lowestPeak.key)} / ${lowestPeak.sales.peak.month}`, lowestPeak.sales.peak.value],
    ];

    dom.overallSummary.innerHTML = summaryCards
      .map(([label, title, value, modifier]) => `
        <article class="summary-card ${modifier || ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(title)}</strong>
          <em>${typeof value === "number" ? formatMoneyRub(value) : escapeHtml(value)}</em>
        </article>
      `)
      .join("");

    const headers = [
      "Сценарий",
      "Будущие",
      "Итого план",
      "Продажи",
      "Пик после продаж",
      "Gap пика",
      "Прямые катера",
      "Жизнь проекта",
    ];
    const rows = scenarioRows
      .map(({ key, scenario, sales }) => {
        const selectedClass = key === selectedScenario ? " selected-row" : "";
        return `
          <tr class="${selectedClass}" data-scenario="${escapeHtml(key)}">
            <td>${escapeHtml(scenarioShort(key))}</td>
            <td>${formatMoney(scenario.futureTotal)}</td>
            <td><strong>${formatMoney(scenario.planTotal)}</strong></td>
            <td>${formatMoney(sales.totalSales)}</td>
            <td>${escapeHtml(sales.peak.month)} / ${formatMoney(sales.peak.value)}</td>
            <td class="${sales.peakGap >= 0 ? "positive" : "negative"}">${formatMoney(sales.peakGap)}</td>
            <td>${formatMoney(scenario.directBoats)}</td>
            <td>${formatMoney(scenario.projectLife)}</td>
          </tr>
        `;
      })
      .join("");

    dom.overallTable.innerHTML = `
      <thead>
        <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>${rows}</tbody>
    `;

    dom.overallTable.querySelectorAll("tbody tr").forEach((row) => {
      row.addEventListener("click", () => {
        selectedScenario = row.dataset.scenario;
        render();
      });
    });
  }

  function renderSales(scenario, budget) {
    const analysis = salesAnalysis(scenario, budget);
    const saleConfig = saleScenarioConfig();
    const isManual = saleConfig.mode === "manual";
    const saleRows = saleEvents(scenario, { includeZero: true });
    const activeSalesByBoat = new Map(saleRows.map((sale) => [sale.boat, sale]));
    const boats = Object.keys(data.salePriceDefaults || {});

    dom.salesScenarioTabs.innerHTML = saleScenarioOrder
      .map((key) => {
        const active = key === selectedSalesScenario ? " active" : "";
        return `
          <button class="${active}" type="button" data-sale-scenario="${escapeHtml(key)}">
            ${escapeHtml(saleScenarioShort(key))}
          </button>
        `;
      })
      .join("");

    dom.salesScenarioTabs.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        selectedSalesScenario = button.dataset.saleScenario;
        render();
      });
    });

    dom.salesLayerNote.textContent = `${saleScenarioTitle()}: ${saleScenarioNote()}`;

    dom.saleAssumptions.innerHTML = boats
      .map((boat) => {
        const sale = activeSalesByBoat.get(boat);
        const isActive = Boolean(sale) && saleConfig.mode !== "none";
        const status = sale
          ? saleConfig.mode === "none"
            ? "не учитывается"
            : `${sale.monthLabel} / ${sale.date}`
          : "не продается в сценарии";
        const amount = sale ? sale.amount : saleAmountForBoat(boat);
        return `
          <label class="sale-input-row ${isActive ? "" : "inactive"}">
            <span>
              <strong>${escapeHtml(data.sectionLabels[boat] || boat)}</strong>
              <em>${escapeHtml(status)}</em>
            </span>
            <input
              data-sale-boat="${escapeHtml(boat)}"
              inputmode="numeric"
              autocomplete="off"
              value="${formatMoney(amount)}"
              ${isManual && sale ? "" : "disabled"}
            >
            <select data-sale-month="${escapeHtml(boat)}" ${isManual && sale ? "" : "disabled"}>
              ${data.monthLabels
                .map((month, index) => `
                  <option value="${index}" ${sale && sale.monthIndex === index ? "selected" : ""}>
                    ${escapeHtml(month)}
                  </option>
                `)
                .join("")}
            </select>
          </label>
        `;
      })
      .join("");

    dom.saleAssumptions.querySelectorAll("input").forEach((input) => {
      input.addEventListener("blur", () => {
        if (!isManual) {
          return;
        }
        const boat = input.dataset.saleBoat;
        manualSalePrices[boat] = parseMoneyInput(input.value);
        input.value = formatMoney(manualSalePrices[boat]);
        render();
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          input.blur();
        }
      });
    });

    dom.saleAssumptions.querySelectorAll("select").forEach((select) => {
      select.addEventListener("change", () => {
        if (!isManual) {
          return;
        }
        manualSaleMonths[select.dataset.saleMonth] = Number(select.value);
        render();
      });
    });

    const metricRows = [
      ["Поступления", analysis.totalSales],
      [`Пик / ${analysis.peak.month}`, analysis.peak.value],
      ["Финальная потребность", analysis.finalNetPlan],
      [analysis.peakGap >= 0 ? "Запас по пику" : "Дефицит по пику", Math.abs(analysis.peakGap), analysis.peakGap >= 0 ? "good" : "bad"],
    ];

    dom.salesMetrics.innerHTML = metricRows
      .map(([label, value, modifier]) => `
        <article class="sales-metric ${modifier || ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${formatMoneyRub(value)}</strong>
        </article>
      `)
      .join("");

    const headers = ["Катер", "Дата", "Месяц", "Сумма"];
    const rows = saleRows
      .map((sale) => `
        <tr>
          <td>${escapeHtml(sale.boatLabel)}</td>
          <td>${escapeHtml(sale.date)}</td>
          <td>${escapeHtml(sale.monthLabel)}</td>
          <td><strong>${formatMoney(sale.amount || 0)}</strong></td>
        </tr>
      `)
      .join("");

    dom.salesTable.innerHTML = `
      <thead>
        <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>${rows}</tbody>
    `;
  }

  function renderPresentationTimeline(scenario) {
    const plan = timelinePlan(scenario.key === "custom" ? scenario.sourceScenario || customConfig.baseScenario : scenario.key);
    const boat5Enabled = scenario.lines.some((line) => line.section === "boat_5");
    const boat5Segments = boat5Enabled
      ? plan.boat5
      : [{ start: 0, end: 8, label: "Катер 5 выключен", tone: "idle", dashed: true }];
    const rows = [
      {
        key: "project_life",
        label: "Жизнь проекта",
        months: ganttRow(scenario, "project_life").months,
        segments: [],
        rowClass: "project-life",
        showCosts: true,
      },
      {
        key: "boat_2",
        label: "Катер 2 - 12,5 м",
        months: ganttRow(scenario, "boat_2").months,
        segments: plan.boat2,
        rowClass: "boat-2",
        showCosts: false,
      },
      {
        key: "boat_3",
        label: "Катер 3 - 12,5 м",
        months: ganttRow(scenario, "boat_3").months,
        segments: plan.boat3,
        rowClass: "boat-3",
        showCosts: false,
      },
      {
        key: "boat_4",
        label: "Катер 4 - 12,5 м",
        months: ganttRow(scenario, "boat_4").months,
        segments: plan.boat4,
        rowClass: "boat-4",
        showCosts: false,
      },
      {
        key: "main_total",
        label: "Итого основной проект 2-4",
        months: mainProjectMonths(scenario),
        segments: [],
        rowClass: "main-total",
        showCosts: true,
      },
    ];
    const boat5Row = {
      key: "boat_5",
      label: "Катер 5 - 8 м",
      months: ganttRow(scenario, "boat_5").months,
      segments: boat5Segments,
      rowClass: "boat-5",
      showCosts: true,
    };

    function monthCells(values) {
      return values
        .map((value, index) => `<div class="timeline-cost" style="grid-column: ${index + 1};">${formatNegativeCell(value)}</div>`)
        .join("");
    }

    function segmentCells(row) {
      return row.segments
        .map((segment) => {
          const classes = ["timeline-bar", `tone-${segment.tone}`];
          if (segment.dashed) {
            classes.push("dashed");
          }
          return `
            <div class="${classes.join(" ")}" style="grid-column: ${segment.start + 1} / ${segment.end + 1};">
              <span>${escapeHtml(segment.label)}</span>
            </div>
          `;
        })
        .join("");
    }

    function saleEventCells(rowKey) {
      return saleEvents(scenario)
        .filter((sale) => sale.boat === rowKey)
        .map((sale) => {
          return `
            <div class="timeline-sale-event" style="grid-column: ${sale.monthIndex + 1};">
              <i class="sale-badge" aria-label="Продажа">₽</i>
              <span class="timeline-sale-amount">${formatMoney(sale.amount)}</span>
            </div>
          `;
        })
        .join("");
    }

    function markerCells(rowKey) {
      if (rowKey === "boat_5" && !boat5Enabled) {
        return "";
      }
      return plan.markers
        .filter((marker) => marker.row === rowKey)
        .map((marker) => `
          <div class="timeline-marker marker-${marker.offset || "top"}" style="grid-column: ${marker.month + 1};">
            ${marker.date ? `<span class="marker-date">${escapeHtml(marker.date)}</span>` : ""}
            <b>${escapeHtml(marker.number)}</b>
            ${marker.sideDate ? `<span class="marker-side-date">${escapeHtml(marker.sideDate)}</span>` : ""}
          </div>
        `)
        .join("");
    }

    function renderRow(row) {
      return `
        <div class="timeline-row ${row.rowClass}">
          <div class="timeline-label">${escapeHtml(row.label)}</div>
          <div class="timeline-months">
            ${row.showCosts ? monthCells(row.months) : ""}
            ${segmentCells(row)}
            ${saleEventCells(row.key)}
            ${markerCells(row.key)}
          </div>
        </div>
      `;
    }

    dom.presentationTimeline.innerHTML = `
      <div class="timeline-main-frame">
        <div class="timeline-header">
          <div class="timeline-label"></div>
          <div class="timeline-months timeline-month-head">
            ${data.monthLabels.map((month, index) => `
              <div class="timeline-month-name" style="grid-column: ${index + 1};">
                ${index === 6 ? '<span class="timeline-year">2027</span>' : ""}
                ${escapeHtml(month)}
              </div>
            `).join("")}
          </div>
        </div>
        ${rows.map(renderRow).join("")}
      </div>
      <div class="timeline-row timeline-boat5 ${boat5Row.rowClass}">
        <div class="timeline-label">${escapeHtml(boat5Row.label)}</div>
        <div class="timeline-months">
          ${monthCells(boat5Row.months)}
          ${segmentCells(boat5Row)}
          ${saleEventCells(boat5Row.key)}
          ${markerCells(boat5Row.key)}
          <div class="timeline-finish-date" style="grid-column: 8;">28.02</div>
        </div>
      </div>
    `;

    const timelineSaleEvents = saleEvents(scenario);
    dom.timelineNotes.innerHTML = [
      ...timelineNotes.map(([number, text]) => `
        <div class="timeline-note">
          <b>${escapeHtml(number)}</b>
          <span>${escapeHtml(text)}</span>
        </div>
      `),
      timelineSaleEvents.length
        ? '<div class="timeline-note sale-note"><i class="sale-badge">₽</i><span>Продажа по выбранному слою</span></div>'
        : "",
    ].join("");
  }

  function renderLegend() {
    const rows = [
      ["project_life", "Жизнь проекта"],
      ["boat_2", "Катер 2"],
      ["boat_3", "Катера 3/4"],
      ["boat_5", "Катер 5"],
    ];

    dom.ganttLegend.innerHTML = rows
      .map(([key, label]) => `
        <span class="legend-item">
          <span class="legend-swatch ${sectionClass(key)}"></span>
          ${escapeHtml(label)}
        </span>
      `)
      .join("");
  }

  function renderGantt(scenario) {
    const header = [
      '<div class="gantt-head">Блок</div>',
      ...data.monthLabels.map((month) => `<div class="gantt-head">${escapeHtml(month)}</div>`),
    ];

    const rows = scenario.gantt.map((row) => {
      const rowClass = sectionClass(row.key);
      const cells = row.months
        .map((value) => `
          <div class="gantt-cell ${rowClass} ${value ? "active" : ""}">
            ${formatCell(value)}
          </div>
        `)
        .join("");
      return `
        <div class="gantt-row-label ${rowClass}">
          <span>${escapeHtml(row.label)}</span>
          <span class="gantt-total">${formatMoney(row.total)}</span>
        </div>
        ${cells}
      `;
    });

    dom.ganttGrid.innerHTML = [...header, ...rows].join("");
  }

  function renderMonthlyChart(scenario) {
    const groups = expenseGroupMonths(scenario);
    const maxValue = Math.max(...scenario.monthlyTotal, 1);
    dom.monthlyChart.innerHTML = scenario.monthlyTotal
      .map((value, index) => {
        const height = value ? Math.max(4, Math.round((value / maxValue) * 100)) : 0;
        const tooltipRows = expenseGroupOrder
          .map((group) => [expenseGroups[group].label, groups[group][index]])
          .filter(([, groupValue]) => groupValue > 0)
          .map(([label, groupValue]) => `${label}: ${formatMoneyRub(groupValue)}`);
        const tooltip = [`${data.monthLabels[index]}: ${formatMoneyRub(value)}`, ...tooltipRows].join("\n");
        return `
          <div class="bar-item" data-tooltip="${escapeHtml(tooltip)}">
            <div class="bar-track${value ? "" : " empty"}">
              <div class="bar-stack" style="height: ${height}%">
                ${expenseGroupOrder
                  .map((group) => {
                    const groupValue = groups[group][index];
                    const segmentHeight = value ? Math.round((groupValue / value) * 100) : 0;
                    return groupValue
                      ? `<span class="bar-segment" title="${escapeHtml(expenseGroups[group].label)}: ${formatMoneyRub(groupValue)}" style="height:${segmentHeight}%; background:${expenseGroups[group].color}"></span>`
                      : "";
                  })
                  .join("")}
              </div>
            </div>
            <div class="bar-value">${formatMoney(value)}</div>
            <div class="bar-month">${escapeHtml(data.monthLabels[index])}</div>
          </div>
        `;
      })
      .join("");

    dom.monthlyGroupLegend.innerHTML = expenseGroupOrder
      .filter((group) => groups[group].some(Boolean))
      .map((group) => `
        <span><i style="background:${expenseGroups[group].color}"></i>${escapeHtml(expenseGroups[group].label)}</span>
      `)
      .join("");
  }

  function renderMix(scenario) {
    const total = Math.max(scenario.futureTotal, 1);
    const rows = [
      ["Прямые затраты на катера", scenario.directBoats],
      ["Жизнь проекта", scenario.projectLife],
    ];

    dom.mixBars.innerHTML = rows
      .map(([label, value]) => {
        const width = Math.round((value / total) * 100);
        return `
          <div class="mix-row">
            <div class="mix-label">
              <span>${escapeHtml(label)}</span>
              <strong>${formatMoneyRub(value)}</strong>
            </div>
            <div class="mix-track">
              <div class="mix-fill" style="width: ${width}%"></div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderMonthlyStacked(scenario) {
    const sections = sectionMonths(scenario);
    const maxMonth = Math.max(...scenario.monthlyTotal, 1);

    dom.monthlyStackedBars.innerHTML = data.monthLabels
      .map((month, monthIndex) => {
        const monthTotal = scenario.monthlyTotal[monthIndex] || 0;
        const height = monthTotal ? Math.max(6, Math.round((monthTotal / maxMonth) * 100)) : 0;
        const tooltipRows = sectionOrder
          .map((section) => [data.sectionLabels[section], sections[section]?.[monthIndex] || 0])
          .filter(([, value]) => value > 0)
          .map(([label, value]) => `${label}: ${formatMoneyRub(value)}`);
        const tooltip = [`${month}: ${formatMoneyRub(monthTotal)}`, ...tooltipRows].join("\n");
        return `
          <div class="stacked-item" data-tooltip="${escapeHtml(tooltip)}">
            <div class="stacked-track${monthTotal ? "" : " empty"}" style="height:${height}%">
              ${sectionOrder
                .map((section) => {
                  const value = sections[section]?.[monthIndex] || 0;
                  const segmentHeight = monthTotal ? Math.round((value / monthTotal) * 100) : 0;
                  return value
                    ? `<span class="stacked-segment" title="${escapeHtml(data.sectionLabels[section])}: ${formatMoneyRub(value)}" style="height:${segmentHeight}%; background:${sectionColors[section]}"></span>`
                    : "";
                })
                .join("")}
            </div>
            <strong>${formatMoney(monthTotal)}</strong>
            <span>${escapeHtml(month)}</span>
          </div>
        `;
      })
      .join("");

    dom.sectionLegend.innerHTML = sectionOrder
      .filter((section) => sections[section]?.some(Boolean))
      .map((section) => `
        <span><i style="background:${sectionColors[section]}"></i>${escapeHtml(data.sectionLabels[section])}</span>
      `)
      .join("");
  }

  function renderBrigadeHeatmap(scenario) {
    const summary = activeBrigadesByMonth(scenario);
    const header = `<div class="heatmap-corner">Бригада</div>${data.monthLabels
      .map((month) => `<div class="heatmap-month">${escapeHtml(month)}</div>`)
      .join("")}`;
    const rows = summary.rows
      .map((brigade) => {
        const cells = data.months
          .map((_, monthIndex) => {
            const boats = summary.monthly[monthIndex].get(brigade);
            const boatList = boats ? compactBoatList(boats) : "";
            const fullBoatList = boats
              ? Array.from(boats)
                  .map((boat) => boat.replace("К", "Катер "))
                  .join(", ")
              : "";
            const tooltip = boatList ? `${brigade} / ${data.monthLabels[monthIndex]}: ${fullBoatList}` : "";
            return `
              <div class="heatmap-cell ${boatList ? "active" : ""}" ${tooltip ? `title="${escapeHtml(tooltip)}"` : ""}>
                ${escapeHtml(boatList)}
              </div>
            `;
          })
          .join("");
        return `<div class="heatmap-label">${escapeHtml(brigade)}</div>${cells}`;
      })
      .join("");
    const totalRow = `<div class="heatmap-label total">Итого</div>${summary.monthly
      .map((month) => `<div class="heatmap-cell total">${month.size || ""}</div>`)
      .join("")}`;

    dom.brigadeHeatmap.innerHTML = `${header}${rows}${totalRow}`;
  }

  function isPayrollLine(line) {
    return line.itemLabel.startsWith("ФОТ");
  }

  function payrollGroupForLine(line) {
    if (line.payrollGroup) {
      return line.payrollGroup;
    }
    if (line.item === "admin_payroll") {
      return "Администрация";
    }
    if (line.item === "viktor_payroll") {
      return "Администрация";
    }
    if (line.item === "general_production_payroll") {
      return "Общее производство";
    }
    if (line.item.startsWith("design")) {
      return "Конструкторский отдел";
    }
    if (line.item.startsWith("brigade")) {
      return "Производственные бригады";
    }
    return "Прочий ФОТ";
  }

  const payrollRosters = {
    adminFull: [
      { group: "Администрация", name: "Николай Кизимов", role: "Исполнительный директор", salary: 200000 },
      { group: "Администрация", name: "Дмитрий Зубрицкий", role: "Технический директор", salary: 400000 },
      { group: "Администрация", name: "Виктор Широков", role: "Финансовый отдел", salary: 200000 },
      { group: "Администрация", name: "Артур Логинов", role: "Начальник 3D-отдела", salary: 60000 },
      { group: "Администрация", name: "Александр Свирин", role: "IT-администратор", salary: 120000 },
      { group: "Администрация", name: "Дмитрий Федоров", role: "Снабженец", salary: 80000 },
      { group: "Администрация", name: "Клининг", role: "Клининг", salary: 30000 },
    ],
    adminMinimal: [
      { group: "Администрация", name: "Николай Кизимов", role: "Исполнительный директор", salary: 200000 },
      { group: "Администрация", name: "Дмитрий Зубрицкий", role: "Технический директор", salary: 400000 },
      { group: "Администрация", name: "Виктор Широков", role: "Финансовый отдел", salary: 200000 },
      { group: "Администрация", name: "Александр Свирин", role: "IT-администратор", salary: 120000 },
      { group: "Администрация", name: "Дмитрий Федоров", role: "Снабженец", salary: 80000 },
    ],
    viktorOnly: [
      { group: "Администрация", name: "Виктор Широков", role: "Финансовый отдел", salary: 200000 },
    ],
    generalProduction: [
      { group: "Общее производство", name: "Данил Аратовский", role: "Цех композит", salary: 120000 },
      { group: "Общее производство", name: "Иван Панченко", role: "Оператор ЧПУ", salary: 100000 },
    ],
    brigade1: [
      { group: "Бригада 1", name: "Алексей Улюков", role: "Начальник производства / сварщик", salary: 140000 },
      { group: "Бригада 1", name: "Василий Богомолов", role: "Сварщик", salary: 120000 },
      { group: "Бригада 1", name: "Вячеслав Юрошин", role: "Сборщик", salary: 120000 },
    ],
    brigade2: [
      { group: "Бригада 2", name: "Егоров Игорь", role: "Сварщик", salary: 100000 },
      { group: "Бригада 2", name: "Зерцалов Даниил", role: "Сварщик", salary: 120000 },
      { group: "Бригада 2", name: "Иван Ермаков", role: "Сборщик", salary: 120000 },
    ],
    brigade3: [
      { group: "Бригада 3", name: "Вакансия: сварщик", role: "Сварщик / нужно нанять", salary: 120000 },
      { group: "Бригада 3", name: "Самсонов Алексей", role: "Сварщик", salary: 80000 },
      { group: "Бригада 3", name: "Михаил Карапетян", role: "Сборщик", salary: 120000 },
    ],
    brigade4: [
      { group: "Бригада 4", name: "Вакансия: сварщик 1", role: "Сварщик / нужно нанять", salary: 100000 },
      { group: "Бригада 4", name: "Вакансия: сварщик 2", role: "Сварщик / нужно нанять", salary: 120000 },
      { group: "Бригада 4", name: "Вакансия: сборщик", role: "Сборщик / нужно нанять", salary: 120000 },
    ],
    designBoat2Full: [
      { group: "Конструкторский отдел", name: "Александр Данилов", role: "3D-моделер", salary: 110000 },
      { group: "Конструкторский отдел", name: "Александр Воробьев", role: "3D-моделер", salary: 80000 },
      { group: "Конструкторский отдел", name: "Алексей Кожемякин", role: "Конструктор", salary: 240000 },
      { group: "Конструкторский отдел", name: "Андрей Хоритонов", role: "Конструктор", salary: 80000 },
    ],
    designBoat2Minimal: [
      { group: "Конструкторский отдел", name: "Алексей Кожемякин", role: "Конструктор", salary: 240000 },
      { group: "Конструкторский отдел", name: "Дмитрий Боровков", role: "Конструктор", salary: 130000 },
    ],
    designBoats34: [
      { group: "Конструкторский отдел", name: "Александр Воробьев", role: "3D-моделер", salary: 80000 },
      { group: "Конструкторский отдел", name: "Андрей Хоритонов", role: "Конструктор", salary: 80000 },
    ],
    designBoat5Start: [
      { group: "Конструкторский отдел", name: "Дмитрий Боровков", role: "Конструктор", salary: 130000 },
    ],
    designBoat5Full: [
      { group: "Конструкторский отдел", name: "Александр Данилов", role: "3D-моделер", salary: 110000 },
      { group: "Конструкторский отдел", name: "Алексей Кожемякин", role: "Конструктор", salary: 240000 },
      { group: "Конструкторский отдел", name: "Дмитрий Боровков", role: "Конструктор", salary: 130000 },
    ],
  };

  function payrollGroupOrder(label) {
    const order = {
      "Администрация": 1,
      "Общее производство": 2,
      "Конструкторский отдел": 3,
      "Бригада 1": 4,
      "Бригада 2": 5,
      "Бригада 3": 6,
      "Бригада 4": 7,
      "Производственные бригады": 8,
      "Прочий ФОТ": 5,
    };
    return order[label] || 99;
  }

  function groupedPayrollRows(lines) {
    const groups = new Map();
    lines.forEach((line) => {
      const label = payrollGroupForLine(line);
      if (!groups.has(label)) {
        groups.set(label, {
          label,
          lineCount: 0,
          months: data.months.map(() => 0),
          total: 0,
        });
      }
      const group = groups.get(label);
      group.lineCount += 1;
      line.months.forEach((value, index) => {
        group.months[index] += value;
      });
      group.total += line.total;
    });
    return Array.from(groups.values()).sort(
      (a, b) => payrollGroupOrder(a.label) - payrollGroupOrder(b.label),
    );
  }

  function rosterTotal(roster) {
    return roster.reduce((sum, employee) => sum + employee.salary, 0);
  }

  function scaledRoster(roster, value, baseTotal = rosterTotal(roster)) {
    if (!value || !baseTotal) {
      return [];
    }

    let allocated = 0;
    return roster.map((employee, index) => {
      const isLast = index === roster.length - 1;
      const amount = isLast ? value - allocated : Math.round((employee.salary / baseTotal) * value);
      allocated += amount;
      return { employee, amount };
    });
  }

  function exactRoster(roster) {
    return roster.map((employee) => ({ employee, amount: employee.salary }));
  }

  function payrollAllocationForMonth(line, monthValue) {
    if (!monthValue) {
      return [];
    }

    if (line.employee) {
      return [{ employee: line.employee, amount: monthValue }];
    }

    if (line.item === "admin_payroll") {
      const roster = monthValue >= 1_000_000 ? payrollRosters.adminFull : payrollRosters.adminMinimal;
      return exactRoster(roster);
    }

    if (line.item === "viktor_payroll") {
      return exactRoster(payrollRosters.viktorOnly);
    }

    if (line.item === "general_production_payroll") {
      return exactRoster(payrollRosters.generalProduction);
    }

    if (line.item === "brigade_1" || line.item === "brigade_1_half" || line.item === "brigade_1_half_from_oct") {
      return scaledRoster(payrollRosters.brigade1, monthValue, 380_000);
    }

    if (
      line.item === "brigade_2_half_from_oct" ||
      line.item === "brigade_2_full_aug_dec" ||
      line.item === "brigade_2_full_aug_oct"
    ) {
      return scaledRoster(payrollRosters.brigade2, monthValue, 340_000);
    }

    if (line.item === "brigade_3_full_aug_dec" || line.item === "brigade_3_full_aug_oct") {
      return scaledRoster(payrollRosters.brigade3, monthValue, 320_000);
    }

    if (line.item === "brigade_4_full") {
      return scaledRoster(payrollRosters.brigade4, monthValue, 340_000);
    }

    if (line.item === "brigade_2_then_3") {
      const roster = monthValue >= 330_000 ? payrollRosters.brigade2 : payrollRosters.brigade3;
      const baseTotal = monthValue >= 330_000 ? 340_000 : 320_000;
      return scaledRoster(roster, monthValue, baseTotal);
    }

    if (line.item === "design_team") {
      if (monthValue === 510_000) {
        return exactRoster(payrollRosters.designBoat2Full);
      }
      if (monthValue === 370_000) {
        return exactRoster(payrollRosters.designBoat2Minimal);
      }
      if (monthValue === 130_000) {
        return exactRoster(payrollRosters.designBoat5Start);
      }
      if (monthValue === 480_000) {
        return exactRoster(payrollRosters.designBoat5Full);
      }
    }

    if (line.item === "design_half" || line.item === "design_half_from_oct") {
      return scaledRoster(payrollRosters.designBoats34, monthValue, 160_000);
    }

    return [];
  }

  function employeeOrder(row) {
    const groupOrder = payrollGroupOrder(row.group);
    const nameOrder = {
      "Николай Кизимов": 1,
      "Дмитрий Зубрицкий": 2,
      "Виктор Широков": 3,
      "Артур Логинов": 4,
      "Александр Свирин": 5,
      "Дмитрий Федоров": 6,
      "Клининг": 7,
      "Данил Аратовский": 8,
      "Иван Панченко": 9,
      "Александр Данилов": 10,
      "Александр Воробьев": 11,
      "Алексей Кожемякин": 12,
      "Дмитрий Боровков": 13,
      "Андрей Хоритонов": 14,
      "Алексей Улюков": 15,
      "Василий Богомолов": 16,
      "Вячеслав Юрошин": 17,
      "Егоров Игорь": 18,
      "Зерцалов Даниил": 19,
      "Иван Ермаков": 20,
      "Вакансия: сварщик": 21,
      "Самсонов Алексей": 22,
      "Михаил Карапетян": 23,
      "Вакансия: сварщик 1": 24,
      "Вакансия: сварщик 2": 25,
      "Вакансия: сборщик": 26,
    };
    return groupOrder * 100 + (nameOrder[row.name] || 99);
  }

  function employeePayrollRows(lines) {
    const rows = new Map();
    lines.forEach((line) => {
      line.months.forEach((monthValue, monthIndex) => {
        payrollAllocationForMonth(line, monthValue).forEach(({ employee, amount }) => {
          const key = `${employee.group}|${employee.name}|${employee.role}`;
          if (!rows.has(key)) {
            rows.set(key, {
              key,
              group: employee.group,
              name: employee.name,
              role: employee.role,
              salary: employee.salary,
              months: data.months.map(() => 0),
              total: 0,
            });
          }
          const row = rows.get(key);
          row.months[monthIndex] += amount;
          row.total += amount;
        });
      });
    });
    return Array.from(rows.values())
      .filter((row) => row.total > 0)
      .sort((a, b) => employeeOrder(a) - employeeOrder(b));
  }

  function brigadeWorkloadSummary(employeeRows) {
    const brigadeRows = employeeRows.filter((row) => row.group.startsWith("Бригада"));
    const activeBrigades = Array.from(new Set(brigadeRows.map((row) => row.group))).sort(
      (a, b) => payrollGroupOrder(a) - payrollGroupOrder(b),
    );
    const monthly = data.months.map((_, monthIndex) => {
      const names = activeBrigades.filter((brigade) =>
        brigadeRows.some((row) => row.group === brigade && row.months[monthIndex] > 0),
      );
      return {
        month: data.monthLabels[monthIndex],
        count: names.length,
        names,
      };
    });
    const peak = monthly.reduce(
      (best, current) => (current.count > best.count ? current : best),
      { count: 0, names: [], month: "" },
    );
    return { activeBrigades, monthly, peak };
  }

  function renderPayrollTable(headers, rows, totalRow, className = "") {
    return `
      <div class="table-scroll compact-table">
        <table class="${escapeHtml(className)}">
          <thead>
            <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
          </thead>
          <tbody>${rows}${totalRow}</tbody>
        </table>
      </div>
    `;
  }

  function payrollSummary(scenario) {
    const lines = scenario.lines.filter(isPayrollLine);
    const monthly = sumLines(lines);
    const total = monthly.reduce((sum, value) => sum + value, 0);
    let peakIndex = 0;
    let peakValue = monthly[0] || 0;
    monthly.forEach((value, index) => {
      if (value > peakValue) {
        peakIndex = index;
        peakValue = value;
      }
    });
    return {
      lines,
      monthly,
      total,
      share: scenario.futureTotal ? total / scenario.futureTotal : 0,
      peak: { month: data.monthLabels[peakIndex], value: peakValue },
    };
  }

  function renderPayroll(scenario) {
    const payroll = payrollSummary(scenario);
    const employeeRows = employeePayrollRows(payroll.lines);
    const brigadeWorkload = brigadeWorkloadSummary(employeeRows);
    dom.payrollTitle.textContent = `Общий ФОТ сценария — ${scenarioShort(scenario.key)}`;
    dom.payrollSummaryTotal.textContent = formatMoneyRub(payroll.total);

    const cards = [
      ["Итого ФОТ", payroll.total],
      ["Доля в будущих затратах", `${Math.round(payroll.share * 100)}%`],
      [`Пиковый месяц / ${payroll.peak.month}`, payroll.peak.value],
      [
        `Бригад / пик ${brigadeWorkload.peak.month || "-"}`,
        `${formatMoney(brigadeWorkload.activeBrigades.length)} всего / ${formatMoney(brigadeWorkload.peak.count)} одновременно`,
      ],
      ["Сотрудников / слотов", `${formatMoney(employeeRows.length)} строк`],
    ];

    dom.payrollSummary.innerHTML = cards
      .map(([label, value]) => `
        <article class="payroll-card">
          <span>${escapeHtml(label)}</span>
          <strong>${typeof value === "number" ? formatMoneyRub(value) : escapeHtml(value)}</strong>
        </article>
      `)
      .join("");

    const groupedRows = groupedPayrollRows(payroll.lines);
    const groupHeaders = ["Тип ФОТ", "Строк", ...data.monthLabels, "Итого"];
    const groupBody = groupedRows
      .map((group) => `
        <tr>
          <td><strong>${escapeHtml(group.label)}</strong></td>
          <td>${formatMoney(group.lineCount)}</td>
          ${group.months.map((value) => `<td>${formatCell(value)}</td>`).join("")}
          <td><strong>${formatMoney(group.total)}</strong></td>
        </tr>
      `)
      .join("");

    const groupTotal = `
      <tr class="row-grand-total">
        <td colspan="2">ИТОГО ФОТ</td>
        ${payroll.monthly.map((value) => `<td>${formatCell(value)}</td>`).join("")}
        <td>${formatMoney(payroll.total)}</td>
      </tr>
    `;

    const employeeHeaders = ["Группа", "ФИО / слот", "Должность", "Оклад", ...data.monthLabels, "Итого"];
    const employeeBody = employeeRows
      .map((row) => `
        <tr>
          <td>${escapeHtml(row.group)}</td>
          <td><strong>${escapeHtml(row.name)}</strong></td>
          <td>${escapeHtml(row.role)}</td>
          <td>${formatMoney(row.salary)}</td>
          ${row.months.map((value) => `<td>${formatCell(value)}</td>`).join("")}
          <td><strong>${formatMoney(row.total)}</strong></td>
        </tr>
      `)
      .join("");

    const totalRow = `
      <tr class="row-grand-total">
        <td colspan="4">ИТОГО ФОТ</td>
        ${payroll.monthly.map((value) => `<td>${formatCell(value)}</td>`).join("")}
        <td>${formatMoney(payroll.total)}</td>
      </tr>
    `;

    const brigadeHeaders = ["Показатель", ...data.monthLabels, "Итого"];
    const brigadeCountRow = `
      <tr>
        <td><strong>Кол-во работающих бригад</strong></td>
        ${brigadeWorkload.monthly.map((month) => `<td>${month.count ? formatMoney(month.count) : ""}</td>`).join("")}
        <td><strong>${formatMoney(brigadeWorkload.activeBrigades.length)}</strong></td>
      </tr>
    `;
    const brigadeNamesRow = `
      <tr>
        <td><strong>Какие бригады работают</strong></td>
        ${brigadeWorkload.monthly
          .map((month) => `<td class="brigade-list-cell">${escapeHtml(month.names.join(", "))}</td>`)
          .join("")}
        <td class="brigade-list-cell"><strong>${escapeHtml(brigadeWorkload.activeBrigades.join(", "))}</strong></td>
      </tr>
    `;

    dom.payrollBreakdown.innerHTML = `
      <details class="payroll-subdetails" open>
        <summary>
          <span>Загрузка бригад по месяцам</span>
          <strong>${formatMoney(brigadeWorkload.activeBrigades.length)} бригад / пик ${formatMoney(brigadeWorkload.peak.count)}</strong>
        </summary>
        ${renderPayrollTable(brigadeHeaders, brigadeCountRow + brigadeNamesRow, "", "payroll-brigade-table")}
      </details>
      <details class="payroll-subdetails" open>
        <summary>
          <span>ФОТ по сотрудникам</span>
          <strong>${formatMoney(employeeRows.length)} строк</strong>
        </summary>
        ${renderPayrollTable(employeeHeaders, employeeBody, totalRow, "payroll-staff-table")}
      </details>
      <details class="payroll-subdetails">
        <summary>
          <span>Свод по типам ФОТ</span>
          <strong>${formatMoneyRub(payroll.total)}</strong>
        </summary>
        ${renderPayrollTable(groupHeaders, groupBody, groupTotal)}
      </details>
    `;
  }

  function renderCustomConfigurator(settings, customScenarioData) {
    const customAnalysis = salesAnalysis(customScenarioData, parseBudget(dom.budgetInput.value));
    dom.customConfigSummary.innerHTML = `
      <article>
        <span>Будущие вложения</span>
        <strong>${formatMoneyRub(customScenarioData.futureTotal)}</strong>
      </article>
      <article>
        <span>Пик после продаж</span>
        <strong>${escapeHtml(customAnalysis.peak.month)} / ${formatMoneyRub(customAnalysis.peak.value)}</strong>
      </article>
      <article class="${customAnalysis.peakGap >= 0 ? "good" : "bad"}">
        <span>${customAnalysis.peakGap >= 0 ? "Запас к бюджету" : "Дефицит к бюджету"}</span>
        <strong>${formatMoneyRub(Math.abs(customAnalysis.peakGap))}</strong>
      </article>
    `;

    dom.customBaseScenario.innerHTML = data.scenarioOrder
      .map((key) => `<option value="${escapeHtml(key)}" ${key === customConfig.baseScenario ? "selected" : ""}>${escapeHtml(scenarioShort(key))}</option>`)
      .join("");

    dom.customBaseScenario.onchange = () => {
      initializeCustomConfig(dom.customBaseScenario.value, { force: true });
      payrollMode = "model";
      selectedScenario = "custom";
      activeView = "configurator";
      render();
    };

    dom.customBoatToggles.innerHTML = sectionOrder
      .filter((section) => section !== "project_life")
      .map((section) => `
        <label class="custom-check-row">
          <input type="checkbox" data-custom-section="${escapeHtml(section)}" ${customConfig.sections[section]?.enabled ? "checked" : ""}>
          <span>${escapeHtml(data.sectionLabels[section])}</span>
        </label>
      `)
      .join("");

    dom.customFixedToggles.innerHTML = [
      ["rent", "Аренда"],
      ["utilities", "К.У."],
      ["other", "Прочие"],
    ]
      .map(([key, label]) => `
        <label class="custom-check-row">
          <input type="checkbox" data-custom-fixed="${escapeHtml(key)}" ${customConfig.fixed[key] ? "checked" : ""}>
          <span>${escapeHtml(label)}</span>
        </label>
      `)
      .join("");

    const multiplierRows = [
      ["materials", "Материалы"],
      ["production_payroll", "ФОТ бригад"],
      ["design_payroll", "ФОТ конструкторов"],
      ["admin_payroll", "Адм. и общий ФОТ"],
      ["fixed_overhead", "Аренда / К.У. / прочее"],
    ];
    dom.customMultipliers.innerHTML = multiplierRows
      .map(([key, label]) => `
        <label>
          <span>${escapeHtml(label)}</span>
          <input data-custom-multiplier="${escapeHtml(key)}" inputmode="decimal" value="${Math.round((customConfig.multipliers[key] || 1) * 100)}">
          <em>%</em>
        </label>
      `)
      .join("");

    const scheduleRows = sectionOrder
      .map((section) => {
        const config = customConfig.sections[section];
        return `
          <tr>
            <td><strong>${escapeHtml(data.sectionLabels[section])}</strong></td>
            <td>
              <label class="payroll-month-toggle">
                <input type="checkbox" data-custom-section="${escapeHtml(section)}" ${config.enabled ? "checked" : ""}>
                <span></span>
              </label>
            </td>
            <td>
              <select data-custom-start="${escapeHtml(section)}">
                ${data.monthLabels.map((month, index) => `<option value="${index}" ${config.start === index ? "selected" : ""}>${escapeHtml(month)}</option>`).join("")}
              </select>
            </td>
            <td><input data-custom-duration="${escapeHtml(section)}" inputmode="numeric" value="${formatMoney(config.duration || 0)}"></td>
          </tr>
        `;
      })
      .join("");

    dom.customScheduleTable.innerHTML = `
      <thead>
        <tr>
          <th>Блок</th>
          <th>Вкл</th>
          <th>Старт</th>
          <th>Длительность, мес.</th>
        </tr>
      </thead>
      <tbody>${scheduleRows}</tbody>
    `;

    dom.customBoatToggles.querySelectorAll("input[data-custom-section]").forEach((input) => {
      input.addEventListener("change", () => {
        customConfig.sections[input.dataset.customSection].enabled = input.checked;
        selectedScenario = "custom";
        render();
      });
    });

    dom.customFixedToggles.querySelectorAll("input[data-custom-fixed]").forEach((input) => {
      input.addEventListener("change", () => {
        customConfig.fixed[input.dataset.customFixed] = input.checked;
        selectedScenario = "custom";
        render();
      });
    });

    dom.customMultipliers.querySelectorAll("input[data-custom-multiplier]").forEach((input) => {
      input.addEventListener("blur", () => {
        const value = parseMoneyInput(input.value) || 100;
        customConfig.multipliers[input.dataset.customMultiplier] = value / 100;
        input.value = formatMoney(value);
        selectedScenario = "custom";
        render();
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          input.blur();
        }
      });
    });

    dom.customScheduleTable.querySelectorAll("input[data-custom-section]").forEach((input) => {
      input.addEventListener("change", () => {
        customConfig.sections[input.dataset.customSection].enabled = input.checked;
        selectedScenario = "custom";
        render();
      });
    });

    dom.customScheduleTable.querySelectorAll("select[data-custom-start]").forEach((select) => {
      select.addEventListener("change", () => {
        customConfig.sections[select.dataset.customStart].start = Number(select.value);
        selectedScenario = "custom";
        render();
      });
    });

    dom.customScheduleTable.querySelectorAll("input[data-custom-duration]").forEach((input) => {
      input.addEventListener("blur", () => {
        const duration = Math.max(0, Math.min(data.months.length, parseMoneyInput(input.value)));
        customConfig.sections[input.dataset.customDuration].duration = duration;
        input.value = formatMoney(duration);
        selectedScenario = "custom";
        render();
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          input.blur();
        }
      });
    });
  }

  function payrollConfigRows(rawScenario, settings) {
    const baseRows = new Map(basePayrollEmployeeRows(rawScenario, settings).map((row) => [row.key, row]));
    const state = payrollMode === "manual" ? initializeManualPayrollState(rawScenario, settings) : null;
    return allPayrollEmployees().map((employee) => {
      const baseRow = baseRows.get(`${employee.group}|${employee.name}|${employee.role}`);
      const months = data.months.map((_, index) =>
        payrollMode === "manual"
          ? Boolean(state[employee.key]?.[index])
          : Boolean(baseRow?.months[index]),
      );
      const monthlyValues = months.map((isActive) => (isActive ? employee.salary : 0));
      const included = months.some(Boolean);
      return {
        employee,
        included,
        months,
        monthlyValues,
        total: monthlyValues.reduce((sum, value) => sum + value, 0),
      };
    });
  }

  function renderPayrollConfig(rawScenario, settings, scenario) {
    dom.payrollModeTabs.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.payrollMode === payrollMode);
    });

    const rows = payrollConfigRows(rawScenario, settings);
    const monthlyTotals = data.months.map((_, monthIndex) =>
      rows.reduce((sum, row) => sum + row.monthlyValues[monthIndex], 0),
    );
    const total = monthlyTotals.reduce((sum, value) => sum + value, 0);
    const modelTotal = sumLines(basePayrollLines(rawScenario, settings)).reduce((sum, value) => sum + value, 0);
    const delta = total - modelTotal;
    const activeCount = rows.filter((row) => row.total > 0).length;
    const modeText = payrollMode === "manual"
      ? "Ручной штат заменяет все модельные ФОТ-строки выбранного сценария."
      : "Модельный режим показывает штат, который сейчас заложен в расчете. Переключитесь в ручной режим, чтобы менять сотрудников по месяцам.";

    dom.payrollConfigNote.innerHTML = `
      <strong>${escapeHtml(scenarioShort(rawScenario.key))}</strong>.
      ${escapeHtml(modeText)}
      Итого ФОТ в текущем расчете: <strong>${formatMoneyRub(payrollSummary(scenario).total)}</strong>.
      Конфигуратор: <strong>${formatMoneyRub(total)}</strong>,
      отклонение от модельного ФОТ: <strong class="${delta >= 0 ? "positive" : "negative"}">${delta >= 0 ? "+" : ""}${formatMoneyRub(delta)}</strong>,
      активных строк: <strong>${formatMoney(activeCount)}</strong>.
    `;

    const body = rows
      .map(({ employee, included, months, total }) => {
        const disabled = payrollMode === "model" ? "disabled" : "";
        return `
          <tr class="${total ? "" : "inactive-staff-row"}">
            <td>${escapeHtml(employee.group)}</td>
            <td><strong>${escapeHtml(employee.name)}</strong></td>
            <td>${escapeHtml(employee.role)}</td>
            <td>${formatMoney(employee.salary)}</td>
            <td>
              <label class="payroll-month-toggle">
                <input
                  type="checkbox"
                  data-payroll-employee-toggle="${escapeHtml(employee.key)}"
                  ${included ? "checked" : ""}
                  ${disabled}
                >
                <span></span>
              </label>
            </td>
            ${months
              .map((isActive, monthIndex) => `
                <td>
                  <label class="payroll-month-toggle">
                    <input
                      type="checkbox"
                      data-payroll-employee="${escapeHtml(employee.key)}"
                      data-payroll-month="${monthIndex}"
                      ${isActive ? "checked" : ""}
                      ${disabled}
                    >
                    <span></span>
                  </label>
                </td>
              `)
              .join("")}
            <td><strong>${formatCell(total)}</strong></td>
          </tr>
        `;
      })
      .join("");

    const totalRow = `
      <tr class="row-grand-total">
        <td colspan="5">ИТОГО ФОТ ПО КОНФИГУРАТОРУ</td>
        ${monthlyTotals.map((value) => `<td>${formatCell(value)}</td>`).join("")}
        <td>${formatMoney(total)}</td>
      </tr>
    `;

    dom.payrollConfigTable.innerHTML = `
      <thead>
        <tr>
          <th>Группа</th>
          <th>Сотрудник / слот</th>
          <th>Роль</th>
          <th>Оклад</th>
          <th>Вкл</th>
          ${data.monthLabels.map((month) => `<th>${escapeHtml(month)}</th>`).join("")}
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>${body}${totalRow}</tbody>
    `;

    dom.payrollConfigTable.querySelectorAll("input[data-payroll-employee-toggle]").forEach((input) => {
      input.addEventListener("change", () => {
        const state = initializeManualPayrollState(rawScenario, settings);
        const employee = input.dataset.payrollEmployeeToggle;
        state[employee] = data.months.map(() => input.checked);
        payrollMode = "manual";
        render();
      });
    });

    dom.payrollConfigTable.querySelectorAll("input[data-payroll-employee]").forEach((input) => {
      input.addEventListener("change", () => {
        const state = initializeManualPayrollState(rawScenario, settings);
        const employee = input.dataset.payrollEmployee;
        const monthIndex = Number(input.dataset.payrollMonth);
        state[employee][monthIndex] = input.checked;
        payrollMode = "manual";
        render();
      });
    });
  }

  function cumulativePlanForBudget(scenario) {
    return scenario.cumulativeFuture.map((value) => data.investedToMay + value);
  }

  function completionMonthIndex(scenario) {
    const salePlan = scenario.salePlan || [];
    if (salePlan.length) {
      return Math.max(...salePlan.map((sale) => sale.monthIndex));
    }

    const boatRows = scenario.gantt.filter((row) => row.key && row.key.startsWith("boat_") && row.total > 0);
    const activeIndexes = boatRows.flatMap((row) =>
      row.months.map((value, index) => (value > 0 ? index : -1)).filter((index) => index >= 0),
    );
    return activeIndexes.length ? Math.max(...activeIndexes) : -1;
  }

  function renderCumulative(scenario, budget) {
    const analysis = salesAnalysis(scenario, budget);
    const cumulativePlan = cumulativePlanForBudget(scenario);
    const cumulativeAfterSales = analysis.cumulativePlanAfterSales;
    const readyMonthIndex = completionMonthIndex(scenario);
    const chartValues = cumulativeMode === "period" ? scenario.cumulativeFuture : cumulativeAfterSales;
    const maxValue = cumulativeMode === "period"
      ? Math.max(...scenario.cumulativeFuture, 1)
      : Math.max(budget, ...cumulativePlan, ...cumulativeAfterSales, 1);

    dom.cumulativeModeTabs.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.cumulativeMode === cumulativeMode);
    });

    dom.cumulativeChart.innerHTML = chartValues
      .map((value, index) => {
        const height = Math.max(4, Math.round((value / maxValue) * 100));
        const overBudget = cumulativeMode === "total" && value > budget;
        const isReadyMonth = index === readyMonthIndex;
        const tooltip = cumulativeMode === "period"
          ? `${data.monthLabels[index]}: ${formatMoneyRub(value)} накоплено за новый период${isReadyMonth ? "\nГотовы все катера сценария" : ""}`
          : `${data.monthLabels[index]}: ${formatMoneyRub(value)} общая потребность после продаж${isReadyMonth ? "\nГотовы все катера сценария" : ""}`;
        return `
          <div class="cumulative-item ${isReadyMonth ? "ready-month" : ""}" data-tooltip="${escapeHtml(tooltip)}">
            <div class="cumulative-track">
              <div class="cumulative-fill ${overBudget ? "over-budget" : ""}" style="height: ${height}%"></div>
            </div>
            ${isReadyMonth ? '<div class="cumulative-ready-badge">Готовы все катера</div>' : ""}
            <div class="cumulative-value">${formatMoney(value)}</div>
            <div class="cumulative-month">${escapeHtml(data.monthLabels[index])}</div>
          </div>
        `;
      })
      .join("");

    const headers = [
      "Месяц",
      "Расход",
      "Накоп. расход периода",
      "Продажи",
      "План до продаж",
      "План после продаж",
      "Готовность",
      "Gap к бюджету",
    ];
    const rows = data.monthLabels
      .map((month, index) => {
        const gap = budget - cumulativeAfterSales[index];
        const isReadyMonth = index === readyMonthIndex;
        return `
          <tr class="${isReadyMonth ? "ready-month-row" : ""}">
            <td>${escapeHtml(month)}</td>
            <td>${formatMoney(scenario.monthlyTotal[index])}</td>
            <td class="${cumulativeMode === "period" ? "is-active-metric" : ""}">${formatMoney(scenario.cumulativeFuture[index])}</td>
            <td>${formatMoney(analysis.monthlySales[index])}</td>
            <td>${formatMoney(cumulativePlan[index])}</td>
            <td class="${cumulativeMode === "total" ? "is-active-metric" : ""}"><strong>${formatMoney(cumulativeAfterSales[index])}</strong></td>
            <td>${isReadyMonth ? "<strong>Все готовы</strong>" : ""}</td>
            <td class="${gap >= 0 ? "positive" : "negative"}">${formatMoney(gap)}</td>
          </tr>
        `;
      })
      .join("");

    dom.cumulativeTable.innerHTML = `
      <thead>
        <tr>${headers
          .map((header, index) => {
            const active = (cumulativeMode === "period" && index === 2) || (cumulativeMode === "total" && index === 5);
            return `<th class="${active ? "is-active-metric" : ""}">${escapeHtml(header)}</th>`;
          })
          .join("")}</tr>
      </thead>
      <tbody>${rows}</tbody>
    `;
  }

  function renderComparison(budget, scenarios) {
    const rowsData = scenarioOrder().map((key) => {
      const scenario = scenarios[key];
      const analysis = salesAnalysis(scenario, budget);
      const completionIndex = completionMonthIndex(scenario);
      const brigadeSummary = activeBrigadesByMonth(scenario);
      const monthlyBrigades = brigadeSummary.monthly.map((month, index) => ({
        month: data.monthLabels[index],
        count: month.size,
        names: Array.from(month.keys()),
      }));
      const brigadePeak = monthlyBrigades.reduce(
        (best, current) => (current.count > best.count ? current : best),
        { count: 0, month: "" },
      );
      const activeBrigades = Array.from(new Set(monthlyBrigades.flatMap((month) => month.names)));
      return {
        key,
        scenario,
        analysis,
        completionIndex,
        completionMonth: completionIndex >= 0 ? data.monthLabels[completionIndex] : "-",
        brigadeCount: activeBrigades.length,
        brigadePeak,
      };
    });

    const bestByBudget = [...rowsData].sort((a, b) => b.analysis.peakGap - a.analysis.peakGap)[0];
    const cheapestFuture = [...rowsData].sort((a, b) => a.scenario.futureTotal - b.scenario.futureTotal)[0];
    const lowestPeak = [...rowsData].sort((a, b) => a.analysis.peak.value - b.analysis.peak.value)[0];
    const fastest = [...rowsData].sort((a, b) => a.completionIndex - b.completionIndex)[0];
    const settings = currentSettings();
    const disabledSettings = [
      settings.includeRentUtilities ? "" : "аренда и К.У. выключены",
      settings.includeBoat5 ? "" : "катер 5 выключен",
      payrollMode === "manual" ? `ручной ФОТ для сценария ${scenarioShort(selectedScenario)}` : "",
    ].filter(Boolean);

    const cards = [
      [
        bestByBudget.analysis.peakGap >= 0 ? "Лучший запас по пику" : "Минимальный дефицит",
        scenarioShort(bestByBudget.key),
        bestByBudget.analysis.peakGap >= 0
          ? formatMoneyRub(bestByBudget.analysis.peakGap)
          : `-${formatMoneyRub(Math.abs(bestByBudget.analysis.peakGap))}`,
        bestByBudget.analysis.peakGap >= 0 ? "good" : "bad",
      ],
      ["Минимум будущих вложений", scenarioShort(cheapestFuture.key), formatMoneyRub(cheapestFuture.scenario.futureTotal)],
      ["Самый низкий пик", `${scenarioShort(lowestPeak.key)} / ${lowestPeak.analysis.peak.month}`, formatMoneyRub(lowestPeak.analysis.peak.value)],
      ["Самая ранняя готовность", `${scenarioShort(fastest.key)} / ${fastest.completionMonth}`, `${fastest.brigadeCount} бригад всего`],
    ];

    dom.comparisonContext.textContent = [
      `Слой продаж: ${saleScenarioTitle()}`,
      disabledSettings.length ? `Настройки: ${disabledSettings.join(", ")}` : "Настройки: все базовые затраты включены",
    ].join(". ");

    dom.comparisonSummary.innerHTML = cards
      .map(([label, title, value, modifier]) => `
        <article class="comparison-card ${modifier || ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(title)}</strong>
          <em>${escapeHtml(value)}</em>
        </article>
      `)
      .join("");

    const headers = [
      "Сценарий",
      ...data.monthLabels,
      "Будущие",
      "Итого до продаж",
      "Продажи",
      "Пик после продаж",
      "Gap пика",
      "Готовы все",
      "Бригады",
      "Прямые катера",
      "Жизнь проекта",
    ];
    const rows = rowsData.map(({ key, scenario, analysis, completionMonth, brigadeCount, brigadePeak }) => {
      const selectedClass = key === selectedScenario ? " selected-row" : "";
      return `
        <tr class="${selectedClass}" data-scenario="${escapeHtml(key)}">
          <td>${escapeHtml(scenarioShort(key))}</td>
          ${scenario.monthlyTotal.map((value) => `<td>${formatCell(value)}</td>`).join("")}
          <td><strong>${formatMoney(scenario.futureTotal)}</strong></td>
          <td><strong>${formatMoney(scenario.planTotal)}</strong></td>
          <td>${formatMoney(analysis.totalSales)}</td>
          <td><strong>${escapeHtml(analysis.peak.month)} / ${formatMoney(analysis.peak.value)}</strong></td>
          <td class="${analysis.peakGap >= 0 ? "positive" : "negative"}">${formatMoney(analysis.peakGap)}</td>
          <td><strong>${escapeHtml(completionMonth)}</strong></td>
          <td>${formatMoney(brigadeCount)} всего / пик ${formatMoney(brigadePeak.count)}</td>
          <td>${formatMoney(scenario.directBoats)}</td>
          <td>${formatMoney(scenario.projectLife)}</td>
        </tr>
      `;
    });

    dom.comparisonTable.innerHTML = `
      <thead>
        <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>${rows.join("")}</tbody>
    `;

    dom.comparisonTable.querySelectorAll("tbody tr").forEach((row) => {
      row.addEventListener("click", () => {
        selectedScenario = row.dataset.scenario;
        render();
      });
    });
  }

  function sumLines(lines) {
    return data.months.map((_, monthIndex) =>
      lines.reduce((sum, line) => sum + line.months[monthIndex], 0),
    );
  }

  function renderDetails(scenario) {
    dom.detailsTitle.textContent = `Детализация затрат — ${scenarioShort(scenario.key)}`;

    const body = [];

    sectionOrder.forEach((sectionKey) => {
      const lines = scenario.lines.filter((line) => line.section === sectionKey);
      if (!lines.length) {
        return;
      }

      const sectionLabel = data.sectionLabels[sectionKey];
      const sectionMonths = sumLines(lines);
      const sectionTotal = sectionMonths.reduce((sum, value) => sum + value, 0);
      const rowClass = sectionClass(sectionKey);
      const rowSpan = lines.length + 1;

      lines.forEach((line, index) => {
        body.push(`
          <tr>
            ${index === 0 ? `
              <td class="details-block-cell ${rowClass}" rowspan="${rowSpan}">
                <span class="details-block-label">${escapeHtml(sectionLabel)}</span>
              </td>
            ` : ""}
            <td>${escapeHtml(line.itemLabel)}</td>
            ${line.months.map((value) => `<td>${formatCell(value)}</td>`).join("")}
            <td><strong>${formatMoney(line.total)}</strong></td>
          </tr>
        `);
      });

      body.push(`
        <tr class="row-total">
          <td>Итого: ${escapeHtml(sectionLabel.toLowerCase())}</td>
          ${sectionMonths.map((value) => `<td>${formatCell(value)}</td>`).join("")}
          <td>${formatMoney(sectionTotal)}</td>
        </tr>
      `);
    });

    body.push(`
      <tr class="row-grand-total">
        <td colspan="2">ИТОГО по сценарию</td>
        ${scenario.monthlyTotal.map((value) => `<td>${formatCell(value)}</td>`).join("")}
        <td>${formatMoney(scenario.futureTotal)}</td>
      </tr>
    `);

    dom.detailsTable.innerHTML = `
      <thead>
        <tr>
          <th colspan="2">Статья</th>
          ${data.monthLabels.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>${body.join("")}</tbody>
    `;
  }

  function render() {
    const budget = parseBudget(dom.budgetInput.value);
    const settings = currentSettings();
    const scenarios = adjustedScenarios(settings);
    const scenario = scenarios[selectedScenario];
    renderViewTabs();
    renderTabs(budget, scenarios);
    renderHeader(scenario, budget);
    renderKpis(scenario, budget);
    renderOverallSummary(budget, scenarios);
    renderSales(scenario, budget);
    renderPresentationTimeline(scenario);
    renderLegend();
    renderGantt(scenario);
    renderMonthlyChart(scenario);
    renderMix(scenario);
    renderMonthlyStacked(scenario);
    renderBrigadeHeatmap(scenario);
    renderCustomConfigurator(settings, scenarios.custom);
    renderPayrollConfig(data.scenarios[customConfig.baseScenario], settings, scenarios.custom);
    renderPayroll(scenario);
    renderCumulative(scenario, budget);
    renderComparison(budget, scenarios);
    renderDetails(scenario);
  }

  dom.budgetInput.addEventListener("input", render);
  dom.includeRentUtilities.addEventListener("change", render);
  dom.includeBoat5.addEventListener("change", render);
  dom.viewTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.appView;
      if (activeView === "configurator") {
        selectedScenario = "custom";
      }
      render();
    });
  });
  dom.customResetButton.addEventListener("click", () => {
    initializeCustomConfig(customConfig.baseScenario, { force: true });
    payrollMode = "model";
    selectedScenario = "custom";
    activeView = "configurator";
    render();
  });
  dom.payrollModeTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      payrollMode = button.dataset.payrollMode;
      if (payrollMode === "manual") {
        initializeManualPayrollState(data.scenarios[customConfig.baseScenario], currentSettings());
      }
      selectedScenario = "custom";
      activeView = "configurator";
      render();
    });
  });
  dom.payrollResetButton.addEventListener("click", () => {
    initializeManualPayrollState(data.scenarios[customConfig.baseScenario], currentSettings(), { force: true });
    payrollMode = "model";
    selectedScenario = "custom";
    activeView = "configurator";
    render();
  });
  dom.cumulativeModeTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      cumulativeMode = button.dataset.cumulativeMode;
      render();
    });
  });
  dom.budgetInput.addEventListener("blur", () => {
    dom.budgetInput.value = formatMoney(parseBudget(dom.budgetInput.value));
    render();
  });

  dom.budgetInput.value = formatMoney(data.defaultBudget);
  render();
})();
