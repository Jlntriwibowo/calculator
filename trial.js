// Mengambil elemen-elemen HTML yang dibutuhkan
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

// Menambahkan event listener pada setiap tombol
buttons.forEach(button => {
  button.addEventListener('click', calculate);
});

// Function untuk menghitung hasil perhitungan
function calculate(event) {
  // Mengambil nilai tombol yang ditekan
  const buttonValue = event.target.value;

  if (buttonValue === 'all-clear') {
    // Jika tombol AC ditekan, maka reset layar
    screen.value = '';
  } else if (buttonValue === '=') {
    // Jika tombol = ditekan, maka hitung hasil perhitungan
    try {
      if (/^0[1-9]/.test(screen.value)) {
        screen.value = 'Error';
        return;
      }
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = 'Error';
    }
  } else if (/^0[1-9]/.test(buttonValue)) {
    screen.value = 'Error';
    return;
  } else {
    // Jika tombol lain ditekan, tambahkan nilai tombol pada layar
    screen.value += buttonValue;
  }
}

