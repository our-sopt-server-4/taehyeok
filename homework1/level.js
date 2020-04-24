// LEVEL 2. 자신의 조원들을 정보로 하는 JSON 배열을 만들어 출력하기

var group = [
    {name: "유태혁", age: 20},
    {name: "조충범", age: 25},
    {name: "심다은", age: 23},
    {name: "최해랑", age: 27},
    {name: "김동관", age: 26}
]

// LEVEL 3. LEVEL2를 출력할 때 forEach를 사용해보기

group.forEach(
    item => console.log("이름은 " + item.name + "이고 나이는 " + item.age + "살 입니다.")
);