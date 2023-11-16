export const filterStore = [
  {
    type: "checkbox",
    legend: "Производители:",
    items: [
      {
        name: "baxter-of-california",
        id: "filter-baxter-of-california",
        label: "Baxter of California",
        checked: "checked"
      },
      {
        name: "mr-natty",
        id: "filter-mr-natty",
        label: "Mr Natty",
        checked: ""
      },
      {
        name: "suavecito",
        id: "filter-suavecito",
        label: "Suavecito",
        checked: "checked"
      },
      {
        name: "malin-goetz",
        id: "filter-malin-goetz",
        label: "Malin+Goetz",
        checked: ""
      },
      {
        name: "murrays",
        id: "filter-murrays",
        label: "Murray's",
        checked: ""
      },
      {
        name: "american-crew",
        id: "filter-american-crew",
        label: "American Crew",
        checked: ""
      }
    ]
  },
  {
    type: "radio",
    legend: "Группы товаров:",
    items: [
      {
        name: "groups-product",
        value: "all",
        id: "groups-all",
        label: "Все",
        checked: "checked"
      },
      {
        name: "groups-product",
        value: "shaving",
        id: "groups-shaving",
        label: "Бритвенные принадлежности",
        checked: ""
      },
      {
        name: "groups-product",
        value: "hair-care",
        id: "groups-care",
        label: "Средства для ухода",
        checked: ""
      },
      {
        name: "groups-product",
        value: "accessories",
        id: "groups-accessories",
        label: "Аксессуары",
        checked: ""
      }
    ]
  }
];

export const filterNews = [
  {
    type: "radio",
    legend: "Категории:",
    items: [
      {
        name: "category",
        value: "all",
        id: "category-all",
        label: "Все",
        checked: "checked"
      },
      {
        name: "category",
        value: "promotions",
        id: "category-promotions",
        label: "Акции",
        checked: ""
      },
      {
        name: "category",
        value: "interesting",
        id: "category-interesting",
        label: "Вам будет интересно",
        checked: ""
      },
      {
        name: "category",
        value: "beard",
        id: "category-beard",
        label: "Уход за бородой",
        checked: ""
      }
    ]
  },
  {
    type: "radio",
    legend: "Период:",
    items: [
      {
        name: "period",
        value: "all",
        id: "period-all",
        label: "Все",
        checked: "checked"
      },
      {
        name: "period",
        value: "week",
        id: "period-week",
        label: "Прошлая неделя",
        checked: ""
      },
      {
        name: "period",
        value: "month",
        id: "period-month",
        label: "Прошлый месяц",
        checked: ""
      },
      {
        name: "period",
        value: "year",
        id: "period-year",
        label: "Прошлый год",
        checked: ""
      }
    ]
  }
];
