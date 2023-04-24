/*
filter를 활용해서 최대, 최소값을 구하는 코드
Math() 함수와 Math.max(), Math.min();
이것을 사용해서 배열에 담긴 여러 값 중
최대, 최소를 구할 수 있다
그러려면 배열의 원소 하나하나에 접근해서
Math.max(), Math.min();의 인수로 넣는다

ECMAScript 5에서 사용하는 apply()와
ECMAScript 6에서 사용하는 전개연산자
*/

const arr = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, arr);
const min = Math.min.apply(null, arr);

console.log(max);
console.log(min);
/* apply()는 매개변수로 함수에서 사용할
this 객체와 호출하는 함수를 입력받는다

위의 코드에서 함수 내부에서 사용할 this 객체가
없기 때문에 null을 사용했다

ECMAScript 5에서는 apply() 함수 호출 메서드를
사용해서 각 배열의 값을 접근했다

즉, 불변성유지를 달성한 상태에서 배열을 복사하는
방법이 없었기 때문에 함수 개별의 값을 따로 불러
사용하는 번거로움이 있었다
*/
const maxV = Math.max(...arr);
const minV = Math.min(...arr);
console.log(maxV);
console.log(minV);
// 전개연산자를 사용해서 불변성을 유지한 채
// 인수값으로 arr을 직접 넣어주면 끝나는
// 쉽고 가독성도 좋은 방법이다

const guys = [
    { name: "Baldi", money: 500000 },
    { name: "Principal", money: 500000 },
    { name: "Bully", money: 400000 },
    { name: "Sweep", money: 300000 },
    { name: "Prize", money: 200000 },
    { name: "Beans", money: 100000 },
    { name: "Cumulo", money: 100000 },
    { name: "Test", money: 50000 }
];

const rich = guys.filter((el, _) => {
    const max = Math.max(...guys.map(el => el.money));
    return el.money === max;
});
console.log(rich);
/*
Math.max를 사용하는데 필요한 값은 guys 안의 각 객체의
money 값을 비교해야한다

따라서 guys.map(el => el.money)로 guys 각 객체의
money 값을 순차적으로 접근해서 복사하고 Math.max에
인수로 담도록 한다
*/
const poor = guys.filter((el, _) => {
    const min = Math.min(...guys.map(el => el.money));
    return el.money === min;
});
console.log(poor);