export const employeeTask = [
    {
        id: 1,
        employeeName: "Doniyor",
        employeeLastName: "Qodirov",
        deadline: 30,
        total:56,
        done :25,
        process : 35,
        notDone: 0,
        
    },
    {
        id: 2,
        employeeName: "Jora",
        employeeLastName: "Botirov",
        deadline: 40,
        total:56,
        done :25,
        process : 35,
        notDone: 0,
    },
    {
        id: 3,
        employeeName: "Orif",
        employeeLastName: "Karimov",
        deadline: 60,
        total:56,
        done :25,
        process : 35,
        notDone: 0,
    },
    {
        id: 4,
        employeeName: "Eshon",
        employeeLastName: "Keldiyev",
        deadline: 80,
        total:56,
        done :25,
        process : 35,
        notDone: 0,
    }
];

export const companyIndicator = [
    {
        id: 1,
        indicator: 30,
        condition : "bajarildi"
    },
    {
        id: 2,
        indicator: 35,
        condition : "jarayonda"
    },
    {
        id: 3,
        indicator: 15,
        condition : "vaqti o'zgargan"
    },
    {
        id: 4,
        indicator: 20,
        condition : "bajarilmadi"
    },
        
];


export const workIndicator = [
    {
        id: 1,
        title: "Logistika",
        indicItem: [63, 19,9,9],
    },
    {
        id: 2,
        title: "Marketing",
        indicItem: [63, 19,9,9],
    },
    {
        id: 3,
        title: "Savdo",
        indicItem: [63, 19,9,9],
    },
    {
        id: 1,
        title: "Ishlab chiqarish",
        indicItem: [63, 19,9,9],
    },
]

export const companyIndicatorTotal = companyIndicator[0].indicator + companyIndicator[1].indicator + companyIndicator[2].indicator