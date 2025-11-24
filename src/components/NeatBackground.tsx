// src/components/NeatBackground.tsx
import { useEffect, useRef } from "react";
import { NeatGradient, type NeatConfig } from "@firecms/neat";

type Props = {
    config: NeatConfig;
    className?: string; 
};

export default function NeatBackground({ config, className }: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const neatRef = useRef<NeatGradient | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Instancie le gradient
        neatRef.current = new NeatGradient({
            ref: canvas,
            ...config,
        });

        // Nettoyage à l’unmount
        return () => neatRef.current?.destroy();
    }, [config]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: "100%",
                height: "100%",
                display: "block",
                isolation: "isolate",
                pointerEvents: "none", // laisse les clics au contenu
            }}
        />
    );
}
