
export default function DataSrc() {
    function num() {
        return Math.floor(Math.random() * 9 + 1)
    }

    let rNum = [];
    let upNum = [];
    function RNum() {
        do {
            rNum.push(num());
            rNum.forEach(ele => {
                if (!upNum.some(e => e === ele)) {
                    upNum.push(...ele)
                }
            });
        } while (rNum.length < 9)
        return upNum;
    }
    const RdNum = RNum();
    return [
        {
            id: 1,
            text: RdNum[0],
            on: true,
        },
        {
            id: 2,
            text: RdNum[1],
            on: true,
        },
        {
            id: 3,
            text: RdNum[2],
            on: true,
        },
        {
            id: 4,
            text: RdNum[3],
            on: true,
        },
        {
            id: 5,
            text: RdNum[4],
            on: true,
        },
        {
            id: 6,
            text: RdNum[5],
            on: true,
        },
        {
            id: 7,
            text: RdNum[6],
            on: true,
        },
        {
            id: 8,
            text: RdNum[7],
            on: true,
        },
        {
            id: 9,
            text: RdNum[8],
            on: true,
        },
    ]
}
