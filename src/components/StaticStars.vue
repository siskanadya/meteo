<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps({
  count: { type: Number, default: 1500 },
  rMin: { type: Number, default: 0.9 },
  rMax: { type: Number, default: 1.8 },
  aMin: { type: Number, default: 0.12 },
  aMax: { type: Number, default: 0.5 },
  zIndex: { type: Number, default: 9999 },
  colors: {
    type: Array,
    default: () => [
      [255,255,255],
      [210,220,255],
      [255,220,245],
      
    ],
  },
});

const canvasRef = ref(null);
let ctx, dpr;

function drawStars() {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = vw * dpr;
  canvas.height = vh * dpr;
  canvas.style.width = vw + "px";
  canvas.style.height = vh + "px";
  canvas.style.zIndex = props.zIndex;  // ✅ apply z-index dynamically

  ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.clearRect(0, 0, vw, vh);

  for (let i = 0; i < props.count; i++) {
    const x = Math.random() * vw;
    const y = Math.random() * vh;
    const r = props.rMin + Math.random() * (props.rMax - props.rMin);
    const [R,G,B] = props.colors[(Math.random()*props.colors.length)|0];
    const a = props.aMin + Math.random() * (props.aMax - props.aMin);

    ctx.beginPath();
    ctx.fillStyle = `rgba(${R},${G},${B},${a})`;
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fill();
  }
}

function handleResize() {
  drawStars();
}

onMounted(() => {
  drawStars();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

// If props change, redraw
watch(
  () => [props.count, props.rMin, props.rMax, props.aMin, props.aMax, props.colors],
  drawStars
);
</script>

<template>
  <canvas ref="canvasRef" class="static-stars"></canvas>
</template>

<style>
.static-stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
</style>
