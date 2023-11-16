<template>
  <main class="pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold uppercase">Coba Game:</h1>

    <h3 class="text-xl mb-4">
      Dimulai dari pemain "{{ pemain }}"
      {{ pemain === "X" ? namaPemainX : namaPemainO }}
    </h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in papanPermainan" :key="x" class="flex">
        <div
          v-for="(cell, y) in row"
          :key="y"
          @click="fungsiGerakan(x, y)"
          :class="`border border-black w-24 h-24 hover:bg-gray-300 flex items-center justify-center text-4xl cursor-pointer ${
            cell === 'X' ? 'text-red-400' : 'text-blue-400'
          }`"
        >
          {{ cell === "X" ? "X" : cell === "O" ? "O" : "" }}
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 v-if="pemenang" class="text-4xl font-bold mb-8">
        Dimenangkan oleh '{{ pemain === "X" ? namaPemainX : namaPemainO }}' !
      </h2>
      <h2 v-if="permainanBerakhir && !pemenang" class="text-4xl font-bold mb-8">
        Permainan seri!
      </h2>
      <button
        @click="tombolRiset"
        class="px-4 py-2 bg-gray-300 rounded font-bold hover:bg-gray-400 duration-300"
      >
        Mulai ulang
      </button>
    </div>

    <div class="flex items-center justify-center my-4">
      <label for="namaPemainX" class="mr-2">Nama Pemain X:</label>
      <input
        id="namaPemainX"
        v-model="namaPemainX"
        class="px-2 py-1 border rounded"
        placeholder="Isi disini pren..."
        @keyup.enter="mulaiPermainan"
        :disabled="permainanDimulai"
      />

      <label for="namaPemainO" class="ml-4 mr-2">Nama Pemain O:</label>
      <input
        id="namaPemainO"
        v-model="namaPemainO"
        class="px-2 py-1 border rounded"
        placeholder="Isi disini pren..."
        @keyup.enter="mulaiPermainan"
        :disabled="permainanDimulai"
      />
    </div>

    <div class="flex items-center justify-center gap-4">
      <button
        @click="mulaiPermainan"
        :disabled="!namaDiIsi"
        :class="{
          'bg-gray-300': permainanDimulai,
          'bg-green-400': !permainanDimulai,
        }"
        class="px-4 py-2 rounded font-bold duration-300 mb-2"
      >
        Mulai
      </button>

      <button
        @click="tombolStop"
        :disabled="!permainanDimulai"
        :class="{
          'bg-red-400': permainanDimulai,
          'bg-gray-300': !permainanDimulai,
        }"
        class="px-4 py-2 rounded font-bold duration-300"
      >
        Stop
      </button>
    </div>

    <p v-if="!namaDiIsi" class="text-red-500">
      Isi dulu nama kedua playernya pren, baru bisa mulai hehe...
    </p>
  </main>
</template>

<script setup>
const namaPemainX = ref("");
const namaPemainO = ref("");
const pemain = ref("X");
const seri = ref(false);
const permainanDimulai = ref(false);
const papanPermainan = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const permainanBerakhir = computed(() => {
  return (
    pemenang.value !== null ||
    papanPermainan.value.flat().every((cell) => cell !== "")
  );
});

const hitungPemenang = (papan) => {
  const garis = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < garis.length; i++) {
    const [a, b, c] = garis[i];

    if (papan[a] && papan[a] === papan[b] && papan[a] === papan[c]) {
      return papan[a];
    }
  }

  return null;
};

const pemenang = computed(() => hitungPemenang(papanPermainan.value.flat()));

const fungsiGerakan = (x, y) => {
  if (pemenang.value || seri.value || !permainanDimulai.value) return;

  if (papanPermainan.value[x][y]) return;

  papanPermainan.value[x][y] = pemain.value;

  const hasilPemenang = hitungPemenang(papanPermainan.value.flat());
  if (hasilPemenang) {
    pemain.value = hasilPemenang;
  } else if (papanPermainan.value.flat().every((cell) => cell !== "")) {
    seri.value = true;
  } else {
    pemain.value = pemain.value === "X" ? "O" : "X";
  }
};

const tombolRiset = () => {
  papanPermainan.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  pemain.value = "X";
  pemenang.value = null;
  seri.value = false;
};

const mulaiPermainan = () => {
  if (namaDiIsi.value) {
    permainanDimulai.value = true;
  }
};

const namaDiIsi = computed(
  () => namaPemainX.value !== "" && namaPemainO.value !== ""
);

const tombolStop = () => {
  tombolRiset();
  permainanDimulai.value = false;
};
</script>
