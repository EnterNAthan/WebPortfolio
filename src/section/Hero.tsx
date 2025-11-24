// Exemple: Hero avec fond animé Neat et contenu par-dessus
import NeatBackground from "../components/neatBackground";

const neatConfig = {
    colors: [
        { color: "#5365FF", enabled: true },
        { color: "#5864FF", enabled: true },
        { color: "#322085", enabled: true },
        { color: "#3B94FF", enabled: true },
        { color: "#6BE7E7", enabled: false },
    ],
    speed: 1.5,
    horizontalPressure: 2,
    verticalPressure: 10,
    waveFrequencyX: 2,
    waveFrequencyY: 10,
    waveAmplitude: 10,
    shadows: 10,
    highlights: 0,
    colorBrightness: 1.2,
    colorSaturation: -3,
    wireframe: false,
    colorBlending: 10,
    backgroundColor: "#003FFF",
    backgroundAlpha: 0, // 0 = fond transparent (laisse voir .neat-bg derrière)
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 10,
    resolution: 1, // baisse à .5 sur mobile si besoin
    yOffset: 0,
} as const;

export default function Hero() {
    return (
        <section className="relative min-h-[110svh] overflow-hidden">
            {/* Canvas Neat derrière, zoomé à 110% */}
            <NeatBackground
                config={neatConfig}
                className="absolute inset-0 -z-10 transform-gpu origin-center scale-[1.10]"
            />
            {/* Contenu */}
            <div className="relative z-10 px-6 py-20 md:py-28 mx-auto max-w-5xl">
                <h1 className="neat-grad-text text-5xl md:text-7xl font-semibold tracking-tight">
                    Background Neat animé
                </h1>
                <p className="mt-5 max-w-prose text-white/80">
                    Dégradé 3D fluide avec ta palette et tes paramètres.
                </p>
                <div className="mt-10 grid gap-5 sm:grid-cols-3">
                    <div className="neat-card p-5">Card A</div>
                    <div className="neat-card p-5">Card B</div>
                    <div className="neat-card p-5">Card C</div>
                </div>
            </div>
        </section>
    );
}
