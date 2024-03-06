import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Kubek w kolorowe plamki',
      price: 100,
      description_title:
        'Ręcznie wykonany kamionkowy kubek z uchem w kolorowe plamki.',
      description_first_paragraph:
        'Powstał po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Pokryty wzorem z zielonych, rudych, niebieskich i żółtych plamek. Wszystkie kubki są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każdy z nich posiada unikatowy układ plamek. Bezpieczny do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ten ceramiczny kubek z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'mugs',
      main_img: 'kubek-plamki-multi-1.jpg',
      gallery:
        'kubek-plamki-multi-2.jpg,kubek-plamki-multi-3.jpg,kubek-plamki-multi-4.jpg',
      capacity: 300,
      height: 7.5,
      diameter: 8.5,
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Kubek różowo-szałwiowy',
      price: 100,
      description_title: 'Ręcznie wykonany różowo-szałwiowy kubek z uchem.',
      description_first_paragraph:
        'Powstał po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Odjechane połączenie kolorów: intensywnie różowy z zewnątrz, orzeźwiająco szałwiowy w środku. Wszystkie kubki są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą delikatnie różnić się między sobą kształtem i kolorem. Bezpieczny do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ten ceramiczny kubek z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'mugs',
      main_img: 'kubek-rozowo-szalwiowy-1.jpg',
      gallery:
        'kubek-rozowo-szalwiowy-2.jpg,kubek-rozowo-szalwiowy-3.jpg,kubek-rozowo-szalwiowy-4.jpg',
      capacity: 300,
      height: 7.5,
      diameter: 8.5,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Czarka szałwiowa',
      price: 90,
      description_title: 'Ręcznie wykonana szałwiowa czarka',
      description_first_paragraph:
        'Powstała po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Czarka ma ręcznie wykonane wgniecenia, dzięki czemu idealnie leży w dłoni. Pokochasz ją za to! Wszystkie czarki są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą delikatnie różnić się między sobą kształtem i kolorem. Bezpieczna do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ta ceramiczna czarka z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'mugs',
      main_img: 'czarka-szalwiowa-1.jpg',
      gallery:
        'czarka-szalwiowa-2.jpg,czarka-szalwiowa-3.jpg,czarka-szalwiowa-4.jpg',
      capacity: 240,
      height: 9,
      diameter: 7,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Trójmiska w plamki',
      price: 170,
      description_title:
        'Ręcznie wykonana kamionkowa miska podzielona na trzy części w kolorowe plamki.',
      description_first_paragraph:
        'Powstała po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Pokryta wzorem z zielonych, rudych, niebieskich i żółtych plamek. Wszystkie miski są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każda z nich posiada unikatowy układ plamek. Bezpieczna do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ta ceramiczna miska z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią ją też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'bowls',
      main_img: 'trojmiska-plamki-1.jpg',
      gallery:
        'trojmiska-plamki-2.jpg,trojmiska-plamki-3.jpg,trojmiska-plamki-4.jpg',
      height: 4,
      diameter: 18,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Mini miseczka w kolorowe plamki',
      price: 70,
      description_title:
        'Ręcznie wykonana kamionkowa miseczka w kolorowe plamki.',
      description_first_paragraph:
        'Powstała po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Pokryta wzorem z zielonych, rudych, niebieskich i żółtych plamek. Wszystkie miseczki są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każda z nich posiada unikatowy układ plamek. Bezpieczna do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ta ceramiczna mini miseczka z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią ją też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'bowls',
      main_img: 'miseczka-plamki-1.jpg',
      gallery:
        'miseczka-plamki-2.jpg,miseczka-plamki-3.jpg,miseczka-plamki-4.jpg',
      height: 4,
      diameter: 7,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d5',
      name: 'Dekoracyjna misa w paski',
      price: 270,
      description_title:
        'Ręcznie wykonana dekoracyjna kamionkowa misa w zielono-liliowe paski.',
      description_first_paragraph:
        'Powstała po to, aby swoim kolorem rozweselać szare dni, a funkcjonalnością ułatwiać życie. Pokryta wzorem z zielonych i liliowych pasów. Wszystkie misy są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każda z nich posiada unikatowy układ kolorowych pasów. Bezpieczna do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ta ceramiczna misa z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią ją też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'bowls',
      main_img: 'misa-paski-1.jpg',
      gallery: 'misa-paski-2.jpg,misa-paski-3.jpg,misa-paski-4.jpg',
      height: 5.5,
      length: 22,
      width: 16,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d6',
      name: 'Wazon w zielono-liliowe plamki',
      price: 300,
      description_title:
        'Ręcznie wykonany kamionkowy wazon w zielono-liliowe plamki.',
      description_first_paragraph:
        'Powstał po to, aby swoim kolorem rozweselać szare dni i zdobić wnętrze nawet bez kwiatów w środku. Pokryty wzorem z zielonych i liliowych plamek. Wszystkie wazony są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każdy z nich posiada unikatowy układ plamek. Bezpieczny do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ten ceramiczny wazon z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'vases',
      main_img: 'wazon-liliowo-zielony-1.jpg',
      gallery:
        'wazon-liliowo-zielony-2.jpg,wazon-liliowo-zielony-3.jpg,wazon-liliowo-zielony-4.jpg',
      height: 18,
      diameter: 9,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d7',
      name: 'Wazon w zielono-kobaltowe plamki',
      price: 300,
      description_title:
        'Ręcznie wykonany kamionkowy wazon w zielono-kobaltowe plamki.',
      description_first_paragraph:
        'Powstał po to, aby swoim kolorem rozweselać szare dni i zdobić wnętrze nawet bez kwiatów w środku. Pokryty wzorem z zielonych i kobaltowych plamek. Wszystkie wazony są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem, a każdy z nich posiada unikatowy układ plamek. Bezpieczny do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ten ceramiczny wazon z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'vases',
      main_img: 'wazon-zielono-kobaltowy-1.jpg',
      gallery:
        'wazon-zielono-kobaltowy-2.jpg,wazon-zielono-kobaltowy-3.jpg,wazon-zielono-kobaltowy-4.jpg',
      height: 18,
      diameter: 9,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d8',
      name: 'Wazon pudrowy',
      price: 300,
      description_title:
        'Ręcznie wykonany kamionkowy wazon w pudrowym kolorze.',
      description_first_paragraph:
        'Powstał po to, aby swoim kolorem rozweselać szare dni i zdobić wnętrze nawet bez kwiatów w środku. Pokryty błyszczącym różowo-pudrowym szkliwem. Wszystkie wazony są od początku do końca wykonane ręcznie, dzięki czemu każdy egzemplarz jest wyjątkowy. Mogą różnić się między sobą kształtem i kolorem. Bezpieczny do mycia w zmywarce :)',
      description_subtitle: 'Szukasz pomysłu na prezent?',
      description_second_paragraph:
        'Prezent na parapetówkę? Prezent dla dziewczyny? A może prezent dla Mamy? Ten ceramiczny wazon z pewnością zachwyci każdego, kto kocha dekorować swój dom. Docenią go też osoby ceniące nieoczywiste przedmioty, za którymi stoi praca rąk.',
      category: 'vases',
      main_img: 'wazon-puder-1.jpg',
      gallery: 'wazon-puder-2.jpg,wazon-puder-3.jpg,wazon-puder-4.jpg',
      height: 18,
      diameter: 9,
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
