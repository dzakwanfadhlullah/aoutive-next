"use client";
import Image from "next/image";
export default function Home(){return <main className="exact-page"><picture><source media="(max-width:520px)" srcSet="/phone.png"/><source media="(max-width:900px)" srcSet="/tablet.png"/><Image src="/desktop.png" alt="Aoutive AI" width={1440} height={8477} priority className="source-canvas"/></picture><nav className="hit-nav"><a href="#works" aria-label="How it works"/><a href="#pricing" aria-label="Pricing"/><a href="#faq" aria-label="FAQ"/></nav><div className="hit-sections"><span id="works"/><span id="pricing"/><span id="faq"/></div></main>}
