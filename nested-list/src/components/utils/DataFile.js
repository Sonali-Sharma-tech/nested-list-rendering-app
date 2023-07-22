const backendData = [
  {
    id: "1",
    name: "Office Map"
  },
  {
    id: "2",
    name: "New Employee Onboarding",
    children: [
      {
        id: "8",
        name: "Onboarding Materials"
      },
      {
        id: "9",
        name: "Training"
      }
    ]
  },
  {
    id: "3",
    name: "Office Events",
    children: [
      {
        id: "6",
        name: "2018",
        children: [
          {
            id: "10",
            name: "Summer Picnic",
            children: [
              {
                id: "14",
                name: "Summer Picnic Child"
              },
              {
                id: "15",
                name: "Child Valentine's Day Party"
              },
              {
                id: "16",
                name: "Child New Year's Party"
              }
            ]
          },
          {
            id: "11",
            name: "Valentine's Day Party",
            children: [
              {
                id: "14",
                name: "Child-14 Valentine's Day Party"
              },
              {
                id: "15",
                name: "Child-15 Valentine's Day Party"
              },
              {
                id: "16",
                name: "Child -16 New Year's Party"
              }
            ]
          },
          {
            id: "12",
            name: "New Year's Party"
          }
        ]
      },
      {
        id: "7",
        name: "2017",
        children: [
          {
            id: "13",
            name: "Company Anniversary Celebration"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Public Holidays"
  },
  {
    id: "5",
    name: "Vacations and Sick Leaves"
  }
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}
