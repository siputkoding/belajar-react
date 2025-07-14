export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi adalah hidangan Jepang tradisional dari nasi yang diawetkan dengan cuka.'
}, {
  id: 1,
  name: 'Dal',
  description: 'Cara paling umum untuk menyiapkan dal adalah dalam bentuk sup yang dapat ditambahkan bawang bombay, tomat, dan berbagai bumbu.'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi adalah pangsit isi yang dibuat dengan cara membungkus adonan tidak beragi di sekitar isian yang gurih atau manis dan dimasak dalam air mendidih.'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab adalah makanan populer yang terdiri dari potongan daging yang ditusuk dan dipanggang.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum adalah berbagai macam hidangan kecil yang biasa dinikmati orang Kanton di restoran untuk sarapan dan makan siang'
}];
