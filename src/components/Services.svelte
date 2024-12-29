<script lang="ts">
  import {
    Ambulance,
    Headphones,
    Stethoscope,
    Ban,
    Activity,
    GraduationCap,
    Heart,
    FlaskRound,
    Radio,
    Shovel,
  } from "lucide-svelte";
  import ServiceCard from "./cards/ServiceCard.svelte";

  const services = [
    {
      icon: Ambulance,
      title: "Laboratorio Móvil",
      color: "bg-[#0033A0]",
    },
    {
      icon: Headphones,
      title: "Pruebas Auditivas",
      color: "bg-[#00866D]",
    },
    {
      icon: Stethoscope,
      title: "Espirometría",
      color: "bg-[#D4A017]",
    },
    {
      icon: FlaskRound,
      title: "Laboratorio Clínico",
      color: "bg-[#E41E26]",
    },
    {
      icon: Radio,
      title: "Rayos X",
      color: "bg-[#0066CC]",
    },
    {
      icon: Ban,
      title: "Diagnóstico de Drogas",
      color: "bg-[#00A99D]",
    },
    {
      icon: Activity,
      title: "Seguimiento Lipidemias",
      color: "bg-[#E41E26]",
    },
    {
      icon: GraduationCap,
      title: "Capacitación DC-3",
      color: "bg-[#D4A017]",
    },
    {
      icon: Shovel,
      title: "Salud Bucal",
      color: "bg-[#0033A0]",
    },
    {
      icon: Heart,
      title: "Electro Cardiograma",
      color: "bg-[#FF6B00]",
    },
  ];
</script>

<section class="w-full py-12 md:py-24 lg:py-32" id="servicios">
  <div class="container px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        <h2
          class="text-3xl font-bold tracking-tighter text-[#0033A0] sm:text-4xl md:text-5xl"
        >
          Nuestros Servicios
        </h2>
        <p
          class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Ofrecemos una amplia gama de servicios médicos especializados
        </p>
      </div>
    </div>
    <div
      class="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
    >
      {#each services as service}
        <ServiceCard
          icon={service.icon}
          title={service.title}
          color={service.color}
        />
      {/each}
    </div>
  </div>
</section>
