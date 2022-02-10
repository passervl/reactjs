
export default function DataSrc() {
    function num() {
        return Math.floor(Math.random() * 9)
    }

    const rNum = [];
    for (let i = 0; i < 9; i++) {
        rNum.push(num())
    }
  return [
        {
            id: 1,
            text: rNum[0],
            on: true,
        },
        {
            id: 2,
            text: rNum[1],
            on: true,
        },
        {
            id: 3,
            text: rNum[2],
            on: true,
        },
        {
            id: 4,
            text: rNum[3],
            on: true,
        },
        {
            id: 5,
            text: rNum[4],
            on: true,
        },
        {
            id: 6,
            text: rNum[5],
            on: true,
        },
        {
            id: 7,
            text: rNum[6],
            on: true,
        },
        {
            id: 8,
            text: rNum[7],
            on: true,
        },
        {
            id: 9,
            text: rNum[8],
            on: true,
        },
    ]
}
