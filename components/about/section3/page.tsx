"use client"

import Card1 from "../../common/card1/page"
import Title from "../../common/tittle/page"

const points = ["Turn YAML/JSON into an architecture graph.",
"Automatically detect dangerous patterns like chatty calls and god services.",
"Simulate workloads to understand latency, throughput, and cost."]

export default function Section3(){

    return(
        <div className="flex flex-col justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Title title="What is ArcFind?" isUnderline={true} className="pb-0"/>
            <h2 className="my-2 text-sm font-normal text-white/80 leading-relaxed">{'GO-SIM is a web-based tool that helps you design, inspect, and stress-test microservice architectures. It turns your service definitions into an interactive graph, detects architecture anti-patterns, and runs simulations to estimate performance and cost.'}</h2>
            <Card1 points={points} />
        </div>
    )
}