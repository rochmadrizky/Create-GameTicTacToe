<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex items-center justify-center">
      <div v-if="!mulaiSoal">
        <div class="flex my-4">
          <label for="nama">Nama:</label>
          <input
            v-model="nama"
            type="text"
            id="nama"
            class="border-2 rounded ml-2 px-2 py-1"
            placeholder="Isi nama disini yaa..."
          />
        </div>

        <div class="flex mb-4">
          <label for="kelas">Kelas:</label>
          <input
            v-model="kelas"
            type="number"
            id="kelas"
            :min="1"
            :max="12"
            class="border-2 rounded ml-2 px-2 py-1"
            placeholder="1"
          />
        </div>

        <div class="flex mb-4">
          <label>Jenis Kelamin:</label>

          <div class="ml-2">
            <input
              type="radio"
              id="laki-laki"
              v-model="jenisKelamin"
              value="laki-laki"
            />
            <label for="laki-laki" class="ml-1">Laki-laki</label>
          </div>

          <div class="ml-4">
            <input
              type="radio"
              id="perempuan"
              v-model="jenisKelamin"
              value="perempuan"
            />
            <label for="perempuan" class="ml-1">Perempuan</label>
          </div>
        </div>
        <button
          @click="kerjakanSoal"
          class="bg-blue-500 text-white px-4 py-2 rounded"
          :disabled="!inputValid"
        >
          Mulai
        </button>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div v-if="mulaiSoal">
        <h1 class="text-2xl font-bold mb-4">Ujian Online</h1>

        <div v-for="question in soal" :key="question.id" class="mb-4">
          <p>{{ question.text }}</p>
          <div v-for="option in question.options" :key="option">
            <input
              type="radio"
              :id="option"
              :value="option"
              v-model="question.jawabanYangDipilih"
              :disabled="tampilkanHasil"
            />
            <label :for="option" class="ml-2">{{ option }}</label>
          </div>
        </div>

        <button
          @click="kirimJawaban"
          :disabled="nonaktifkanTombolKirim"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        <div v-if="tampilkanHasil" class="mt-4">
          <h2 class="text-xl font-bold mb-2">Hasil Ujian</h2>
          <p>Skor Anda: {{ skor }}/{{ soal.length }}</p>

          <div v-for="question in soal" :key="question.id" class="mb-4">
            <p
              :class="{
                'text-green-500':
                  question.jawabanYangDipilih === question.jawabanBenar,
                'text-red-500':
                  question.jawabanYangDipilih !== question.jawabanBenar,
              }"
            >
              Jawaban Anda: {{ question.jawabanYangDipilih }}
            </p>
            <p>Jawaban yang Benar: {{ question.jawabanBenar }}</p>
          </div>

          <p>Nama: {{ nama }}</p>
          <p>Kelas: {{ kelas }}</p>
          <p>Jenis Kelamin: {{ jenisKelamin }}</p>
          <p>Nilai: {{ skor }}/{{ soal.length }}</p>

          <button
            @click="resetSemua"
            class="bg-red-500 text-white px-4 py-2 rounded"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nama = ref("");
const kelas = ref("");
const jenisKelamin = ref("");
const mulaiSoal = ref(false);

const soal = ref([
  {
    id: 1,
    text: "Apa ibukota Indonesia?",
    options: ["A. Jakarta", "B. Surabaya", "C. Bandung", "D. Medan"],
    jawabanBenar: "A. Jakarta",
    jawabanYangDipilih: null,
  },
  {
    id: 2,
    text: "Berapakah 5 + 3?",
    options: ["A. 6", "B. 7", "C. 8", "D. 9"],
    jawabanBenar: "C. 8",
    jawabanYangDipilih: null,
  },
]);

const tampilkanHasil = ref(false);

const kirimJawaban = () => {
  tampilkanHasil.value = true;
};

const resetSoal = () => {
  soal.value.forEach((question) => {
    question.jawabanYangDipilih = null;
  });
  tampilkanHasil.value = false;
  nama.value = "";
  kelas.value = "";
  jenisKelamin.value = "";
};

const resetSemua = () => {
  mulaiSoal.value = false;
  tampilkanHasil.value = false;
  nama.value = "";
  kelas.value = "";
  jenisKelamin.value = "";
  soal.value.forEach((question) => {
    question.jawabanYangDipilih = null;
  });
};

const skor = computed(() => {
  return soal.value.filter(
    (question) => question.jawabanYangDipilih === question.jawabanBenar
  ).length;
});

const kerjakanSoal = () => {
  mulaiSoal.value = true;
};

const inputValid = computed(() => {
  const namaValid = nama.value.trim() !== "";
  const isKelasValid =
    Number.isInteger(Number(kelas.value)) &&
    kelas.value >= 1 &&
    kelas.value <= 12;
  const isJenisKelaminValid = jenisKelamin.value !== "";
  return namaValid && isKelasValid && isJenisKelaminValid;
});

const nonaktifkanTombolKirim = computed(() => {
  return soal.value.some((question) => question.jawabanYangDipilih === null);
});
</script>
