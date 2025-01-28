const express = require('express')
const cors = require('cors')
const app = express()
let uuid = require('uuid')
app.use(cors());
const port = 3005
let name = [{
        id: 1,
        title: "لباس خواب کودک",
        num: 1,
        price: 150000,
        sum: 150000
    },
    {
        id: 2,
        title: "شلوار آبی دخترانه",
        num: 2,
        price: 250000,
        sum: 250000
    },
    {
        id: 3,
        title: "پیراهن دخترانه",
        num: 1,
        price: 450000,
        sum: 450000,
        totall: 850000
    },
];
let nameOrder = [{
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "سفارش1"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "سفارش1"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "سفارش1"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "سفارش1"
    },

];
let nameOrder2 = [{
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "تحویل"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "تحویل"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "عدم تحویل"
    },
    {
        id: uuid.v4(),
        phone: "0915510....",
        name: "محمد محمدی",
        order: "تحویل"
    },

];
let product = [{
        id: uuid.v4(),
        title: 'تیشرت و ساق دخترانه(2 تا 6 سال)',
        category: 'کودک',
        message: '----',
        date: '1399.5.25'
    },
    {
        id: uuid.v4(),
        title: 'سویشرت پسراانه(6 تا 24 ماه)',
        category: 'نوزاد',
        message: '----',
        date: '1399.10.11'
    },
    {
        id: uuid.v4(),
        title: 'بلوز دخترانه(6 تا 24 ماه)',
        category: 'نوزاد',
        message: '2',
        date: '1400.1.29'
    },
    {
        id: uuid.v4(),
        title: 'بافت پسرانه کد 691 (9 تا 14 سال)',
        category: 'کودک',
        message: '----',
        date: '	1400.4.10'
    },
]
let journal = [{
        id: uuid.v4(),
        title: 'نحوه انتخاب رنگ لباس کودک',
        writer: 'مریم ساقی',
        category: '	مقالات کودک',
        date: '1399.2.5'
    },
    {
        id: uuid.v4(),
        title: 'انتخاب لباس مناسب برای جشن',
        writer: 'مریم ساقی',
        category: '	مقالات کودک',
        date: '	1399.6.18'
    },
    {
        id: uuid.v4(),
        title: 'چند مورد از بهترین گیره سر برای نوزاد',
        writer: 'مریم ساقی',
        category: '	مقالات نوزاد',
        date: '1400.3.5'
    },
    {
        id: uuid.v4(),
        title: ' ',

        writer: ' ',
        category: ' ',
        date: '	'
    },
];
let users = [{
        id: uuid.v4(),
        name: 'مریم ساقی',
        email: 'saghimaryam18@gmail.com',
        role: 'مدیر'
    },
    {
        id: uuid.v4(),
        name: 'فاطمه موسوی',
        email: 'fatemehmosavi11@gmail.com',
        role: 'کاربر'
    },
    {
        id: uuid.v4(),
        name: 'امیرحسین امام وردی',
        email: 'emamverdiam@gmail.com',
        role: 'کاربر'
    },
]

app.get('/delivery', (req, res) => {
    res.send(name);
})
app.get('/deliveryD', (req, res) => {
    res.send(name);
})
app.get('/order', (req, res) => {
    res.send(nameOrder);
})
app.get('/SeenHis', (req, res) => {
    res.send(nameOrder2);
})
app.get('/cancel', (req, res) => {
    res.send(name);
})
app.get('/product', (req, res) => {
    res.send(product);
})
app.get('/journal', (req, res) => {
    res.send(journal);
})
app.get('/users', (req, res) => {
    res.send(users);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))