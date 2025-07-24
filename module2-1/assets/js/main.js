function myName() {
    const myName = prompt("Напиши своє ім'я: ")
    alert(`Привіт, ${myName}`)
}
function indicateDate() {
    const myDate = prompt("Напиши свій рік народження: ")
    const myAge = new Date().getFullYear() - myDate
    alert(`Твій вік, ${myAge} років`)
}
function perymetr() {
    const storonaKvadrata = prompt("Вкажи сторону квадрата, а я тобі його периметр")
    const perymetrKvadrata = 4*storonaKvadrata
    alert(`Периметр квадрата: ${perymetrKvadrata}`)
}
function areaСircle() {
    const radius = prompt("Вкажи радіус круга, а я тобі площу окружності")
    const areaСircle = Math.PI*radius*radius
    alert(`Площа окружності: ${areaСircle}`)
}
function speed() {
    const distance = prompt("Вкажи дистанцію між містами в км: ")
    const time = prompt("Вкажи за скільки годин хочеш добратись: ")
    const speed = distance/time
    alert(`Необхідна швидкість: ${speed} км/год` )
}
function converter() {
    const dollar = prompt("Вкажи суму в доларах а я тобі в євро: ")
    const coefficient = 0.85
    const converter = dollar*coefficient
    alert(`Отримаєш ${converter} євро`)
}