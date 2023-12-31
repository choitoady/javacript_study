function question(n) {
    let sum = 0;

    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    return sum;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [[10], [35], [59], [74], [49], [93], [10], [26], [69], [56]],
    [30, 306, 870, 1406, 600, 2162, 30, 182, 1190, 812]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}