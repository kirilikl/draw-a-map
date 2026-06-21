const SHAPES_DATABASE = [
    {
        id: "square",
        label: "Квадрат",
        modes: ["normal", "hard"],
        matrix: [
            [1, 1],
            [1, 1]
        ]
    },
    {
        id: "line2",
        label: "Линия(2)",
        modes: ["normal", "hard"],
        matrix: [
            [1, 1]
        ]
    },
    {
        id: "angel2",
        label: "Угол(2)",
        modes: ["normal", "hard"],
        matrix: [
            [1, 1],
            [1, 0]
        ]
    },
    {
        id: "diagonal2",
        label: "Диагональ(2)",
        modes: ["normal", "hard"],
        matrix: [
            [0, 1],
            [1, 0]
        ]
    },
    {
        id: "dot",
        label: "Точка",
        modes: ["normal", "hard"],
        matrix: [
            [1],
        ]
    },
    {
        id: "zblock",
        label: "Зигзаг",
        modes: ["hard"],
        matrix: [
            [1, 1, 0],
            [0, 1, 1]
        ]
    },
    {
        id: "line3",
        label: "Линия(3)",
        modes: ["hard"],
        matrix: [
            [1, 1, 1]
        ]
    },
    {
        id: "angel3",
        label: "Угол(3)",
        modes: ["hard"],
        matrix: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 0, 0]
        ]
    },
    {
        id: "diagonal3",
        label: "Диагональ(3)",
        modes: ["hard"],
        matrix: [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0]
        ]
    },

]

export default SHAPES_DATABASE