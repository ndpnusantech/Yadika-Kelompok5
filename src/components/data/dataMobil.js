const carData = [
  {
    id: 1,
    brand: 'Tesla',
    carName: 'Tesla Malibu',
    model: 'Model 3',
    price: 850,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/tesla-model3.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:1,
    noBPKB:612538235124014091
  },

  {
    id: 2,
    brand: 'Hyundai',
    carName: 'Hyundai Creta',
    model: 'Model-2021',
    price: 720,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/hyundai-creta.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:1,
    noBPKB:612538235124014091
  },
  {
    id: 3,
    brand: 'BMW',
    carName: 'BMW 6 Series',
    model: 'Model-2020',
    price: 780,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/bmw-offer.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:2,
    noBPKB:612538235124014091
  },

  {
    id: 4,
    brand: 'Nissan',
    carName: 'Nissan Maxima',
    model: 'Model-2022',
    price: 770,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/nissan-offer.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:1,
    noBPKB:612538235124014091
  },

  {
    id: 5,
    brand: 'Toyota',
    carName: 'Toyota Camry',
    model: 'Model-2023',
    price: 550,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    img: './img/cars-img/offer-toyota.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:2,
    noBPKB:612538235124014091
  },

  {
    id: 6,
    brand: 'Mercedes',
    carName: 'Mercedes Benz C350',
    model: 'Model-2022',
    price: 800,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/mercedes-offer.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:1,
    noBPKB:612538235124014091
  },

  {
    id: 7,
    brand: 'Audi',
    carName: 'Ford Fiesta',
    model: 'Model 3',
    price: 720,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/audi.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:1,
    noBPKB:612538235124014091
  },

  {
    id: 8,
    brand: 'Pajero',
    carName: 'Mitsubishi Pajero Sport',
    model: 'Model 3',
    price: 750,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '7 seats',
    automatic: 'Automatic',
    img: './img/cars-img/pajero.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:2,
    noBPKB:612538235124014091
  },

  {
    id: 9,
    brand: 'Honda',
    carName: 'Honda Civic',
    model: 'Model 3',
    price: 700,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    capacity: '5 seats',
    automatic: 'Automatic',
    img: './img/cars-img/civic.png',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
    plat: 'd 2142 dk',
    oil: 'Pertamax',
    jumlahMobil:2,
    noBPKB:612538235124014091
  },
];

export { carData };
