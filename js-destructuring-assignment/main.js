// Destructuring assignment

// 기존의 배열, 객체는 존재한 상태여야 한다
const arr = ['red', 'green', 'blue'];

// 기존의 방법으로 배열, 객체에서 해당 값을
// 뽑아내어 변수로 담고자 한다면
// 하나하나의 값을 변수로 선언하고
// 배열, 객체에서 탐색해서 할당해야 했다
/*
const red = arr[0];
const green = arr[1];
const blue = arr[2];
*/

// 비구조화할당 = 구조분해할당
const [red, green, blue] = arr;
// 원래 배열이 존재하는 상태에서 변수명을
// 배열 형태로 받고, 배열의 이름을 대입해서
// 배열값을 담기만 한다
// 이 때 배열의 '순서'에 맞춰서 구조를
// open하고 할당해야 한다

// 배열의 탐색은 index(순서)로 하기 때문에
// 순서에 맞춰서 작성하면 되었지만
// 객체는 탐색을 키 값으로 하기 때문에,
// 배열은 변수를 개발자 임의대로 가능했지만
// 객체는 키 값을 그대로 사용해야 한다
/*
const student = {
    name : "Null",
    age : 99,
    address : "Schoolhouse"
}

const {name, age, address} = student;
*/
// 비구조화 할당의 이득, 변수 할당을
// 반복할 필요 없이 한 곳에 선언했기 때문에
// 코드를 단축할 수 있고 코드에 한 곳에
// 모여있으므로 가독성이 좋아진다
// 유지보수성도 좋아진다
// default parameter를 설정할 수 있어서
// 실무에서 자주 사용한다
// JS라이브러리인 react, view 등의 문법체계에서는
// 기본적으로 사용되는 문법이기 때문에
// 프론트엔드에서는 잘 알아야한다

// [{}, {}, {}] = 객체배열 =>
// JS에서는 자료들을 저장하는 방식을
// json이라고 한다

const studentInfo = [
    {
        name : "Null",
        age : 99,
        isMale: true
    },
    {
        name : "Baldi",
        age : 29,
        isMale: true
    },
    {
        name : "Playtime",
        age : 10,
        isMale: false
    }
]
// 객체배열에서 자료를 탐색할 때
const name1 = studentInfo[0].name;
console.log(name1);

// 배열과 객체의 구조분해할당은 다르다
const [info1] = studentInfo;
console.log(info1);

const [in1, in2, in3] = studentInfo;
const {name} = in1;
console.log(name);

/* Unfinished
// 중첩된 객체의 깊은 비구조화할당
const styles = {
    size: {
        width: 300,
        height: 200
    },
    color: {
        fontColor: "red",
        bgColor: "blue"
    }
}

const {size : {width, height}, color : {fontColor, bgColor}} = styles;
// 비구조화할당을 사용하는 궁극적인 목적은
// 코드의 가독성을 높이고, default parameter를
// 설정하기 위한 방법으로 사용한다

const MyInfo = (obj) => { `제 이름은 ${obj.name}이고 ${obj.age}살이며 직업은 ${obj.job}입니다` };
console.log(MyInfo({ name: "Null", age: 99, job: "Unconfirmed" }));
*/