# Week 5 - Array Methods

## Identitas
- Nama : `Excel Caesariano`
- NIM  : `F1D022118`

---

## Deskripsi Tugas
Tugas ini bertujuan agar mahasiswa memahami dan mampu menggunakan **6 metode penting Array di JavaScript** yaitu:
- `map()`
- `filter()`
- `reduce()`
- `find()`
- `some()`
- `every()`

---

## Implementasi
Dataset yang digunakan adalah **30 karakter dari Civil War (Team Captain America vs Team Iron Man)**.  
Setiap metode diimplementasikan dengan kasus berbeda sesuai fungsinya.
![array data](screenshots/array_data.png)

### 1. map()
- **Tujuan**: Mengubah semua alias karakter menjadi huruf besar untuk keperluan tampilan atau standarisasi data.
- **Screenshot**:  
  ![code map()](screenshots/1_map_code.png)

  ![run map()](screenshots/1_map_run.png)

---

### 2. filter()
- **Tujuan**: Menyaring karakter yang memiliki `power > 90` untuk mendapatkan daftar karakter terkuat.
- **Screenshot**:  
  ![code map()](screenshots/2_filter_code.png)
  
  ![code map()](screenshots/2_filter_run.png)

---

### 3. reduce()
- **Tujuan**: Menghitung total kekuatan (`power`) dari semua karakter untuk analisis keseluruhan kekuatan tim.
- **Screenshot**:  
  ![code map()](screenshots/3_reduce_code.png)
  
  ![code map()](screenshots/3_reduce_run.png)

---

### 4. find()
- **Tujuan**: Mencari karakter tertentu, misalnya karakter yang namanya diawali dengan `"Steve"`.
- **Screenshot**:  
  ![code map()](screenshots/4_find_code.png)
  
  ![code map()](screenshots/4_find_run.png)

---

### 5. some()
- **Tujuan**: Mengecek apakah ada karakter yang memiliki peran `"Magic"` di dalam dataset.
- **Screenshot**:  
  ![code map()](screenshots/5_some_code.png)
  
  ![code map()](screenshots/5_some_run.png)

---

### 6. every()
- **Tujuan**: Mengecek apakah semua karakter memiliki `power > 50` sebagai validasi dataset.
- **Screenshot**:  
  ![code map()](screenshots/6_every_code.png)
  
  ![code map()](screenshots/6_every_run.png)

---

## Kesimpulan
Dari percobaan keenam metode array:
- `map()` sangat berguna untuk **transformasi data**.
- `filter()` dipakai untuk **menyaring data** sesuai kriteria.
- `reduce()` berguna untuk **mengagregasi/menghitung total** dari seluruh data.
- `find()` efektif untuk **mencari satu elemen spesifik**.
- `some()` membantu mengecek **apakah ada kondisi tertentu terpenuhi**.
- `every()` digunakan untuk **validasi bahwa semua elemen memenuhi kondisi**.