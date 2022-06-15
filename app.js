// DOM
// const app = document.getElementById('app');

// const greeting = document.createElement('h1');
// greeting.innerText = 'Hello World';

// const news = document.createElement('p');
// news.innerText = "lorem ipsum TimNas berhasil memasuki final Piala Asia setelah 15 tahun menunggu";

// app.appendChild(greeting);
// app.appendChild(news)


// REACT TANPA JSX
// const greeting = React.createElement('h1', {}, 'Hello World');
// const news = React.createElement('p', {}, 'lorem ipsum TimNas berhasil memasuki final Piala Asia setelah 15 tahun menunggu')

// DENGAN JSX
// let username = "Rafi";
let person = { username: "Calvin", email: "rafi@mail.com", gender: 'male'}

// if (person['gender'] === 'male') {
//     console.log('Mr. ' + person['username']);
// } else {
//     console.log('Miss ' + person['username']);
// }


// (conditional) ? kalo true : kalo salah
// person["gender"] === 'male' ? console.log('Mr. ' + person['username']) : console.log('Miss ' + person['username']);


let beverages = [ 'tea', 'coffee', 'mineral water', 'coconut water', 'watermelon juice', 'avocado juice']

let students = [ { id:1, firstName: 'Calvin', lastName: 'C' }, { id: 2, firstName: 'Rafi', lastName: 'F' }, { id: 3, firstName: 'Komarudin', lastName: 'K' } ]

beverages.map(beverage => console.log(beverage))

const greeting = <h1 className="container">Hello { person["gender"] === 'male' ? 'Mr. ' + person['username'] : 'Miss ' + person['username'] } </h1>;
const news = 
(
    <React.Fragment>
        <p>lorem ipsum TimNas berhasil memasuki final Piala Asia setelah 15 tahun menunggu</p>
        <img src="https://akcdn.detik.net.id/community/media/visual/2022/06/15/ragam-selebrasi-pemain-timnas-indonesia-yang-lolos-ke-piala-asia-2023-3_169.jpeg?w=700&q=90" />
    </React.Fragment>
)

const menu = (
    <div>
        <ul>
            { beverages.map((beverage, index) => (
                <li key={index}>{ beverage }</li>
            ))}
        </ul>

        <button onClick={ clickMe }>Click Me</button>
    </div>
)

const studentDisplay = (
    <div>
        <h3>List students 15 June 2022: </h3>
        <ol>
            { students.map(student => (
                <li key={student['id']}>{ student['firstName'] } { student['lastName'] }</li>
            ))}
        </ol>
    </div>
)

function clickMe() {
    alert('You Click Button')
}



ReactDOM.render([ greeting, news, menu, studentDisplay ], document.getElementById('app'));

