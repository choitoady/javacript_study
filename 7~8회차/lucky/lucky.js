function question(n, m) {
    let totalWinCount = 0; // 초기값을 0으로 설정
    const betAmount = m;

    for (let i = 1; i <= 10; i++) {
        const luckyNumber = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 랜덤 숫자
        console.log(`${i}회차 행운의 숫자: ${luckyNumber}`);

        if (luckyNumber === n) {
            console.log(`당첨!`);
            totalWinCount++;
        } else {
            console.log(`미당첨`);
        }
    }

    console.log(`총 당첨 횟수: ${totalWinCount}회`); // 당첨 횟수를 출력
    const totalWinAmount = totalWinCount * betAmount;
    console.log(`당첨금은 ${totalWinAmount}원 입니다.`);
}

question(4, 10000);