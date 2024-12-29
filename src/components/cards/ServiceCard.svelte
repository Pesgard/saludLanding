<script lang="ts">
  import { Card, CardContent } from "$lib/components/ui/card";
  import type { Icon as IconType } from "lucide-svelte";

  type ServiceCardProps = {
    icon: typeof IconType;
    title: string;
    color: string;
  };

  let { icon: Icon, title, color }: ServiceCardProps = $props();
</script>

<Card class="relative overflow-hidden transition-all hover:shadow-lg">
  <CardContent class="flex flex-col items-center space-y-4 p-6 text-center">
    <div class={`rounded-full ${color} p-3 text-white`}>
      <Icon />
    </div>
    <h3 class="text-xl font-bold text-[#0033A0]">{title}</h3>
  </CardContent>
</Card>
