<script>
  import { onMount } from "svelte";

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    isOpen = false;
  };

  let sections = [
    { id: "inicio", label: "Inicio" },
    { id: "testimonios", label: "Testimonios" },
  ];

  let services = [
    {
      id: "laboratorio",
      title: "Laboratorio Móvil",
      description: "Servicios médicos móviles para empresas",
    },
    {
      id: "paquetes",
      title: "Paquetes Personalizados",
      description: "Soluciones adaptadas a sus necesidades",
    },
    {
      id: "software",
      title: "Software Médico",
      description: "Gestión integral de servicios médicos",
    },
    {
      id: "servicios",
      title: "Servicios Especializados",
      description: "Amplia gama de servicios médicos",
    },
  ];
</script>

<div class="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
  <div class="container flex h-16 items-center justify-between px-4">
    <a href="/" class="flex items-center space-x-2">
      <img src="/favicon.png" alt="Logo" class="h-8 w-auto" />
      <span class="font-bold text-[#0033A0]">Ambulancias Salud</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex">
      <ul class="flex space-x-4">
        {#each sections as section}
          <li>
            <a href={`#${section.id}`} class="hover:text-blue-600 transition">
              {section.label}
            </a>
          </li>
        {/each}
        <li class="relative group">
          <span
            class="cursor-pointer font-semibold hover:text-blue-600 transition"
            >Servicios</span
          >
          <div
            class="absolute left-0 hidden w-64 bg-white shadow-md group-hover:block"
          >
            <ul class="p-4 grid gap-3">
              {#each services as service}
                <li>
                  <a
                    href={`#${service.id}`}
                    class="block p-3 rounded-md hover:bg-gray-100 transition"
                  >
                    <div class="text-sm font-medium">{service.title}</div>
                    <p class="text-sm text-gray-600">{service.description}</p>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </li>
      </ul>
    </nav>

    <a
      href="https://wa.me/+526681160718"
      class="hidden bg-[#FFE100]/75 text-[#0033A0] hover:bg-[#FFE100] md:inline-flex px-4 py-2 rounded"
    >
      Contactar
  </a>

    <!-- Mobile Navigation -->
    <button class="md:hidden" on:click={toggleMenu} aria-label="Toggle menu">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>

  {#if isOpen}
    <div class="absolute top-16 right-0 w-full bg-white shadow-md">
      <nav class="flex flex-col p-4">
        {#each sections as section}
          <button
            on:click={() => scrollToSection(section.id)}
            class="text-left hover:text-blue-600 transition"
          >
            {section.label}
          </button>
        {/each}
        {#each services as service}
          <button
            on:click={() => scrollToSection(service.id)}
            class="text-left hover:text-blue-600 transition"
          >
            {service.title}
          </button>
        {/each}
      </nav>
    </div>
  {/if}
</div>
