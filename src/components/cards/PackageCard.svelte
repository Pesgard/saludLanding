<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Shield } from "lucide-svelte";

  interface PackageCardProps {
    title: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }

  let {
    title,
    description,
    features,
    highlighted = false,
  }: PackageCardProps = $props();
</script>

<Card
  class={`relative overflow-hidden transition-all ${
    highlighted ? "border-[#0033A0] shadow-lg" : ""
  }`}
>
  <CardContent class="flex flex-col items-center space-y-4 p-6">
    {#if highlighted}
      <Badge class="absolute right-4 top-4 bg-[#FFE100] text-[#0033A0]">
        Recomendado 
      </Badge>
    {/if}

    <h3 class="text-2xl font-bold text-[#0033A0]">{title}</h3>
    <p class="text-center text-gray-500">{description}</p>

    <ul class="space-y-2 text-sm">
      {#each features as feature}
        <li class="flex items-center gap-2">
          <Shield class="h-4 w-4 text-[#0033A0]" />
          <span>{feature}</span>
        </li>
      {/each}
    </ul>

    <Button class="mt-4 w-full bg-[#0033A0]">Solicitar Cotización</Button>
  </CardContent>
</Card>
