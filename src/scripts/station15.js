function displayList() {
    const fruitsDiv = document.getElementById('fruits');
    fruitsDiv.innerHTML = ''; // 既存の内容をクリア

    const fruits = ['リンゴ', 'イチゴ', 'ブドウ'];

    const ul = document.createElement('ul');

    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        ul.appendChild(li);
    });

    fruitsDiv.appendChild(ul);
}